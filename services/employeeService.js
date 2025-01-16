const fs = require('fs');

class EmployeesService {
    constructor() {
        this.filePath = "employees.json";
    }

    // Helper function to read employees from JSON file
    readEmployees() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading employees:', err);
            return [];
        }
    }

    // Get all employees
    getAllEmployees() {
        return this.readEmployees();
    }

    // Helper function to write employees to JSON file
    writeEmployees(employees) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(employees, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing employees:', err);
        }
    }

    // Add new employee
    addEmployee(newEmployee) {
        const employees = this.getAllEmployees();  // Get existing employees
        employees.push(newEmployee);  // Add the new employee to the array
        this.writeEmployees(employees);  // Save updated employee list
        return true;
    }
}

module.exports = EmployeesService;
