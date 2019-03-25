const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.send("welcome");
});

router.get('/test/', (req, res) => {
    res.send(process.env);
});