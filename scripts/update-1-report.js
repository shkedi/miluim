const fetch = require('node-fetch');
// URL to Google Sheets API
const apiUrl = "https://content-sheets.googleapis.com/v4/spreadsheets/1sqOjhPwXQjKdKFy-AgprEPpOAY0hhqrbQ-bIZGINuG4/values/%D7%93%D7%95%D7%97%201!A%3AZZZ?key=<key1 from last pass>";

// Bearer token for authorization
const bearerToken = "<authorization>";

async function findMatchingIndexes() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        console.log(data)
        const values = data.values || [];
        const matchingIndexes = [];

        console.log(values.length + "yyyy")
        // Loop through the rows and check the 4th element
        for (let i = 0; i < values.length; i++) {
            const row = values[i];
            if (row[2] === '8428816') {
                console.log(i);
                console.log(row)
            }
            if (row[2] === "חאדרי" && row[3] === 'נדב חי') {
                if (row[4] === 'ב') {
                    matchingIndexes.push(i);
                }
            }
        }
        console.log("Matching indexes:", matchingIndexes);
        console.log("Sum of:", matchingIndexes.length);
        return matchingIndexes;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

async function updateSheetValue(cell, index) {
    const specificCellUrl = `https://content-sheets.googleapis.com/v4/spreadsheets/1sqOjhPwXQjKdKFy-AgprEPpOAY0hhqrbQ-bIZGINuG4/values/דוח 1!${cell}${index + 1}?valueInputOption=RAW&alt=json&key=<key1 from lastpass>`
    const bodyData = {
        "values": [
            //["נוכח"]
            ["לא בשמפ"]
            //["לא התייצב"]
            //["נפקד"]
            //["מסופח"]
            //["שחרור מפקד"]
            //["שחרור רפואי"]
            // ["פצוע"]
           //["סיים שמפ"]
        ]
    };

    try {
        const response = await fetch(specificCellUrl, {
            method: 'PUT',  // Use PUT to update a cell's value
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)  // Body must be JSON string
        });

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error(`Error updating row ${index}:`, error);
    }
}

// Utility function to introduce a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const columns = [
    //"AB", "AC",
    //"AD",
    //"AE", "AF", "AG",
    //"AH",
    //"AI",
    //"AJ", "AK", "AL", "AM",
    //"AN", "AO", "AP",
    //"AQ", "AR",
    //"AS",
    //"AT", "AU",
    //"AV", "AW", "AX",
    //"AY", "AZ",

    //'BA',
    //'BB',
    'BC', 'BD',
    'BE', 'BF', 'BG', 'BH',
    'BI', 'BJ', 'BK', 'BL',
    'BM', 'BN', 'BO', 'BP',
    'BQ', 'BR', 'BS', 'BT',
    'BU', 'BV'
];

async function processMatchingIndexes() {
    const matchingIndexes = await findMatchingIndexes();

    for (const c of columns) {
        for (const index of matchingIndexes) {
            await updateSheetValue(c, index);
            await delay(1000);
        }
    }
}

processMatchingIndexes();
