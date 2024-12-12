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
    if (arg2 === arg1) {
        console.log(`the difference between ${arg2} and ${arg1} is 0`);
        
    }
    if (isNaN(arg1) || isNaN(arg2)) {
        return "Enter valid numbers, not strings or other types.";
    }
}


calculateDifference(8, 8)

//problem 2: Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    let oddChecker ;
    if (num%2 === 0) {
        oddChecker = false
        console.log(oddChecker +" the number "+ num+ " is actually even");
    }else {
        oddChecker = true;
        console.log("Its "+ oddChecker +" that the "+ num+" is odd")
    }
}

isOdd(4)


//problem 3 : Write a function named findMin that take an array of numbers and returns the smalles number from the array.

function findMin(arrayOfNum) {
    let minNum = arrayOfNum[0] ;
    arrayOfNum.forEach(element => {
        if (element < minNum) {
            minNum = element
        }
    });
    return console.log(`the smallest number in ${arrayOfNum} array is ${minNum}`);
}

findMin([34, 5543, 2323, 55, 1])

//problem 4: write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(arrayofNumbers) {
    let arrayOfEvenNumbers = [];
    arrayofNumbers.filter(numbers =>{
        if (numbers%2 === 0) {
            arrayOfEvenNumbers.push(numbers)
        }
    })
    return console.log(`the array of even numbers is ${arrayOfEvenNumbers}`);
    
}
filterEvenNumbers([34, 5543, 2323, 55, 1, 22, 21, 4, 3, 44, 2, 4, 3])

//problem 5: write a function named sortArrayDescendig that takes an array of numbers and returns a new array sorted in descending order
function sortArrayDescending(array) {
   let sortedarray = array.sort((a,b)=>
        b-a
    )
    console.log(sortedarray);
    
    
}
sortArrayDescending([2, 4, 3, 1, 5])



// problem 6: Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(string) {
    string = string.toUpperCase();
    let slicedString = string.slice(1)
    let firstChar = string.charAt(0)
    firstChar = firstChar.toLowerCase()
    let finalOutput = firstChar.concat(slicedString)
    console.log(`before converting the first character to lowercase : ${string}`);
    console.log(`after converting the first character to lowercase : ${finalOutput}`);
    
    
}

lowercaseFirstLetter("SHAHRIN");

//problem 7: Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(array) {
    let sum = 0;
    array.forEach(element=>{
        sum += element
    })
    let average = sum/array.length
    return average
    

}
console.log("the average is "+findAverage([42, 24, 24,24]));

// problem 8: 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
function isLeapYear(year) {
    Number.parseInt(year)
    if (year%400 === 0 || year%4 === 0 && (year%100 !== 0)) {
        console.log(`the year ${year} is a leap year`);
                
    } else{
        console.log(`the year ${year} is not a leap year`);

    }
    if (isNaN(year)) {
        return "Enter valid numbers, not strings or other types.";

    }
}

isLeapYear(2001)

