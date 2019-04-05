const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const {google} = require('googleapis');
const readline = require('readline');
const fs = require('fs');
const AuthenticationController = require('../controllers/AuthenticationController');

module.exports = router;

router.post('/login', (req, res) => {
    AuthenticationController.login(req, res);
});

router.post('/register', (req, res) => {
    AuthenticationController.register(req, res);
})