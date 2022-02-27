const strings= ['a', 'b', 'c', 'd'];
console.log(strings)
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');
console.log("push : "+strings)

//We are not iterating over array rather just push an element at the 
//end of the array. So its O(1).

//pop
strings.pop();
console.log("pop : "+strings)
strings.pop();
console.log("pop : "+strings)
/* For Pop we are eliminating an element from the end of the array.
So Here also it is O(1) */

//unshift
strings.unshift('x')
console.log("unshift : "+strings)

/* While we unshift we are adding an element at the start of the array
Hence we have to shift each and every element to the right which makes it a iteration 
over the array. So it's time complexity is O(n) */

//splice
/* When we do splice operation on an array we are inserting an element
at certain position of the array and also deleting if requires. So we have to rearrange
the array after the specific index. Hence the worst case time complexity
is O(n) */
strings.splice(2, 1, 'alien');

console.log("splice : "+strings)