const fs = require('fs');
const express = require('express');
const AWS = require("aws-sdk");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const nodemailer = require('nodemailer');
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {sequelize} = require('./models');


//create the app
const app = express();
//dynmaically assign the port
const port = process.env.port || 5000;

//Extensions for the web server
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

//Routes for the web API
app.use('/', require('./routes/index'));
app.use('/account/', require('./routes/users'));





//Run the web server
app.listen(port, () => {
    console.log("Listening on: " + port);
});
