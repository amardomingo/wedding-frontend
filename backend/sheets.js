import { google } from 'googleapis';

const sheetID = process.env.SHEET_ID;
const tabName = process.env.SHEET_TAB_NAME;
const sheetColumns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const googleAuth = new google.auth.GoogleAuth(
    { scopes: ['https://www.googleapis.com/auth/spreadsheets']}
)
const sheetClient = google.sheets({
    version: 'v4',
    auth: googleAuth,
})

export default function insertInvitado(invitadoInfo) {
    const data = [[
        invitadoInfo.nombre,
        invitadoInfo.contacto,
        invitadoInfo.autobus,
        invitadoInfo.alojamiento,
        invitadoInfo.alergias === "none" ? "" : invitadoInfo.alergias,
        "Adulto", // Menu
        invitadoInfo.domingo,
        "", // Acompañante de
    ]]
    for (const acompanate of invitadoInfo.acompanantes) {
        data.push([
            acompanate.nombre,
            "", //Contacto
            invitadoInfo.autobus,
            invitadoInfo.alojamiento,
            acompanate.alergias === "none" ? "" : acompanate.alergias,
            acompanate.menu,
            invitadoInfo.domingo,
            invitadoInfo.nombre // Acompanante de 
        ])
    }
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
    }).then(_ => console.log('Data insert correctly in sheet'))
}
