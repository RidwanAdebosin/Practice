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

if (ojoStudentId !== 2016000){
    console.log(ojoStudentId)
} else {
    console.log("You are not allowed to see the ojoStudentId");
}

if (ojoType !== "student"){
    console.log(result);
} else {
    console.log(result);
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
let random = (Math.floor(Math.random() * 6) + 1)

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