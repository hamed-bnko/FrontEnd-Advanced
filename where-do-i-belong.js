function getIndexToIns(arr, num) {
  arr = arr.filter(a => a < num)
  return arr.length;
}

getIndexToIns([40, 60], 50);