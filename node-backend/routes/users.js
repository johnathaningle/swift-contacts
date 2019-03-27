const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const {google} = require('googleapis');
const readline = require('readline');
const fs = require('fs');

module.exports = router;

router.get('/login/', (req, res) => {
    res.send('this is the login route');
});

router.get('/register/', (req, res) => {
    res.send('register page');
})