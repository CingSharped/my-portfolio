import { google } from "googleapis";

export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            process.env.CLIENT_EMAIL,
            null,
            process.env.PRIVATE_KEY, 
            ['https://www.googleapis.com/auth/spreadsheets']
        ); 

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: err.message}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: '1Nxwohp713n5WJbGzNOlhc0eT2X665ZenhmVWnJHygcw',
                range: 'Sheet1'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(400).send(JSON.stringify({projectData: data.data.values}));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: e, message: e.message}));
    }
}