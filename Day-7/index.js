//1. simple function decleretion

function display(){
    console.log("Hello,Jaat Ji")
};
display();

//point


function Pap(Name){
    return `Hello, ${Name}  Jaat Ji`;
};
let  dis= Pap("Kuldeep");//Outour=Hello, Kuldeep Jaat ji
console.log(dis)

//2. fuction with perameter

function Age(para1,para2,para3,para4,para5,para6){
    console.log(`My name is Kuldeep and My friends name are = Hemant kumawat , Yovraj Singh , Narendra , Tara singh , Ketan. And my age is : ` , para1 , ` and My friends age in sequence : ` + para2 +","+ para3 +","+  para4 +","+ para5 +`,`+ para6)
};
Age("20",20,22,22,24,23);

//3. Function with Return Value

function add(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    return (((a+b+c+d+e+f+g+h+i+j+k+l+m+n+o)*p)-5)/10 
};
console.log(add(20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35))
console.log(add(20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,","))//Output = NAN
console.log(add(`20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35`))//Output = NAN

//4. Default Parameters

function greet(name = "Kuldeep Jaat Ji") {
    console.log("Hello, " + name + ".");
}
greet();

function greet(num1 = "11" , num2 = "22") {
    console.log(num1 + num2);
}
greet();

function greet(num1 = 11 , num2 = 22) {
    console.log(num1 + num2);
}
greet();

//5. Function Expression

let Add = function(num1,num2){
    
    return num1 + num2;
};
    num1 = 10;
    num2 = 20;
let Result1 = Add();
console.log(Result1);

let Sub = function(num1,num2){
    num1 = 10;
    num2 = 20;
    return num1 - num2;
};
let Result2 = Add();
console.log(Result2);


//6. Arrow fuction(ES6)

const addd = (a,b) =>(a+b);
let Result3 = addd(40,40);
console.log(Result3);