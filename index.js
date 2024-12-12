// Problem no 1: Write a function named calculateDifference 
//that takes two arguments and returns the difference between 
//the first and second arguments.

function calculateDifference(arg1, arg2) {
    let sum;
    Number.parseInt(arg1);
    Number.parseInt(arg2);

    if (arg1>arg2) {
        sum = arg1 - arg2
        console.log(`the difference between ${arg1} and ${arg2} is ${sum}`);
    }
    if (arg2>arg1){
        sum = arg2 - arg1
        console.log(`the difference between ${arg2} and ${arg1} is ${sum}`);
    }
}
calculateDifference(4, 5)