// Q-1

var multidimensional = [[], [], [], [], [],]
console.log (multidimensional);


// Q-2

var matrix = [
    ["0", "1", "2"  ],
    [ "3", "1", "0" ],
    ["1", "3", "1" ],
    ["0", "1", "0" ],
]

console.log (matrix);



// Q-3

for (var i = 1; i <= 10; i++){
    console.log (i)
}



// Q-4

var table = +prompt ("Enter any number");
var range = +prompt ("Enter range");

for (var i = 1; i <= range; i++ ) {
    document.write (`${input} * ${i} = ${input * i } <br> `);
}



// Q-5

var fruit = [ "Apple", "Mango", "Banana", "Grapes", "Orange" ]

for ( var i = 0; i <= 4; i++ ) {
    document.write ( `element at index ${i} is ${fruit[i]} <br> ` ) 
} 


// Q-6

document.write ("<h2> Counting: </h2> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ");
document.write ("<h2> Reverse Counting: </h2> 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ");
document.write ("<h2> Even: </h2> 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ");
document.write ("<h2> Odd: </h2> 1, 3, 5, 7, 9, 11, 13, 15,17,19 ");
document.write ("<h2> Series: </h2> 2k, 4k, 6k, 8k, 10, 12k, 14, 16k, 18k, 20k ");



// Q-7

// var bakery = prompt (" Welcome to ABC bakery.. what do you want sir/ma'am ")

// var abc =  A = [ "cake", "apple pie", "cookie", "chips", "patties" ]

// let arr = [12,14,45,89,15];

// let max = Math.max(...arr);
// let min = Math.min(...arr);

// console.log(`max: ${max}, min:${min}`);


// Q-8

let Abc = [24,53,78,91,12];

let math = Math.max(...Abc);

console.log(`Array Items:[24,53,78,91,12]`)
console.log(`the largest number is = ${math}`)



// Q-9

let minimum = [24,53,78,91,12];

let min  = Math.min(...minimum);

console.log(`Array Items:[24,53,78,91,12]`)

console.log(`the smallest number is = ${min}`);



// question number 10....

for(let i = 5; i<=100;i+= 5){
    console.log(i);
 }
 