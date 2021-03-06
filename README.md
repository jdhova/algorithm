## AlgoCasts JavScript Algorithms and Data Structures

## Some Usleful JavaScript Helpers

### To test run
jest exercise/test.js --watch
Exampple: jest fizzbuzz/test.js --watch

### Math.sign() helper

Math.sign()  helps transform numbers to -1
 551 * Math.sign() = -1
reversing a negetive integer in 1 line with Math.sign()

function reverseInt(n) {
   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
reverseInt(-551)  returns -155

### Regex

const word = "HELLO THERE!!!!"

word.replace(/[^ \w]/g, "")  returns HELLO THERE without the !!!

word.replace(/[^\w]/g, "")    returns HELLOTHERE without the space and !!!

str.match(/[aeiou]/g)  checks if str includes or letters in str match aeiou (case sensitive)


str.match(/[aeiou]/gi)  checks if str includes or letters in str match aeiou (case in-sensitive)  this is similar to the .include() helper


when convarting  strings to objects tenery operators like 
x[n] = x[n] +1 || 1 
takes less time to execute compared to if else statements



### Printing the Last digit of factorial with recursion

function fact(n) {
   if (n ===1) return n

   return n * fact(n-1)
}
fact(8)

### Printing an array of factorial with loops

function fact (n) {

  let factorial = 1

  let result = []

  for (let i = 1; i <= n; i++) {

      factorial = factorial * i

      result.push(factorial)
  }

  return result
}

fact(8)


### Printing the last digit of the Fibinicci sequence with recursion

  function fib(n) {
      if ( n < 2) return n

      return fib(n-1) + fib (n-2)
  }

  fib(8)


### Printing an array of Fibinacci sequence with Loops

  function fib(n) {

  let result = [0,1,]

  for ( let i = 2; i <= n; i++)  {
    const a = result[result.length -1]

      const b = result[result.length -2]

      result.push(a+b)
    }
    return  result
  }

  fib(8)

### Printing an array of the classical FizzBuzz test

function fizzBuzz (n) {

  let result = []

  for (let i = 1;  result.length < n; i ++) {

    if (i % 15 === 0) {
    result.push('fizz buzz')
  } else if ( i % 5 === 0) {
    result.push('buzz')
  } else if ( i % 3 === 0) {
    result.push('fizz')
  } else { 
    result.push(i)
  }

  }
    return result
}

fizzBuzz(16)

### Memoized Factorial 

const SlowFactorial = function input (n) {
 
    if(n === 1) { return 1  
  }; 
  
  return n * input(n-1);        

 };

 const fastFactorial = function fastFactorial(fn) {

    const memory = {};

    return function(...args) {
      if(memory in args) {
        return memory[args]
      };

      const result = fn.apply(this, args)
      memory[args] = result

      return result
    };

    
 };

 const factorial = fastFactorial(SlowFactorial);

 ### Memoized Fibinacci Sequence

const fastFib = function fastFib(fn){

  const memory = {}

  return function(...args){
    if(memory[args]) {
      return memory[args]
    }

    const result = fn.apply(this, args)
    memory[args] = result

    return result
  }

}

const slowFib = function slowFib(n) {
  if( n < 2 ) return n

  return slowFib(n -1) + slowFib( n -2)
}

slowFib(8)

const memoizedFib = fastFib(slowFib)

###  Recursion Solutions

#### finding the greatest Multiple between two numbers 

function gm(a,b){
  if (!b) return a

  return  gm(b, a%b)
}
gm(222, 628)

#### Finding the power of a number

function power(base, exp){
  if(exp === 0) return 1

  return base *(power(base, exp -1))
}
power(2,3)

#### replicating a number 

function replicateNum(times, num){
  if (times <= 0) return []

  return [num].concat(replicateNum(times -1, num))
}

replicateNum(3,4)





### Data Structures Stacks and Queue

Stacks Last in First out LIFO
Queue  First in First out FIFO

pop removes and push adds to the end while 
shift removes and unshifts adds to the beginig of an array

unshift() adds to the begining of the array

shift() removes to the begining of the array

pop() removes to the end of the array

push() adds to the end of the array




        








