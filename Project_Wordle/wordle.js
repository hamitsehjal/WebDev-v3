const letters = document.querySelectorAll(".flex-item")

console.log(letters.length)


// const loadingIndicator = document.querySelector(".loading");
// console.log(loadingIndicator.textContent)



function init() {
    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key;
        console.log(action)

        if(action==='Enter'){
            commit(); // which will save the word to compare it to the result!!
        }
        else if(action==='Backspace')
        {
           backspace();
        }
        else if(isletter(action))
        {
            addLetter(action.toUpperCase());
        }
        else{
            // Do Nothing !!
        }

    })
}

init();