import { google } from 'googleapis';

const sheetID = process.env.SHEET_ID  || '1pTcIEdOUUY_ghHs8y5CCkmZ1p0IO_9GOex3yqQ7jFA4'
const tabName = process.env.SHEET_TAB_NAME  || 'Invitados'
const sheetColumns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const googleAuth = new google.auth.GoogleAuth(
    { scopes: ['https://www.googleapis.com/auth/spreadsheets']}
)
const sheetClient = google.sheets({
    version: 'v4',
    auth: googleAuth,
})

export default function insertInvitado(invitadoInfo) {
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
    sheetClient.spreadsheets.values.append({
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
