// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }
function confirmEnding(str, target) {
  var newstr = ''
  for (var i = target.length ; i > 0 ;i -=1  ){
      newstr += str[str.length  - i]
  } 
  return newstr === target
}


confirmEnding("Bastian", "an");

