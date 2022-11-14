

function initialize() {
    document.querySelector("grid-container")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        })
}