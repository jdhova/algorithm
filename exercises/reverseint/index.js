// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// first we aim at turning the number to a string so we can work with
// then we revsese the string and then later onvart to a no using parseInt


// function reverseInt(n) {
//    const x = n.toString().split('').reverse().join('')
//    if(n < 0) return parseInt(x) * -1 
//     return parseInt(x)

// }




function reverseInt(n) {
   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)

}


module.exports = reverseInt;
