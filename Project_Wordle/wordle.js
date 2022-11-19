const letters = document.querySelectorAll(".flex-item")

console.log(letters.length)


const loadingIndicator = document.querySelector(".loading");
console.log(loadingIndicator.textContent)



function init() {
    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key;
        console.log(action)
    })
}

init();