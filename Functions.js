// Set up the race

function countDown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countDown()

// Create a function that logs out the number 42 to the console
// Call/invoke the function

function myLogger() {
    console.log(42)
}

myLogger()


// Create a function the logs out the sum oif all the lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

logLapTime()


// Create a function that increment the lapsCompleted variable with one
// Run it three times
let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
} 

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)

// Create a function that logs out "Hi there, Linda!" when called
let name = "Linda"
let greeting = "Hi there"

function greetLinda() {
    console.log(greeting + " " + name + "!")
}

greetLinda()


// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
let myPoints = 3

function add3Points() {
    myPoints += 3 
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point() 
// Call the function to that line below logs out 10
console.log(myPoints)
