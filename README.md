# AlgoCasts

jest reversestring/test.js --watch

jest maxchar/test.js --watch

Companion repo to a course on Udemy.com
Some useful JavaScript helpers 

Math.sign()  helps transform numbers to -1
 551 * Math.sign() = -1

reversing a negetive integer in 1 line with Math.sign()

function reverseInt(n) {
   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
reverseInt(-551)



