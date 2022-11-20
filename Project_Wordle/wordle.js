const letters = document.querySelectorAll(".flex-item")
const ANSWER_LENGTH = 5

const loadingIndicator = document.querySelector('.loading');
console.log(loadingIndicator.innerText)


async function init() {

    let currentGuess = ''
    let currentRow = 0
    setLoading(true);
    // Let's go and grab the word of the Day!!
    const res = await fetch("https://words.dev-apis.com/word-of-the-day")
    const resObj = await res.json()

    const word = resObj.word.toUpperCase();
    setLoading(false)
    console.log(word)

    const wordParts = word.split("")
    console.log(wordParts)
    // We are making map of "right answer"
    const map = makeMap(wordParts);


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



        // TODO : validate the word using API

        // TODO : is correct, is wrong or is close ??

        // if any letter is correct..

        //The split() method splits a string into an array of substrings
        const guessParts = currentGuess.split("");

        for (let i = 0; i < ANSWER_LENGTH; i++) {
            // Mark as Correct!!
            if (wordParts[i] === guessParts[i]) {
                letters[ANSWER_LENGTH * currentRow + i].classList.add('correct')
                map[guessParts[i]]--;

            }
        }

        for (let i = 0; i < ANSWER_LENGTH; i++) {
            if (wordParts[i] === guessParts[i]) {
                // do nothing
            }
            else if (wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) {
                letters[ANSWER_LENGTH * currentRow + i].classList.add('close')
                map[guessParts[i]]--;
            }
            else {
                letters[ANSWER_LENGTH * currentRow + i].classList.add('wrong')

            }

        }

        // TODO : win or loose situation !!

        currentGuess = ''
        currentRow++;
    }

    function backspace() {
        currentGuess = currentGuess.substring(0, currentGuess.length - 1);
        letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = '';
    }
    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key;
        // console.log(action)

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

    function setLoading(isLoading) {

        // if(isLoading)
        // {
        //     // page is being loaded up
        //     // so we need to show up the "indicator"
        //     loadingIndicator.classList.remove('hidden');
        // }
        // else{
        //     loadingIndicator.classList.add('hidden');
        // }


        //The toggleAttribute() method of the Element interface toggles a Boolean attribute 
        //(removing it if it is present and adding it if it is not present) on the given element.
        loadingIndicator.classList.toggle('show', isLoading)
    }

    function makeMap(array) {
        const obj = {}

        for (let i = 0; i < array.length; i++) {
            const letter = array[i]
            if (obj[length]) {
                obj[letter]++;
            }
            else {
                obj[letter] = 1;
            }
        }
        return obj

    }
}

init();