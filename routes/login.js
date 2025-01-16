const express = require('express');
const router = express.Router();
const LoginService = require('../services/loginService');
const loginService = new LoginService();

// Route to read all logins
router.get('/', (req, res) => {
    const logins = loginService.getAllLogins();
    res.render('login', { logins: logins });
});

// Route to handle login form submission
router.post('/', (req, res) => {
    const { email, password } = req.body;
    const user = loginService.validateLogin(email, password);

    if (user) {
        res.redirect('./employee');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;


