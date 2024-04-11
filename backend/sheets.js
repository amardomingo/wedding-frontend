import { google } from 'googleapis';

const sheetID = process.env.SHEET_ID;
const tabName = process.env.SHEET_TAB_NAME;
const sheetColumns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const googleAuth = new google.auth.GoogleAuth(
    { scopes: ['https://www.googleapis.com/auth/spreadsheets']}
)
const authClient = googleAuth.getClient()
const sheetClient = google.sheets({
    version: 'v4',
    auth: googleAuth,
})

export default async function insertInvitado(invitadoInfo) {
    const data = [[
        invitadoInfo.Name,
        invitadoInfo.Apellidos,
        invitadoInfo.Contacto,
        invitadoInfo.Acompanante,
        invitadoInfo.Autobus,
        invitadoInfo.Alojamiento,
        invitadoInfo.Preferencias,
    ]]
    const endColumn = sheetColumns[data.length-1]
    await sheetClient.spreadsheets.values.append({
        spreadsheetId: sheetID,
        range: `${tabName}!A:${endColumn}`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            "majorDimension": "ROWS",
            "values": data
        }
    })
}
