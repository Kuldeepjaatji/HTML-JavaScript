//=("\n") = line break
let fullName = "Kuldeep Jaat Ji";
let fullName1 = "hemant Kumawat";
console.log(fullName,"\n",fullName1);
console.log(fullName);
console.log(fullName1);


//.length

let greeting = `                 My Name is ${fullName} And Best Friend Name is ${fullName1}                     `;
console.log(greeting);

console.log(fullName.length);
console.log(fullName1.length);
console.log(greeting.length);

//one word show & charat Use

console.log(fullName[fullName.length-1]);
console.log(fullName.charAt(0));
console.log(fullName.charAt(0));
console.log(fullName1.charAt(0));
console.log(fullName1.charAt(3));
console.log(fullName1[fullName1.length-1]);

//use of prompt

let input ="               Kuldeep Jaat Ji                  ";


//Use Uppercase & Lowercase

console.log(input);
console.log(input.toUpperCase());
console.log(input.toLocaleLowerCase());


//trime and show in display $ '[trime = (start + end) space clean]'

console.log(input.trim());
console.log(greeting.trim())

//trine use in veriable declaration and store the data & value

let trimput=input.trim();
console.log(trimput.length);
console.log(trimput)

//kitne number pr word rkha hai vo dekhne ke liye '&' numbering chack krne ke liye '&' use of indexOf

let text1 = "Hello JavaScript! Hello Hello JavaScript! Hello Hello JavaScript! Hello Hello JavaScript! Hello";
console.log(text1.indexOf("Hello",0));
console.log(text1.indexOf("Hello",1));
console.log(text1.indexOf("Hello",19));

//slice = (starting number of the word,ending number of the word)

console.log(text1.slice(6,10));
console.log(text1.slice(0,10));
console.log(text1.slice(0,40));
console.log(text1.slice(10,40));
console.log(text1.slice(20,40));
console.log(text1.slice(30,40));


//replace the letter & text me se kisi bhi leter ki jagah pr kuchh bhi rakh sakte hai

let text2="i love javascript and javascript is very normal/Easy/simple.";
console.log(text2.replaceAll("javascript","python"));
console.log(text2.replaceAll("love","hate"));
console.log(text2.replaceAll("normal/Easy/simple.","heart!"))

//use the split   &    kuchh bhi word ho oose ki jagah pr comma and higlite ho jaata hai

let text3 = "apple,banana,orange";
console.log(text3.split(","));
console.log(text3.split("a"));

// true & false

let email = "ks7799952@gmail.Com";
console.log(email.includes("@gmail.Com"));//chack true & false
console.log(email.includes("@.Com"));//chack true & false

let text4 = "Hello, m bhi to hu na yaar mere ko bhi to dekho na ji World!";
console.log(text4.startsWith("Hello") && text4.endsWith("World!")); // Output: true      [start and end both true so answer true any one false so both false/answer flash]

//like that

console.log(text4.startsWith("Hello") && text4.endsWith("World")); //Output:false





 