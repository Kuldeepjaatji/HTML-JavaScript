// //------ empty object ------//

// let obj = {};

// //------ Syntax ------//

// let student = {
//     name : "Kuldeep",
//     rollNumber : 21,
//     age : 12,
//     class :"8th",
//     city : "india"
// };

// //------  Accessing Object Properties ------//

// //....... 2 ........//

// console.log(student);
// console.log(student.name);
// console.log(student.rollNumber);
// console.log(student.age);
// console.log(student.class);
// console.log(student.city);

// //....... 2 ........//

// console.log(student);
// console.log(student["name"]);
// console.log(student["rollNumber"]);
// console.log(student["age"]);
// console.log(student["class"]);
// console.log(student["city"]);


// //------ Modifying Object Properties ------//

// student.city = "new york";
// student.age = 15;
// student.name = "Hemant kumawat";
// student.rollNumber = 121;
// student.class = "11th";

// console.log(student.name);
// console.log(student.rollNumber);
// console.log(student.age);
// console.log(student.class);
// console.log(student.city);


// //------ Deleting Properties ------//

// delete student.city;
// console.log(student.city);

// //------- Object Methods ------//

// // let car = {
// //     brand : "nissan megnet",
// //     model : 2022,
// //     price : "5 lac",
// //     onRoadPrice : "6.3 lac",
// //     start : function(){
// //         console.log(`this car is : ${this.brand} and model is :${this.model},Price :${this.price}`)
// //     }
// // }
// // car.start();

// let car = {
//     brand : "nissan megnet",
//     model : 2022,
//     price : "5 lac",
//     onRoadPrice : "6.3 lac",
//     start : function(){
//         return `this car is ${this.brand} and model is ${this.model},Price ${this.price}`;
//     }
// }
// console.log(car.start());



// //------ for in Use in Object -----//


// console.log(car);
// car.start();

// for(let key in car){
//   console.log(`${key} and ${car[key]}`);
// }



