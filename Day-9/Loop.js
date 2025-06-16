//  // 1. for Loop






//  for(let i = 0 ; i < 5; i++){
//      for( let j = 0 ; j < 5 ; j++){
//          document.write("*")
//      }
//      document.writeln("<br>")
//     }

//  for(let i = 0 ; i < 5; i++){
//      for( let j = 0 ; j < i ; j++){
//          document.write("*")
//      }
//      document.writeln("<br>")
//     }
//  document.writeln("<br>")
//  for(let i = 0 ; i < 5; i++){
//      for( let j = 0 ; j < 5-i ; j++){
//          document.write("*")
//      }
//      document.writeln("<br>")
//     }
//  for(let i = 0 ; i < 5; i++){
//      for( let j = 0 ; j < i ; j++){
//          document.write("*")
//      }
//      document.writeln("<br>")
//     }
//  for(let i = 0 ; i < 5; i++){
//      for( let j = 0 ; j < 5 ; j++){
//          if(i === 1 || i === 5 || j === 1 || j === 5){
//              document.write("*")
//          }
//          else{
//              document.write("*")
//          }
//      }
//      document.writeln("<br>")
//     }
 





//     1.   🔹 1. The for Loop (Basic Loop)   :-

let num = 0;
for(let i=1 ; i <= 50; i++){
    num += i ; 
}
console.log(num)



//    2.   🔹 2. The while Loop (Condition-Based Loop) :-

// let i = 0;
// while(i  <= 5){
//     console.log(i); // output unlimited
// }


let i = 0;
while (i<15){
    let name = `Kuldeep`;
    console.log(name);
    i++;
}


//    🔹 3.  The do...while Loop (Runs At Least Once)

let j = 1;
do{
    let name = `Kuldeep`;
    console.log(name);
    j++;
}while(j < 6)



