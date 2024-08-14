/*  
problem 1 :
write a javascript progaram to create a new string from a given string taking  the first 3 characters and the last 3 characters
of the last 3 charaters of a string and adding them together ,
the string length must be 3 or more, if not, the original string is returned .

const  makNewString = (str) => 
    str.length < 3 ? str :str.slice(0,3) + str.slice(-3);
console.log(makNewString("hello")); // "hellob"
console.log(makNewString("abc")); // "abc"

console.log(makNewString("abcd")); // "abcda"
*/

/*
problem 2 :
Write a JavaScript  program to extract the first half of a sting of even length.

const firstHalf  = (str) => str.slice(0 ,str.length /2);
console.log(firstHalf("hello")); // "hel"
console.log(firstHalf("abcd")); // "ab"
console.log(firstHalf("abcdef")); // "abc"  // this will throw an error
*/


/*
*/