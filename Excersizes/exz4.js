function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
      console.log(number);
    });// Big O(n)
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }// Big O(n^2)
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])

  /*
  
  Lets calculate Big O for the above function

  // So it is Big O(n+n^2)

  But we will drop n here as if we scale the inputs n^2 will become significanty 
  large. So we can neglect n in this case.

  So we would always drop the indominants while calculating Big O.


  
  */