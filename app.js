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
   // console.log(req);
});
