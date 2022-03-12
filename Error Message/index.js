// When the user clicks the purchase button, render out 
// "Something went wrong, please try again" in the paragraph
// that has the id="error"

let errorParagrapgh = document.getElementById("error")
console.log(errorParagrapgh)

function purchase() {
    console.log("button clicked")
    errorParagrapgh.textContent = "Something went wrong, please try again"
}
