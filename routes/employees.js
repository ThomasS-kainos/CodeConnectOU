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
router.post('employees/add-employee', (req, res) => {
    const { name, email, salary, role, num } = req.body;

    // Validate the input data
    if (!name || !email || !salary || !role || !num) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Create a new employee object
    const newEmployee = { name, email, salary, role, num };

    // Add the new employee using the service
    const success = employeeService.addEmployee(newEmployee);

    if (success) {
        res.json({ success: true, employee: newEmployee });
    } else {
        res.status(500).json({ success: false, message: 'Error adding employee' });
    }
});

module.exports = router;

