//1️⃣ if Statement (यदि):-
let age = 18;
if(age>=18){
    console.log("You are eligible to vote.")
}

//2️⃣ if...else Statement (यदि...अन्यथा):-

console.log(typeof(12))
let age1 = 17;
if(age1>=18){
    console.log("You are eligible to vote.")
}
else{
    console.log("You are not eligible to vote.")
}

let age2 = 17;
let result;

if(age2 > 18){
    result = "You are eligible to vote."
}
else if(age2 < 18){
    result = "You are not eligible to vote."
}
else if(age2 == 18){
    result = "You are eligible to vote this year"
}
else {
    result = "You are invalid data for vote."
}

console.log(result);

//3️⃣ if...else if...else Statement (यदि...अन्यथा यदि...अन्यथा):-

let marks1 = 98;
let result1;

if(marks1 > 90 && marks1< 100){
    result1 = "Excellent"
}
else if(marks1 > 80 && marks1 > 90){
    result1 = "Good Job"
}
else if(marks1 > 40 && marks1 < 70){
    result1 = "Keep Study"
}
else {
    result1 = " Fail"
}

console.log(result1);


// 4️⃣ switch Statement (स्विच स्टेटमेंट):-

let day = "";
switch(day){
    case "monday":
        console.log("Starting of the week .")
        break;
    case "friday":
        console.log("weekend is near.")
        break;
    case "sonday":
        console.log("Ending of the week .")
        break;
    default:
        console.log("Just another day")
}

//6️⃣ Check Password Strength:-

let age4 = 16;
let result4 = (age > 18)?"valide for vote" : "invelid for vote";
console.log(result4)

let isRunning = true;
let result3 =(isRunning)?"Take an umbrella" : "Enjoy the sunshine";
console.log(result3)