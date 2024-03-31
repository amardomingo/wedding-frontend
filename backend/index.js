import express from 'express';
import { google } from 'googleapis';

const app = express()
const PORT = process.env.PORT || 3001;
const sheetId = process.env.SHEET_ID || '1pTcIEdOUUY_ghHs8y5CCkmZ1p0IO_9GOex3yqQ7jFA4'
const serviceAccountKeyFile = process.env.SERVICE_ACCOUNT_FILE || '/Users/saralberto/Downloads/my-wedding-sara-alberto-0d7859652a43.json'
const auth = new google.auth.GoogleAuth({
    keyFile: serviceAccountKeyFile,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const authClient = await auth.getClient();
const sheetClient = google.sheets({
    version: 'v4',
    auth: authClient,
});

app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
})

app.post('/rsvp', (req, res) => {
    const rsvp_data = req.body;

    // Save the data of user that was sent by the client

    // Send a response to client that will show that the request was successfull.
    res.send({
        message: 'Response OK',
    });
});

export default app