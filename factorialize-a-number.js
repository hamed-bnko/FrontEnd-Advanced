// imp
function factorialize(num) {
  var i , newNum = 1;
  if (num === 0) return 1;
  for(i = 1 ; i <= num ; i +=1){
    newNum *= i;
  }
  return newNum;
}

factorialize(5);

// DEC
// Number.prototype.factorialize = function(){
//    var i , newNum = 1;
//   if (this === 0) return 1
//   for(i = 1 ; i <= this ; i +=1){
//     newNum *= i
//   }
//   return newNum;
// }

// var x = (5).factorialize()
