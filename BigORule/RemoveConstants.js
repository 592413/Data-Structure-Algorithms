//Lets calculate BigO for below function

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //1

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);//n/2
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');//100
    }
}

/*
So in this case BigO becames Big O(1+n/2+100) Which is Big O(n/2+101);

Now if n becomes millions then adding another 101 count would not make that much 
difference.

So essestialy it becomes Big O(n/2). But again if n is quite large then n/2 will also
becomes a large number hence we can say it will be Big O(n).


*/