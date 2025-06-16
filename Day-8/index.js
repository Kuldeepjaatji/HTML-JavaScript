// let arr1 = [1 + 2 * 3 + 4 / 5-(4) ,"kuldeep","pradeep","sandeep"];
// let arr2 = new Array(10);
// let arr3 = Array.of(1,2,3,4);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr3[0]);
// console.log(arr3[1]);
// console.log(arr3[2]);
// console.log(arr3[3]);



//  let name1s = ["Kuldeep Jaat","Yovraj Jaat","hemant kumawat","narendra","ketan"];
//  console.log(name1s);

//  let names1 = new Array(2);
//  console.log(names1);

//  console.log(name1s[0]);

//  let names2 = []; /// empty array
//  console.log(names2);

//  let names3 = Array.of("mohan","sohan","rinku");
//  console.log(names3);
//  name1s[names3.length-1] = "Riya";


//  console.log(Array.of("mohan","sohan"))


//  console.log(name1s[0]) // starting element
//  console.log(name1s[1]) // starting element
//  console.log(name1s[2]) // starting element
//  console.log(name1s[3]) // starting element
//  console.log(name1s[4]) // starting element
//  console.log(name1s.length); // len of array 

//  console.log(name1s[4]); // badddddd
//  console.log(name1s[name1s.length-1]); //gooooddddd

// // kisi bhi element ko change karna hai .

//  name1s[0] = "sristi";
//  name1s[1] = "teena";
//  name1s[2] = "meena";
//  name1s[3] = "Sita";
//  name1s[4] = "geeta";

//  //last ke element ko change krna ho 

//  name1s[name1s.length-1] = "Riya";

//  console.log(name1s)
//  console.log(name1s[0]); // starting vs 1st element
//  console.log(name1s[1]); // 2nd element
//  console.log(name1s[2]); // 3rd element
//  console.log(name1s[3]); // 4th element
//  console.log(name1s.length); // len of array 

//  name1s[0] = true;
//  console.log(name1s);

//  name1s[0] = false;
//  console.log(name1s);

//  names2[0] = "Rinku";
//  console.log(names2);

//  names1[2] = "suresh";
//  console.log(names1);

// // end se eliment hatana ho ya ne leanth chack krni ho to "push" use krna:

// let names = ["mohan","sohan","rohan","ram","Shayam"];
// names.push("Naresh");
// console.log(names);
// console.log(names.length)                               // Return/Output :- Old lenth    
// console.log(names.push());                              // Return/Output :- Old lenth
// console.log(names.push("suresh","Ramesh","Naresh"));    // Return/Output :- New lenth
// console.log(names.push());                              // Return/Output :- New lenth  
// console.log(names)                              
// console.log(names.pop())
// console.log(names);

// // end se kisi bhi element ko delet krna ho to "pop" ka use krta hu

// let homelist = [];
// console.log(homelist.pop());
// console.log(homelist);

// // end se eliment hatana ho ya ne leanth chack krni ho to "unshift" use krna:

// names.unshift("komal");
// console.log(names);
// console.log(names.unshift());

// // end se kisi bhi element ko delet krna ho to "shift" ka use krta hu

// names.shift();
// console.log(names);




// let arr = [123, 234, 111, 71, 79, 2, 3, 7, 5, 11, 13, 98, 24];

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// let primeNumbers = arr.filter(isPrime);

// console.log(primeNumbers);



// let names = ["mohan","sohan","rohan","ram","Shayam"];
// console.log(names);

// let names1 = new Array(2);
// console.log(names1);

// // console.log(names[0]);

// let names2 = []; /// empty array
// console.log(names2);

// let names3 = Array.of("mohan","sohan","rinku");
// console.log(names3);

// console.log(Array.of("mohan","sohan"))


// console.log(names[0]) // starting element
// console.log(names.length); // lenght of array 

// console.log(names[4]); // badddddd
// console.log(names[names.length-1]); //gooooddddd

