import path from 'path';
import { dirname } from 'path';
import express from 'express';
import address_api from './address.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));



app.post('/send', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    
    address_api()
        .then(response => {
            console.log(response);
        })
    
    /*const url = "https://random-data-api.com/api/address/random_address";
    https.get(url, (response) => {
        response.on("data", (data) => {
            const address = JSON.parse(data);
            const address_dict = {
                "uid": address.uid,
                "city": address.city,
                "postcode": address.postcode,
                "country": address.country
            }
            console.log("UID : ", address_dict["uid"]);
            console.log("CITY : ", address_dict["city"]);
            console.log("POST-CODE : ", address_dict["postcode"]);
            console.log("COUNTRY : ", address_dict["country"]);
        });
    });*/
});

app.listen(3030, () => {
    console.log('server start on port 3030');
});