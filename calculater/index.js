let input = document.getElementById(`inputText`);


function allclear(){
    input.value = ``;
}
 let btn =(val)=>{
    input.value += val;
}
function result(){
    inputText.value = eval(inputText.value);
}
function backspace(){
  input.value = input.value.slice(0,-1);
}
// function result(){
//     input.value = eval(input.value);
// }

// const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         input.value = eval(input); // Be cautious with eval in production!else if(result){setInput=``;}
//       } catch (error) {
//         input.value = 'Error';
//       }}else{
//         null
//       }};

/////   display.addEventListener('keydown', function (e) {
     // ----   e.preventDefault();    -----    // disables all keyboard input
  //});

  // display.addEventListener('keydown', function (e) {
  //   const key = e.key;
  
    // Check if key is a letter (a-z or A-Z)
    // if (/^[a-zA-Z]$/.test(key)) {
    //   e.preventDefault();
    //   return;
    // }
  
    // Allow only valid calculator characters or control keys
    // const allowedKeys = ['0','1','2','3','4','5','6','7','8','9',
    //   '+','-','*','/','.', '=', 
    //   'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape'];
  
    // if (!allowedKeys.includes(key)) {
    //   e.preventDefault();
    // }
  
    // Optional: shortcuts
  //   if (key === 'Enter') calculate();
  //   if (key === 'Escape') clearDisplay();
  // });