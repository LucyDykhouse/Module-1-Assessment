//////// INSTRUCTIONS ///////////

/* 
Create a new file called password.js. Write a program that does the following:
Welcome the user to the password validator tool
Prompt the user for a password to validate
Check if the user’s password meets the following constraint:
At least 10 characters long
If the user’s password meets the constraint, show a success message to the user
If the user’s password fails the constraint, show a failure message to the user
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("\nWelcome to the password validator tool!\n\nPlease enter the password to validate:  ", (answer) => {
    if (answer.length >= 10) {
        console.log("\nSuccess! Your password is valid.\n");
    } else {
        console.log("\nYour password is invalid.\n");
    }
    reader.close();
});

