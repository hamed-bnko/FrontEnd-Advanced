// function largestOfFour(arr) {
//   var newArr = []
//   arr.map(function(a) {
//     var max = Math.max(...a)
//     newArr.push(max)
//   })
//   return newArr;
// }
function largestOfFour(arr) {
  var newArr = [],max ;
  for (var i = 0; i < arr.length; i+=1 ){
    max =arr[i][0]
    for (var j = 0; j  < arr[i].length ; j += 1){
        if (max < arr[i][j]  ){
          console.log(arr[i][j])
          max = arr[i][j]
        }  
    }
    newArr.push(max)
    
    
  }
  return newArr;
}


// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
