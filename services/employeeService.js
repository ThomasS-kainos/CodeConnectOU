// userService.js
const fs = require('fs');

class UserService {
    constructor() {
        this.filePath = "employees.json";
    }



    // Get all users
    getAllUsers() {
        return this.readUsers();
    }


}

module.exports = employeeService;
