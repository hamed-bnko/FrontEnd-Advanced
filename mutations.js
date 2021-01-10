function mutation(arr) {
  var  firstElement = arr[0].toLowerCase(),secondElement = arr[1].toLowerCase(),count,result = 0;
  for(let i=0 ; i < secondElement.length ; i+=1){
    count = 0
    for(let j=0 ; j <firstElement.length;j++){
      if(secondElement[i] === firstElement[j]){
         count += 1
      }
    }
     if(count > 0){
        result +=1
    }
  }
  return result === secondElement.length ;
}
console.log(mutation(["hello", "Hello"]))
