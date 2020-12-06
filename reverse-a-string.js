// Declarative
// function reverseString(str) {
//   str = str.split('').reverse().join('')
//   return str;
// }

// reverseString("hello");

// imprative
function reverseString(str) {
  var i , 
  newStr = '' ;
  for(i = str.length - 1 ; i >= 0 ; i-=1 ){
    newStr += str[i]   
  }
  return newStr;
}
reverseString("hello");
