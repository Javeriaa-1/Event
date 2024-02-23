const noteButton = document.getElementById("button");
const titleInput = document.getElementById("title");
const discriptionInput = document.getElementById("discription");

console.log(titleInput)
console.log(discriptionInput)

console.log(noteButton)

const handleNoteButton = () => {
    console.log("button clicked")
}

noteButton.addEventListener("click", handleNoteButton)