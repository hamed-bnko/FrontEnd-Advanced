// shoud not be used Declaration resolve 
//console.log(str.repeat(num))
// imp
function repeatStringNumTimes(str, num) {
  var i,newStr = ''
  if (num <= 0) return ''
  for(i = 1 ;i <= num ;i+=1 ){
     newStr += str
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
