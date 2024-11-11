var dropdownContent = document.querySelector(".dropdownContent");
var dropButton = document.querySelector(".dropButton");
var items = document.getElementsByClassName("item");
everything();
function everything() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("visible");
    }
}

function showDropdown() {
    dropdownContent.classList.toggle("visible");
}

window.addEventListener("click", function(e) {
    if (e.target != dropButton) {
        dropdownContent.classList.remove("visible");
    }
});

var names = {
    everything: "Everything",
    prints:"3d Prints",
    leds:"Led Signs",
    ornaments:"Ornaments",
    other: "Other",
}

function sortItems(sortMethod) {
    dropButton.innerHTML = `${names[sortMethod]} <i class="arrow down"></i>`;
    dropdownContent.classList.remove("visible");
    
    let sortItems = [];
    if (sortMethod !== 'everything') {
        sortItems = Array.from(document.getElementsByClassName(sortMethod));
        

        // Loop through all items and toggle the "visible" class based on sorting
        for (let i = 0; i < items.length; i++) {
            if (sortItems.includes(items[i])) {
                items[i].classList.add("visible");
            } else {
                items[i].classList.remove("visible");
            }
        }
    }else {
        everything();
    }
}

