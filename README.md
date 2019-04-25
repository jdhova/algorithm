# AlgoCasts JavScript Algorithms and Data Structures

# Some Usleful JavaScript Helpers

# To test run
jest exercise/test.js --watch
Exampple: jest fizzbuzz/test.js --watch

Math.sign() helper
Math.sign()  helps transform numbers to -1
 551 * Math.sign() = -1
reversing a negetive integer in 1 line with Math.sign()

function reverseInt(n) {
   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
reverseInt(-551)  returns -155







