const express = require('express');
const router = express.Router();
const EmployeesService = require('../services/employeeService');
const employeeService = new EmployeesService();

// Route to read all employees
router.get('/', (req, res) => {
    const employees = employeeService.getAllEmployees();
    res.render('employees', { employees: employees });
});

module.exports = router;


