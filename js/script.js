// JavaScript Display Welcome Message
welcomeMessage();

function welcomeMessage() {
    const userResponse = prompt("Welcome to my Rafid website!What is your name");

    // Handle null or empty input
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    } 

    // Display the welcome message
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse || "Guest"}! Welcome to my Rafid website.`;
}

function submitmessage() {}