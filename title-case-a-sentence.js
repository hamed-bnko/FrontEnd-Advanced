function titleCase(str) {
  var i ,newStr ='' ;
  for(i= 0; i < str.length; i+=1 ){
    if (i === 0 || str[i - 1] === " "){
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
      
    } 
  }
  return newStr;
}
titleCase("I'm a little tea pot");
