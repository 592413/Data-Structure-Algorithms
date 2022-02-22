const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

/* Calculate Big O for the above code

Code consists of nested for loops. Hence for outer loop Big O(n)
and for inner loop Big O(n). To combine both it will become Big O(n^2)

*/