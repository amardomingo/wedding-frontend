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

app.use(express.json());

app.get('/health', (req, res) =>{
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ status: 'ok' }))
})

app.post('/rsvp', (req, res) => {
    console.log(req.body);
    console.log(req.body.name)
    res.write("ok")
    res.end();
})

app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
})


export default app

