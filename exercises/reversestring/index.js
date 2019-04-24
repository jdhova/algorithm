// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// jest reversestring/test.js --watch

function reverse(str) {
   return str.split('').reverse().join('')
}   
  
  reverse('jude')


module.exports = reverse;
