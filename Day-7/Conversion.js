// 🤖 2. Implicit Type Conversion (Type Coercion)

console.log("10" + 20) // Output => 1020
console.log("100" - 80) // Output => 20
console.log("100" == 80) // Output => false
console.log(100 + "80") // Output =>10080
console.log(100 - "80") // Output =>20
console.log("100" - "80") // Output =>20

// ✅ String + Number → String 
// ✅ String - Number → Number
// ✅ Boolean to Number (true → 1, false → 0)
// ✅ Null to Number (null → 0)
// ✅ Undefined to NaN    



// 🛠️ 3. Explicit Type Conversion
// 📝 a) String Conversion

let number = 1234;
let result = String(number);
console.log(result);
console.log(String(number));
let reSult = Boolean(number);
console.log(reSult);


// 🔢 b) Number Conversion

let num = "12.21";
let Result = Number(num);
console.log(Result);
let int = parseInt("12.21");
console.log(int);
let flotr = parseFloat("12.21");
console.log(flotr);

// 🔘 c) Boolean Conversion

let num1 = "Hello";
let Boolean1 = Boolean(num1);
console.log(Boolean3);
let num2 = "123456";
let Boolean2 = Boolean(num2);
let num3 = "12345.34";
let Boolean3 = Boolean(num3);
console.log(Boolean3);