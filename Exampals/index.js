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