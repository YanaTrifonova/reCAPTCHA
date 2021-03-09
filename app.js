const express = require('express');
const bodyParser = require('body-parser');
const app = express();
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
});
