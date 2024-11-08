var dropdownContent = document.querySelector(".dropdownContent");
var dropButton = document.querySelector(".dropButton");

console.log(dropButton)
function showDropdown() {
    console.log("hello");
    console.log(dropdownContent)
    dropdownContent.classList.toggle("visible");
}

window.addEventListener("click", function(e) {
    console.log(e.target);
    if(e.target != dropButton) {
        console.log("bang");
        dropdownContent.classList.remove("visible");
    }
})

function sortItems(sortMethod) {
    dropButton.innerHTML = sortMethod;
    dropdownContent.classList.remove("visible");
}