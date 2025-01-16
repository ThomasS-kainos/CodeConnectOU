const express = require('express');
const router = express.Router();
const LoginService = require('../services/loginService');
const loginService = new LoginService();

// Route to read all logins
router.get('/', (req, res) => {
    const logins = loginService.getAllLogins();
    res.render('login', { logins: logins });
});

module.exports = router;


