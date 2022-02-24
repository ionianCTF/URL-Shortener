'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('./routes/urlRoutes.js');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded( { extended: true }));
app.use(express.json());
app.use(cors());

//app.use('/', routes.routes);
app.use('/', routes.routes);

//Listen on port
app.listen(port, () => console.log(`Listening on port ${port}`))
