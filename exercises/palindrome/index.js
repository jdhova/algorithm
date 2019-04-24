// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// function palindrome(str) {
//     let x = str.split('').reverse().join('')
//     if (x === str ) return true
// }

// Making use of the every helper this checkes the value of each or 
// every element in an array
// 
function palindrome(str) {
   return  str.split('').every((chr , i) => {
        return chr === str[str.length -i -1]
        
    })
}

module.exports = palindrome;
