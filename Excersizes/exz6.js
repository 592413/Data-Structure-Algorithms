function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

boooo(5);

/* Find out Space Complexity of Above Function

Space Complexity depends on following things

1. Variables --Heap Memory
2. Data Structures
3. Function Call-- Stack Memory
4. Allocations

For the above function we have only one variable created let i=0;

Hence the Space Complexity is O(1).
*/

function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);

/* Find out the space complexity of above function
Here for each element in the loop we are inputting 
one 'hi' in the array.

Hence if we have n elements then n number of times 'hi'
will be created. 

So the Space Complexity of the above function is O(n).

*/
