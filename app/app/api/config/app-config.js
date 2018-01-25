/* globals __dirname */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const config = (app) => {
    app.use(morgan('combined'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    app.use('/public', express.static(path.join(__dirname, '../../client')));

    app.use(cors());
};

module.exports = config;
