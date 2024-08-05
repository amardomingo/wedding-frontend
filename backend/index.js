import express from 'express';
import insertInvitado from './sheets.js';

const app = express();
const PORT = process.env.PORT || 3001;

const IBAN = process.env.BANK_ACCOUNT;
if (!IBAN) {
  console.log('environment variable BANK_ACCOUNT is mandatory');
  process.exit(1);
}
app.use(express.json());

app.get('/health', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'ok' }));
});

app.post('/rsvp', async (req, res) => {
  try {
    await insertInvitado(req.body);
    res.end(JSON.stringify({ iban: IBAN, status: 'ok' }));
  } catch (error) {
    console.error('Error processing request', error);
    res.status(500).json({
      iban: '',
      error:
        'Se ha producido un error, por favor intentalo en otro momento o ponte en contacto con nosotros',
    });
  }
});

app.get('/iban', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ iban: IBAN }));
});

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
});
