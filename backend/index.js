import express from 'express';

import { google } from 'googleapis';

const app = express()
const PORT = process.env.PORT || 3001;

// const sheetId = process.env.SHEET_ID;
// const serviceAccountKeyFile = process.env.SERVICE_ACCOUNT_FILE;
// const auth = new google.auth.GoogleAuth({
//     keyFile: serviceAccountKeyFile,
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });
// const authClient = await auth.getClient();
// const sheetClient = google.sheets({
//     version: 'v4',
//     auth: authClient,
// });

// middleware for exposing data on req.body
app.use(express.urlencoded({ extended: true }));

app.post('/rsvp', async (req, res) => {
    console.log(req.body);
    res.write('<h1> Registration Successfull :-) </h1>');
    res.write('<p> Name : </h1>' + req.body.name);
    res.write('<p> Acompañantes : </h1>' + req.body.acompanante);
    res.write('<p> Preferencias alimenticias : </h1>' + req.body.preferencias);
    res.write('<p> Necesitas alojamiento : </h1>' + req.body.alojamiento);
    res.write('<p> Necesitas autobús : </h1>' + req.body.autobus);
    res.write('<p> Contacto : </h1>' + req.body.contacto);
    res.end();
})

app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
})


export default app

