function userName1(){
    console.log(`Kuldeep Jaat Ji`);
}

function Greet(callBack1,callBack2){
   // userName1();
    console.log(`My and My friend  :`);
    callBack1();
    callBack2();
   // userName1();
}
   ///   1.   Callback ek tarika .
    Greet(userName1,function userName2(){
        console.log(`Hemant Kumawat Ji`);
    })
   /// 2.    callback ka dusra tarika
// function userName2(){
//     console.log(`Hemant Kumawat Ji`);
// }

// Greet(userName1,userName2);





function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

let name1 = "Kuldeep";

greet(name1, function() {
  console.log("Welcome to Your new Home!");
});


function dataset(callback1){

  setTimeout(()=>{
    console.log("data process");
    callback1();
  },3000);

}

dataset(callback);

function callback(){
  console.log("Processing the fetched data...");
}


// function getUser(callback) {
//     setTimeout(() => {
//       console.log("User fetched");
//       callback();
//     }, 1000);
//   }
  
//   function getPosts(callback) {
//     setTimeout(() => {
//       console.log("User's posts fetched");
//       callback();
//     }, 1000);
//   }
  
//   function getComments() {
//     setTimeout(() => {
//       console.log("Comments on posts fetched");
//     }, 1000);
//   }
  
//   getUser(
//    ()=>{
//     getPosts(getComments);
//    }
//   )