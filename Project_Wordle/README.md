# Project: WordGuess Game

In this Project, I made a very basic clone of "wordle" - __WordGuess__
If you've never seen that before, here it is:

![wordle.html](https://github.com/hamitsehjal/WebDev-v3/blob/main/Project_Wordle/pics/wordle.png?raw=true "Optional Title")


*IMP:My Project doesn't work on mobile phones.* 

### Here's how you Play it:

- There is a secret five letter word chosen
- Players have six guesses to figure out the secret word. After six guesses, they lose
- If the player guesses a letter that is in the right place, it is shown as green
- If the player guesses a letter that is in the word but not in the right place, it is shown as yellow
- It does account for however many of the letter exist in the word. For example, if the player guesses "SPOOL" and the word is "OVERT", one "O" is shown as yellow and the second one is not.
- If the player guesses the right word, the player wins and the game is over.

You need to call an API to get the secret word. I used the one's created by [Frontend Masters](https://frontendmasters.com/).

GET https://words.dev-apis.com/word-of-the-day

POST https://words.dev-apis.com/validate-word

### Adding a web font
You can add a font using Google Web Fonts (lots of ways to do it, Google's is easy) by adding this tag in the <head>
```bash

<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
  rel="stylesheet"
/>
```
and by adding font-family: 'Open Sans', sans-serif; to whatever you want to change the font to be. You don't have to but it's pretty cool! [Check out Google Fonts][font] if you're curious.

You can check my Work here:
- Here is my [HTML](https://github.com/hamitsehjal/WebDev-v3/blob/main/Project_Wordle/wordle.html) (you'll need to view source)
- Here is my [CSS](https://github.com/hamitsehjal/WebDev-v3/blob/main/Project_Wordle/style.css)
- Here is my [JavaScript](https://github.com/hamitsehjal/WebDev-v3/blob/main/Project_Wordle/wordle.js)
## Deployment

To deploy this project:

```bash
  git clone https://github.com/hamitsehjal/WebDev-v3/tree/main/Project_Wordle
```
```bash
  Open the "wordle.html" in any browser
```
*__wordle.html__ refers to the file that contains the source code for this Project!!

## Acknowledgements

 - [Project Idea - Frontend Masters](https://btholt.github.io/complete-intro-to-web-dev-v3/)
 - [Awesome README Builder - readme.io](https://readme.so/editor)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hamitSehjal/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SehjalHamit)

