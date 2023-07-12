let President
President =  "Tinubu";
console.log(President)
President = Number(President);
console.log(typeof President)

let Age
Age = 70
console.log(Age)
console.log(typeof(Age))
console.log(President + Age)
Age = String(Age)
console.log(typeof Age)

let isGovernor = false;
console.log(isGovernor)

const b = 20
console.log(b + Age)
console.log(Age - b)
console.log(Age * b)
console.log(Age / b)

var
Test
console.log(Test)

Test = 'null'
console.log(Test)
//null = 27

Test = 27
console.log(Test)
let Exam
Exam = 53
console.log(Test+Exam)

let bigNumber = 1_000n;
console.log(Number(bigNumber) + (Exam) + b)
console.log(typeof(bigNumber))
//console.log(typeof Exam)

let number 
number = "10";
10
console.log(typeof(number))

console.log("10" + 10)
console.log(10 + "10")
console.log(10 - 10)

console.log("10" - 10)
console.log(10 - "10")
console.log(10 - 10)

console.log("10" * 10)
console.log(10 * "10")
console.log(10 * NaN)

const plus = +"10";
console.log(plus)
console.log(typeof(plus))

console.log(Number(true))
console.log(Number(false))

//Conditional Statement
let result = 99;
let ojoStudentId = 2016004;
let ojoType = "student";

if (ojoType === "student"){
    console.log(result)
}


if (ojoType === "admin"){
    console.log(result);
}

if (ojoStudentId !== 2016000){
    console.log(ojoStudentId)
}

if (ojoStudentId !== 2016004){
    console.log(ojoStudentId)
} else {
    console.log(ojoStudentId);
}

if (ojoType !== "student"){
    console.log(result);
} else {
    console.log(result);
}

if (ojoType !== "student"){
    console.log(result);
} else {
    console.log(ojoStudentId);
}

if (ojoStudentId !== 2016004) console.log(ojoStudentId);
 else console.log("ojoStudentId");

 if (ojoType !== "student" && ojoStudentId == 2016004) {
    console.log(result)
} else {
    console.log(result)
}

if (ojoType !== "student" || ojoStudentId !== 2016004){
    console.log(result)
} else{
    console.log(result)
}

//Write a code for a dice
let display = console.log
var random = (Math.floor(Math.random() * 6) + 1)

if (random === 1){
    display(1)
} else if (random === 2){
    display (2)
} else if (random === 3){
    display (3)
} else if (random === 4){
    display(4)
} else if (random === 5){
    display (5)
} else {
    display(6)
}   
    console.log(random)

    //SWITCH STATEMENT
    switch(random){
     case 1: 
        display(1)
        break;

    case 2:
        display(2)
        break;
    
    case 3:
        display(3)
        break;

    case 4:
        display(4)
        break;

    case 5:
        display(5)
        break;

    case 6:
        display(6)
        break;

    default:
        display(6)
        break;
}

        console.log(random)

//      const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

var show = console.log()
const gender = 'boy'

// if (gender !== 'boy')
// console.log(result)
// else{
//     console.log(result)
// }

// switch (gender){
//     case (boy):
//         show(boy)
//         default:
//             show(boy)
//         break;
// }
// console.log(show)

let age = 18;
if (age >= 18){
    console.log(age)
}

let isAdult = age >= 18 ? true : false
//if (isAdult) ? true : false
console.log(isAdult)

//TERNARY OPERATOR
//syntax
//condition ? true : false
age >= 18 ? console.log(eligibility) : console.log(ineligibility);

age >= 18 ? 
    console.log(eligibility) : 
    console.log(ineligibility)

var random = (Math.floor(Math.random() * 6) + 1)
random === 1 ? display(1) : random === 2 ? display(2) : ramdom === 3 ? display (3) : random === 4 ? display(4) : random === 5 ? display(5) : display(6);
console.log(random)
   
    
let base = 2;
let exponent = 3;
let result = 1;

for(let i = 0; i < exponent; i++){
    result *= base
}
result

console.log("a" < "b")
console.log("a".charCodeAt(0))

let start = 1;
let end = 12;
let stop = 20;

for (let i = start; i<= stop; i++ ){
    console.log(`\n${i} times table\n`)
    for (let j = start; j <= end; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

 