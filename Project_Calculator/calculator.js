
let buffer = "0";
let runningTotal = 0;
let previousOperator;
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

function handleMathOperations(symbol) {
    if (buffer === "0") {
        // do nothing !1
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }
    else {
        flushOperations(intBuffer);
    }

    previousOperator = symbol;
    buffer = 0;
}

function flushOperations(value) {
    // Perform all the Math Operations !!
    if (previousOperator === '+') {
        runningTotal += value;
    }
    else if (previousOperator === '/') {
        runningTotal /= value;
    }
    else if (previousOperator === 'x') {
        runningTotal *= value;
    }
    else if (previousOperator === '-') {
        runningTotal -= value;
    }
}
function handleSymbols(symbol) {
    console.log(symbol + " Symbol!!");

    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '⬅':
            if (buffer.length === 1) {
                buffer = "0";
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '=':
            console.log("Equals To!!");
            break;
        case '+':
        case '/':
        case 'x':
        case '-':
            console.log("Math Operations!!");
            handleMathOperations(symbol);
            break;
    }

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