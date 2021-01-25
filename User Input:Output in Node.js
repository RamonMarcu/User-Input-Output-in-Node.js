//app.js

let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

process.stdin.on('data', playGame);


//bash.js

$ node app.js
I'm thinking of a number from 1 through 10. What do you think it is? 
(Write "quit" to give up.)

Is the number ... 7
Nope. Guess again!
Is the number ... 5
Nope. Guess again!
Is the number ... 2
Nope. Guess again!
Is the number ... 9
Nope. Guess again!
Is the number ... 10
Nope. Guess again!
Is the number ... 8
Nope. Guess again!
Is the number ... 4
Woah you got it! Are you psychic? See you later!
$ 
