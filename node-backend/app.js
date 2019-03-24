const fs = require('fs');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const nodemailer = require('nodemailer');
const cors = require("cors");

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});



app.listen(port, () => {
    console.log("Listening on: " + port);
});
