const letters = document.querySelectorAll(".flex-item")
const ANSWER_LENGTH = 5



async function init() {

    let currentGuess = ''
    let currentRow = 0

    function isLetter(letter) {
        return /^[a-zA-Z]$/.test(letter);
    }

    function addLetter(letter) {

        // add the letter to the end !!
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter;
        }
        // replace the last letter!!
        else {
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }

        // This line will show the letters on the Screen!!
        // "ANSWER_LENGHT * currentRow" in the below expression will make sure that each time
        // we press enter, we get to write on the next row!!
        letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
    }

    async function commit() {
        if (currentGuess.length !== ANSWER_LENGTH) {
            // do nothing!!
            return;
        }

        currentGuess = ''
        currentRow++;
    }
    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key;
        console.log(action)

        if (action === 'Enter') {
            commit(); // which will save the word to compare it to the result!!
        }
        else if (action === 'Backspace') {
            backspace();
        }
        else if (isLetter(action)) {
            addLetter(action.toUpperCase());
        }
        else {
            // Do Nothing !!
        }

    })
}

init();