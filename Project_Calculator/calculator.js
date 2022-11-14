
function buttonClick(value) {
    console.log(value);

    if (isNaN(parseInt(value))) {
        // if the value is not a number --> which means it is a symbol!!
        handleSymbols(value);
    }
    else {
        handleNumbers(value);
    }
}

function handleNumbers(value) {
    console.log(value+" Number!!");

}

function handleSymbols(value) {
    console.log(value+" Symbol!!");

}

function initialize() {

    console.log("INITIALIZED !!");
    document.querySelector(".grid-container")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        })
}

initialize();