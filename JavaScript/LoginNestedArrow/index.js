const readline = require("readline");

// Create a login tracker for a specific user.
function createLoginTracker(userInfo) {

    // Keep track of the number of login attempts.
    let attemptCount = 0;

    // Nested arrow function that handles each login attempt.
    const login = (passwordAttempt) => {

        // Prevent further attempts after three failed attempts.
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Increase the attempt count.
        attemptCount++;

        // Check whether the entered password is correct.
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Return a message showing the failed attempt.
        return `Login attempt ${attemptCount}: Login failed`;
    };

    // Return the inner function.
    return login;
}


// User information
const userInfo = {
    username: "user1",
    password: "password123"
};


// Create the login tracker.
const loginTracker = createLoginTracker(userInfo);


// Create a command-line interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Ask the user to enter the username.
rl.question("Enter your username: ", (username) => {

    // Check the username.
    if (username !== userInfo.username) {
        console.log("Invalid username.");
        rl.close();
        return;
    }

    // Function to ask for the password.
    const attemptLogin = () => {

        rl.question("Enter your password: ", (password) => {

            // Send the entered password to the login tracker.
            const result = loginTracker(password);

            console.log(result);

            // Allow another attempt unless the account is locked
            // or the login was successful.
            if (result === "Login successful") {
                console.log("Welcome to your account!");
                rl.close();
            } 
            else if (
                result ===
                "Account locked due to too many failed login attempts"
            ) {
                rl.close();
            } 
            else {
                attemptLogin();
            }
        });
    };

    // Start the first login attempt.
    attemptLogin();
});