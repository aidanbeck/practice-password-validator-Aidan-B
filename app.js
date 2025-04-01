const input = require('readline-sync');
let password;

password = input.question("Please enter a password: ");
while (
    password.length < 8 ||
    !containsUpperCase(password) ||
    !containsNumber(password)
) {
    password = input.question("Password did not meet requirements.\nPlease enter a new password: ");
}

function containsUpperCase(string) {
    if (string === string.toLowerCase()) {
        return false;
    } else {
        return true;
    }
}

function containsNumber(string) {
    for (i = 0; i < 10; i++) {
        if (string.includes(i)) { return true; }
    }
    return false;
}