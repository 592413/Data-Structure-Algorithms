const nemo=['nemo'];

const everyone= ['dory','bruce','marlin','nemo','gill',
'bloat','nigel','squirt','darla','hank'];

const large= new Array(100000).fill('nemo');


//As the Elements increased number of operations increased, which represents O(n)
// Straight lines
function findNemo(array){

    for(let i=0;i<array.length; i++){
        if(array[i]==='nemo'){
            console.log('Found NEMO');
        }
    }

}

findNemo(large);

// Demonstrating O(1) Constant Time

const boxes=[1,2,3,4,5];

function logFirstTwoItems(array){
    console.log(array[0]);//O(1)
    console.log(array[1]);//O(2)
}

logFirstTwoItems(boxes);

