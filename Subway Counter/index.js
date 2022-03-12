// let count = 5
// count = 2
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// 2. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // 3. Create a variable that contains both the count and the dash seperator, i.e. "12 - "
    let countStr = count + " - "
    // 4. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr                                                // textContent and innerText are pre much same
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}
