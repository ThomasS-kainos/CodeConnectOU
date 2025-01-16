const express = require('express');
const router = express.Router();
const LoginService = require('../services/loginService');
const loginService = new LoginService();

// Route to read all employees
router.get('/', (req, res) => {
    const logins = loginService.getAllLogins();
    res.render('logins', { logins: logins });
});

module.exports = router;


