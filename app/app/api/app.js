const express = require('express');

const db = require('./db');

const app = express();

require('./config')(app);
require('./routes')(app, db);

const port = 3001;

app.listen(port, () => console.log(`Magic happens on :${port}`));

module.exports = app;
