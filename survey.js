const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


rl.question('What is your name or nickname? ', (Name) => {
  rl.question('What activity do you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('What type of meal is your favorite (e.g. brunch, dinner)? ', (mealType) => {
        rl.question('Which sport is your absolute favorite? ', (sport) => {
          rl.question('what is your superpower? ', (power) => {
            console.log(`${Name} loves ${activity} while ${listen} for ${mealType}, prefers ${sport} over any other sport, and is amazing at ${power}!`);
            rl.close();
          });
        });
      });
    });
  });
});
