// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let x = {}
//     for (let n of str) 
//         x[n] = x[n] +1  || 1
        
// }

// first get the string into an object and give each letter 
// a value in acending order.

// then iterate tru and then find the highest number and return it


function maxChar(str) {

    let x = {}
    let max = 0
    let maxchar = ''

    for (let n of str ) {
        if (x[n]) {
            x[n]++
        } else {
            x[n] = 1
        }
    }

    for (let j in x) {
        if (x[j] > max ) {
            max = x[j]
           maxchar  = j
        }
    }

    return maxchar

}



module.exports = maxChar;
