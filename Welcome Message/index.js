// Grab the welcome-el paragraph and store it in a variabe called welcomEL
let welcomeEL = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Michael"
let greeting = "Welcome back"

// Render the welcome message using welcomeEL
welcomeEL.innerText = greeting + " "+ name

// welcomeEL.innerText = welcomeEL.innerText + "!"
welcomeEL.innerText += "!"
