function compressBoxesTwice(boxes1,boxes2){
    boxes1.forEach(element => {
        //Any operation
    });

    boxes2.forEach(element => {
        //Any operation
    });

}

/*

Lets calculate Big O for the above function 

So we may assume as its consists of two loops it will be Big O (n+n)~ Big O(2n)

If we apply Drop the Constants then it becomes Big O(n).

But it is a wrong answer.

As we are not sure the sizes of both of boxes1 and boxes2. Hence it should Big O(m+n)


*/