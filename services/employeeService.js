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
}

module.exports = EmployeesService;
