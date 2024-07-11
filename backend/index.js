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

app.post('/rsvp', (req, res) => {
  console.log(req.body);
  insertInvitado(req.body);
  res.end(JSON.stringify({ iban: IBAN, status: 'ok', error: '' }));
});

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
});
