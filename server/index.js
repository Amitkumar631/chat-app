const path = require('path');
const express = require('express');
const app = express();
const https = require("https");

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
    console.log(req.body);
    const url = "https://random-data-api.com/api/address/random_address";
    https.get(url, (response) => {
        response.on("data", (data) => {
            const address = JSON.parse(data);
            console.log(address);
        });
    });
});

app.listen(3030, () => {
    console.log('server start on port 3030');
});