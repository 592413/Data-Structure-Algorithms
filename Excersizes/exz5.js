function nFacRuntimeFunc(n) {
    for(let i=0; i<n; i++) {
      nFacRuntimeFunc(n-1);
    }
  }

  /* Calculate Big O for the above function
  
  We are calling a loop operation for every element
  inside a loop with single decrememnt

  So it is 5*4*3*2*1 for initial input of 5

  Big O(n!)
  
  
  */