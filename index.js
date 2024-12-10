const api = require('nordnet-next-api');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    api.get('https://api.test.nordnet.se/next/2')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.status(500).send(error.message);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});