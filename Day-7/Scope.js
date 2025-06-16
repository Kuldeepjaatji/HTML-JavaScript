//Types of Scope in JavaScript
//1. Global Scope

let name = "Kuldeep";
function name1(){
    console.log(name); // Out put Kuldeep
    console.log(name); // Out put Kuldeep
    console.log(name); // Out put Kuldeep
}
name1()
console.log(name);// Out:- put Kuldeep
console.log(name);// Out:- put Kuldeep
console.log(name);// Out:- put Kuldeep
console.log(name);// Out:- put Kuldeep

// 2. local/function Scope

function display(a,b,c){
    let add;
    add = a+b+c;
    console.log(add);
}
display(50,60,"10");
display(50,"60","10");
display(0,50,"-60,70"); //output :- 50-60,70
display(0,0,"+50,60,70");//output :- 0+50,60,70
display(50,60,70);

//2. Block Scope (let & const)

function blog(a,b){
    let add = a/b ;
    console.log(add);
    console.log(typeof(add));
}
let result = blog(10,20);
console.log(typeof(blog))
console.log(typeof(0.5))
console.log(typeof(add)) // Output :- undefined

// {
//     let add = a/b ;
//     console.log(add) 
// }


//4. Function vs Block Scope

function Scope(){
    if(true){
        var functionScope = "i am function-scope";
        let blockScope = "i am block-scope";
        const block_Scope = "i am block-scope";
    }
    console.log(functionScope);
    // console.log(blockScope);  => error becuse => {(Let & const) => Block Scopr}
    // console.log(block_Scope);  => error becuse => {(Let & const) => Block Scopr}
}
Scope()


function Scope2(){
    if(false){
        var functionScope = "i am function-scope";
        let blockScope = "i am block-scope";
        const block_Scope = "i am block-scope";
    }
    console.log(functionScope); // Output :- undefined  => [ becuse => if(false)]
    // console.log(blockScope);  => error becuse => {(Let & const) => Block Scopr}
    // console.log(block_Scope);  => error becuse => {(Let & const) => Block Scopr}
}
Scope2()
