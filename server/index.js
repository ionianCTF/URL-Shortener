const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 3001;
var cors = require('cors');

const Handler = require('./handler.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/:url', (req, res) => {
    res.send({ message: Handler.redirect(req.params.url) })
});


router.post('/add/:new_url', (req, res) => {
    console.log(req.params.new_url);
});

app.use("/", router);
