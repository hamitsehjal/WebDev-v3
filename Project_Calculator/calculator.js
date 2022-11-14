
let buffer = "0";

const screen = document.querySelector(".screen");
function buttonClick(value) {

    if (isNaN(parseInt(value))) {
        // if the value is not a number --> which means it is a symbol!!
        handleSymbols(value);
    }
    else {
        handleNumbers(value);
    }

    // we will call the rerender function here
    // So whenever, anyone clicks on the button, they see current value
    rerender();
}

function handleNumbers(number) {

    if (buffer === '0') {
        buffer = number;
    }
    else {
        buffer += number;
    }

}

function handleSymbols(symbol) {
    console.log(symbol + " Symbol!!");

}

function initialize() {

    console.log("INITIALIZED !!");
    document.querySelector(".grid-container")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        })
}

// rerender function updates the value on the Screen of the Calculator !!
function rerender() {
    screen.innerText = buffer;
}
initialize();