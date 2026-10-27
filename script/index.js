//isValidPassword function

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

const isValidPassword = (username, password) => {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(" ")) {
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}

console.log(isValidPassword(username, password));