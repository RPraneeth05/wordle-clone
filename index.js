const p = require('prompt-sync')();
const words = require('./words');
const sol = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < 5; i++) {
   let guess = p('Enter word: ');
   let mem = sol.split('');
   for (let i = 0; i < sol.length; i++) if (mem[i] == guess[i]) mem[i] = '*';
   let res = [];
   for (let i = 0; i < sol.length; i++) {
      if (sol[i] == guess[i]) { res.push(`\x1b[32m${guess[i]}\x1b[0m`); }
      else if (mem.includes(guess[i])) { res.push(`\x1b[33m${guess[i]}\x1b[0m`); mem[mem.indexOf(guess[i])] = '*'; }
      else { res.push(guess[i]); }
   }
   console.log(res.join(''));
   if (guess == sol) break;
}