const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const request = require('request');
const cors = require('cors');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

app.post('/submit', function (req, res) {
    console.log("Hello from submit");
    console.log(req.body);

    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({"failed": 1, "responseDescription": "Please select captcha"});
    }

    const secretKey = "6LdqyXgaAAAAADWCMp-f8wDaOKKonf0IoDKc40Z3";

    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

    request(verificationUrl,function(error,response,body) {
        body = JSON.parse(body);

        if(body.success !== undefined && !body.success) {
            return res.json({"failed" : 1,"responseDescription" : "Failed captcha verification"});
        }
        res.json({"failed" : 0,"responseDescription" : "Success"});
    });
});
