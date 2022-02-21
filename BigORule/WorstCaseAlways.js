const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

/*
For the above function it Big O(1).

Even though in this scenario we have one element in nemo, to calculate BigO
we have to consider worst case situations. Lets say array has 10 items and our desired
item is the last element of the Array.Like the below one
const nemo = ['dory','bruce','marlin','gill',
'bloat','nigel','squirt','darla','hank','nemo'];

Here also its Big O(n)

*/
findNemo1(nemo);