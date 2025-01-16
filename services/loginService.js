const fs = require('fs');

class LoginService {
    constructor() {
        this.filePath = "login.json";
    }

    // Helper function to read logins from JSON file
    readLogins() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading logins:', err);
            return [];
        }
    }

    // Get all Logins
    getAllLogins() {
        return this.readLogins();
    }

    
}

module.exports = LoginService;
