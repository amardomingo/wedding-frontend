/* eslint no-console: "off" */

import express from 'express';
import insertInvitado from './sheets.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'ok' }));
});

app.post('/rsvp', (req, res) => {
  console.log(req.body);
  insertInvitado(req.body);
  res.write('ok');
  res.end();
});

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
});

export default app;
