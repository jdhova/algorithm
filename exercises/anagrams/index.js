// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



function anagrams (stringA, stringB) {

   return  cleanStr(stringA) === cleanStr(stringB) 
   
    
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowercase().split('').sort().join('')
}


module.exports = anagrams;



// function anagrams(stringA, stringB) {
    
//     const cleanStringA = buildChar(stringA)
//     const cleanStringB = buildChar(stringB)

//     if (Object.keys(cleanStringA).length !== Object.keys(cleanStringB).length) return false 


//     for( let j in cleanStringB) {
//         if (cleanStringB[j] === cleanStringA[j]) return true 
        
//     }
//     //  return true 

// }


// function buildChar(str) {
//     const x = {}
//     for (let n of str.replace(/[^\w]/g,'').toLowerCase()) {

//         x[n] = x[n] +1 || 1

//         // if(x[n]) {
//         //     x[n]++
//         // } else  {
//         //     x[n] =1
//         // }
//     }
//     return x
// }