// names[3] = "Sita";
// names[names.length-1] = "Riya";
// console.log(names)

// names[0] = true;
// console.log(names);

// names2[0] = "Rinku";
// console.log(names2);

// names1[2] = "suresh";
// console.log(names1);


// let names = ["mohan","sohan","rohan","ram","Shayam"];
// names.push("Naresh");
// console.log(names);
// console.log(names.length)
// console.log(names.push("suresh","Ramesh","Naresh"));
// console.log(names)
// console.log(names.pop())
// console.log(names);

// let homelist = [];
// console.log(homelist.pop());
// console.log(homelist);

// names.unshift("komal");
// console.log(names);
// console.log(names.unshift());

// names.shift();
// console.log(names);

// let numbers1 = [1,2,3,4,5,6];
// console.log(numbers)

// let first = [...numbers];

// console.log(first)


// let [kuldeep,second,...rest] = numbers;
// console.log(kuldeep) // output : 1
// console.log(second) // output : 2
// console.log(rest) // output : 3,4,5,6

// let [first,second,third,...rest] = numbers;
// console.log(rest);
// console.log(rest.push(" "));
// console.log(rest)


// let numbers1 = [1,2,3,4,5,6];
// let numbers2 = [2,3,4,5,6,8,...numbers1,...numbers1];
// console.log(numbers1)
// console.log(numbers2)





//-----------------------------------------------------------------------------------//

//--------  used the forEach method -----------------------------------------------------//








// for(let i = (numbers2.length-1) ;  i >= 0 ; i--){
//   if(i === (numbers2.length-4)){
//     break;
//   }
//   console.log(numbers2[i]);
// }

// let colors = ["red", "blue", "green", "yellow", "purple"];

// let newColors = colors.slice(2,4); /// output : ["green","yellow"]
// console.log(newColors)

// let copyColors = colors.slice(3,4);
// console.log(copyColors)

//  let colors = ["red", "blue", "green", "yellow", "purple"];

//  colors.forEach(
//   (value,index,array) => {
//     console.log(value,index,array)
//   }
//  )


// let marks = [23,65,76,89,98];

// let total = 0 ;

// marks.forEach((ele)=>{
//   total += ele;
// });

// console.log(total);


// let salary = [20000,15000,5000,30000];
// let incSlaray = [];

// salary.forEach((value,index,array) => {

//   let ins = value + 5000;
//   incSlaray.push(ins);

// })
// console.log(salary)
// console.log(incSlaray)


// let colors = ["red", "blue", "green", "yellow", "purple"];

// colors.forEach(function(value,index,array){
//   if(value === "yellow"){
//     console.log(`Color Name in list : ${value} = Yellow`);
//   }
//   else{
//     console.log(`Color Name in list : ${value}`)
//   }
// })


// let oddEven = [10,20,30,12,34,33,35,78];
// let odd = [];
// let even = [];
// oddEven.forEach(function(value){
//   if(value % 2 === 0){
//     even.push(value);
//   }
//   else{
//     odd.push(value);
//   }
// })


// let oddEven = [10,20,30,12,34,33,35,78];
// let odd = [];
// let even = [];
// oddEven.forEach((value)=>{
//   if(value % 2 === 0){
//     even.push(value);
//   }
//   else{
//     odd.push(value);
//   }
// })
// console.log("Common Array ",oddEven);
// console.log("Odd : ",odd);
// console.log("Even : ",even);


// Prime number



// let arr1 = [123,234,111,71,79,2,3,7,5,11,13,98,24,1,0,20,23,29,19];
// let compositeNumber = [];
// let primeNumber = []; 
// function isPrime(value,index,array){
//     if(value < 2){
//         return false;
//      }
//      for(let i=2; i<=value ; i++){
//         if(value % i === 0){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }
// arr1.forEach((value) => {
//     if(isPrime(value)){
//         primeNumber.push(value);
//     }else{
//         compositeNumber.push(value);
//     }
// })


