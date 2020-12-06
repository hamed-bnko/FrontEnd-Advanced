function findLongestWordLength(str) {
  str = str.split(' ')
  str = Max(str)
  return str;
}

function Max(arr){
  var Str,i,max = arr[0].length;
  for(i = 0 ; i < arr.length ; i++ ){
    if (arr[i].length > max){
      max = arr[i].length
      Str = arr[i]
    }
  }
  return max
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

