const letters = document.querySelectorAll(".flex-item")
const ANSWER_LENGTH = 5



async function init() {

    const currentGuess = ''
    function isLetter(letter) {
        return /^[a-zA-Z]$/.test(letter);
    }

    function addLetter(letter) {
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter;
        }
        else {
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }
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