// console.log(arr1)
// console.log(primeNumber);
// console.log(compositeNumber);





//-----------------------------------------------------------------------------------//

//--------  used the MAP method -----------------------------------------------------//







// let numbers = [123,234,111,71,79,2,3,7,5,11,13,98,24,1,0,20,23,29,19];
// let oddNumbers1 = numbers.map((value) => {
//     if(value % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(oddNumbers1);
// let oddNumbers2 = numbers.map((value) => {
//     if(value % 2 === 0){
//         return value;
//     }
// })
// console.log(oddNumbers2);







// let colors1 = ["red", "blue", "green", "yellow", "purple"];
// let upper1 = colors1.map(value => value.toUpperCase())
// console.log(upper1);



// let colors2 = ["red", "blue", "green", "yellow", "purple"];
// let upper2 = colors2.map((value) => {
//     return value.toUpperCase()
// })
// console.log(upper2);




// let colors1 = ["red", "blue", "green", "yellow", "purple"];
// let lower1 = colors1.map(value => value.toLowerCase())
// console.log(lower1);



// let colors2 = ["red", "blue", "green", "yellow", "purple"];
// let lower2 = colors2.map((value) => {
//     return value.toLowerCase()
// })
// console.log(lower2);



//////////////////________________________doubt__________________________________///////////////


// let colors1 = ["red", "blue", "green", "yellow", "purple"];
// let lower1 = colors1.map(value => value.capitalizeArray(colors1))
// console.log(lower1);



// let colors2 = ["red", "blue", "green", "yellow", "purple"];
// let lower2 = colors2.map((value) => {
//     return value.capitalizeArray(value);
// })
// console.log(lower2);


//------------------------- solve   = not capitalize in --------------------------//





//-----------------------------------------------------------------------------------//

//--------  used the Fillter method -----------------------------------------------------//



//------number-----//


// let num = [10,198,22,239,93,73,58,653,56];
// let even = num.filter(value =>value % 2 === 0);
// console.log(even);




// let num = [10,198,22,239,93,73,58,653,56];
// let even = num.filter((value) =>{
//     return value % 2 === 0;
// });
// console.log(even);




//-----sting-----//



// let colors2 = ["red", "blue", "green", "yellow", "purple"];
// let logword = colors2.filter(word => word.length > 5);
// console.log(logword);




// let colors2 = ["red", "blue", "green", "yellow", "purple"];
// let logword = colors2.filter(word => word.length < 5);
// console.log(logword);



// let colors2 = ["red", "blue", "green", "yellow", "purple"];
// let logword = colors2.filter((word) => {
//    return word.length >= 5;
// });
// console.log(logword);



//------ falsy ------//



// const mixedArray = [0, "hello", false, 42, "", null, "JavaScript",true,1];
// const truthyValues = mixedArray.filter(Boolean);
// console.log(truthyValues);






//------------------Reduce Use for only +,_,%,*(mathmetics result only)-------------------------------//








// let numbers = [200,-400,100,49,-300,58];

// let result = numbers.reduce(
//   (acc,CurrentValue)=>{
//     return acc + CurrentValue;
//   },100
// )

// console.log(result);


// let arr = [33,3,4,55];

//   let startingValue = arr[0]; /// output : 33

//   for(let i = 1 ; i < arr.length ; i++){
//         // 33           // 55
//     if(startingValue < arr[i]){

//       startingValue = arr[i]

//     }
//   }

// console.log(startingValue);


// let arr = [33,3,4,55];

// let max = arr.reduce((acc,currentValue)=>{

//   if(acc < currentValue){

//    acc = currentValue;

// }

// },arr[0]);

// console.log(max);





// let arr = [33,3,4,55];

// let max = arr.reduce((acc,currentValue)=>{

//   return acc * currentValue

// },arr[0]);

// console.log(max);






// let arr = [33,3,4,55];

// let max = arr.reduce((acc,currentValue)=>{

//   return acc / currentValue

// },arr[0]);

// console.log(max);