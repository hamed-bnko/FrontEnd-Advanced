function chunkArrayInGroups(arr, size) {
  var arr1 =[] , subArr = [],count =0;
  for(let i=0 ;i < arr.length ; i +=1 ) {
    count +=1
    subArr.push(arr[i])
    if(count === size || i === arr.length - 1){
      arr1.push(subArr)
      subArr = [];
      count =0
    } 
  }
  return arr1;
}
console.log(
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
chunkArrayInGroups(["a", "b", "c", "d"], 2);