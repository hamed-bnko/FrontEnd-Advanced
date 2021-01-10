function bouncer(arr) {
 arr =  arr.filter(a => Boolean(a) !== false)
  return arr;
}
bouncer([7, "ate", "", false, 9]);