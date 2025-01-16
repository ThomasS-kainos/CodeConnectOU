// routes/employees.js
const express = require('express');
const router = express.Router();
const EmployeesService = require('../services/employeeService');
const employeeService = new EmployeesService();

// Route to read all employees
router.get('/', (req, res) => {
    const employees = employeeService.getAllEmployees();
    res.render('employees', { employees: employees });
});

// Route to handle adding a new employee
router.post('/add-employee', (req, res) => {
    const { name, email, salary, role, num } = req.body;

    if (!name || !email || !salary || !role || !num) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newEmployee = { name, email, salary, role, num };
    const success = employeeService.addEmployee(newEmployee);

    if (success) {
        res.redirect('/employees')
    } else {
        res.status(500).json({ success: false, message: 'Error adding employee' });
    }


});

module.exports = router;

