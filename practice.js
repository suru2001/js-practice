/*
javascript practice exercise 
problem 1
 write a javascript program to check two numbers and return true if
 one of them are 100 or if the sum of the two numbers is 100
 
 const isSum =(a,b) => a===100|| b===100||(a+b)==100;
 
 
 console.log(isSum(0,100));
 console.log(isSum(10,0));
 console.log(isSum(90,10));

*/ 
/*  
problem 2 
write a javascript program to get file extension from file name 


const getFile = (str)=> str.slice(str.lastIndexOf('.'))


console.log(getFile("index.js"));
console.log(getFile("image.config.jpg"));
*/

/*
problem 3
write a javascript program to replace every charater in a given string with the charater following it in the alphabet 

function shiftCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length;i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        if (charCode === 90) {
          result += 'A';
        } else {
          result += String.fromCharCode(charCode + 1);
        }
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        if (charCode === 122) {
          result += 'a';
        } else {
          result += String.fromCharCode(charCode + 1);
        }
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(shiftCharacters("Suruchi wagh ")); // Output: "Ifmmp, Xpsme!"
  const moveForward =(str) =>
      str
  .split("")
  .map(char => String.fromCharCode(char.charCodeAt(0)+1))
  .join("") ;
  
  console.log(moveForward("abcd"));
*/
