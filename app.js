const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

app.post('/submit', function (req, res) {
    console.log("Hello from submit");
});
