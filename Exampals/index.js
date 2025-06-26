// 1. Check if a number is positive, negative, or zero


function checkNumber(num){
 if(num>0){
    console.log("positive");
 }else if(num<0){
    console.log("negative")
 }else{
    console.log("zero")
 }
};
checkNumber(1)
checkNumber(-1)
checkNumber(0)
// checkNumber(prompt("Enter your number"));

//    2. Find the largest of three numbers

function findLargest(a, b, c) {
    console.log(Math.max(a, b, c));
    console.log(Math.min(a, b, c));
}

findLargest(10, 0, 15);

// 3. Check if a year is a leap year

function isLeapYear(year){
    return (year%4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 }

  console.log(isLeapYear(2024))
  console.log(isLeapYear(2025))
  console.log(isLeapYear(2000))
  console.log(isLeapYear(1900))
//  console.log(isLeapYear(prompt("Enter your Year")));

// const year = parseInt(prompt("Enter your Year"));
const year = 2025;
if (isLeapYear(year)) {
    console.log(year + " is a Leap Year ✅");
} else {
    console.log(year + " is NOT a Leap Year ❌");
}




// 4. Grade Calculator


function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}
console.log(getGrade(95))
console.log(getGrade(65))
console.log(getGrade(35))
// console.log(getGrade(prompt("Enter your grade")));




//  5. Check if a number is even or odd

function checkEvenOdd(num1){
    console.log(num1 % 2 == 0 ? "Even" : "Odd")
};
checkEvenOdd(11)
// checkEvenOdd(prompt("Enter your Number"));




//    6. Print numbers from 1 to 9999


//  ==>>  for(let i = 1 ; i <= 9999 ; i++ ){console.log(i)};



// 7. Print the multiplication table of a given number

function multiplicationTable(num2) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num2} × ${i} = ${num2 * i}`);
    }
}
multiplicationTable(19);
//    multiplicationTable(prompt("Enter your Number"));



// 8. Calculate the sum of first N natural numbers




function sumNaturalNumbers(n) {
    console.log((n * (n + 1)) / 2);
}

// sumNaturalNumbers(prompt("Enter your Number"));
sumNaturalNumbers(99);




//  9. Reverse a number using a loop


// function reverseNumber(num) {
//     let rev = 0;
//     while (num > 0) {
//         rev = rev * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }
//     console.log(rev);
// }


// reverseNumber(prompt("Enter your Number"));
// reverseNumber(123456789);




//  10. Find factorial of a number


function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);
}

//  factorial(prompt("Enter your Number"));
factorial(10);



//  12. Find the maximum of three numbers


function maxOfThree(a, b, c) {
    console.log(Math.max(a, b, c))
}

maxOfThree(1,22,13);


// 13. Calculate the power of a number


function power(base, exponent) {
    return Math.pow(base, exponent);
}







//   desturecturing


const student1 = {
    name : "Kuldeep",
    age :22,
    role_n : 1,
}
const {name ,age,role_n} = student1;
console.log(name);
console.log(age);
console.log(role_n);

const {name : username , age : userage , role_n : userrole_n,} = student1;
console.log(username);
console.log(userage);
console.log(userrole_n);

// const {username,userage,userrole_n} = student1;


const person = {
    Name : "Kuldeep",
    Age :22,
}
const {Name ,Age,marks = 95,} = person;

console.log(marks)


const people = {
    fullName : "Kuldeep jat",
    mark :92,
    greet : {
        firstname: "hemant",
        lastname: "kumar",
    }, 
}
const {fullName,mark,greet : {firstname,lastname,}} =people;

console.log(fullName);
console.log(mark);
console.log(firstname);
console.log(lastname);



const display =({name,age,role_n})=>{
    console.log(`My Name is ${name} and My Age ${age}. this is my role n. : ${role_n}`);
};

display(student1);












//    array Destructuring






const number = [1,2,3,4,5,6];



const[first,second,...rest]=number;
console.log(rest)
console.log(first)
console.log(second)
// const [a,b,c,d,e,f] = number;
// console.log(f); 
// console.log(e); 
// console.log(d); 
// console.log(c); 
// console.log(b); 
// console.log(a);


// const [a,b,,d,e,f] = number;

// console.log(f); 
// console.log(e); 
// console.log(d); 
// console.log(f); 
// console.log(b); 
// console.log(a);


const [a,b,c,d,e,f,g=50] =number;

console.log(f); 
console.log(e); 
console.log(d); 
console.log(c); 
console.log(b); 
console.log(a);
console.log(g);


const kul = [10,[20,30]];

const [x,y]=kul;
// const [x,[y,z]]=kul;

console.log(x)
console.log(y)
// console.log(z)

let p = 10;
let q = 30;

[p,q]=[q,p]
console.log(p);
console.log(q);



function kuldeep(){
    return [10,20,30,40,50,60]
}


const [l,m,n,r,s,t]=kuldeep();







function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound");
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name + " barks");
};

let dog1 = new Dog("Tommy", "Labrador");
dog1.speak();
dog1.bark(); 








function student(name,marks){
    this.name=name;
    this.marks = marks;
}
student.prototype.marks = function(){
    console.log('My name is your name : ',this.name);
    console.log('My marks is your name : ',this.marks);
}

let k1 = new student('Kuldeep',99);
let k2 = new student('Hemant',98);
let k3 = new student('ketan',97);
let k4 = new student('yovraj',99);


k1.marks();
k2.marks();
k3.marks();
k4.marks();