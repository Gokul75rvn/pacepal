class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    // Method to validate user credentials
    validatePassword(inputPassword) {
        return this.password === inputPassword;
    }

    // Method to get user details
    getUserDetails() {
        return {
            id: this.id,
            username: this.username
        };
    }
}

module.exports = User;