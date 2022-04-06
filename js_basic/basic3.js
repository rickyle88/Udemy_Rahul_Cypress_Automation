// array
let m = Array(6);

let m1 = new Array(20,40,35,12,37,100);

let marks = [20,40,35,12,37,100]

console.log(marks[2]); //35

// index = 0
// update value in array
marks[3] = 14;

console.log(marks);

// array length
console.log(marks.length);

// add element to array at the end
marks.push(65);

console.log(marks);

// delete element at the end
marks.pop();

console.log(marks);

// add element to array at the beginning
marks.unshift(12);

console.log(marks);

// remove element at the beginning
marks.shift();

console.log(marks);

// get index 
console.log("Index of 100: ",marks.indexOf(100));

// check if 120 in in the array or not
console.log("Check if 120 is in the array: ",marks.includes(120));

// create sub array 
let arr1 = marks.slice(0,3);

console.log("Original array");
console.log(marks);
console.log("Sub array");
console.log(arr1);

// loop on array
// sum on all the elements in array
let sum = 0;
for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
    sum += marks[i];
}

console.log("Sum all the numbers: " + sum);