let btn = document.getElementById(`btn`);
let form = document.getElementById(`form`);

console.log(form);

btn.addEventListener(`click`,function(){
    form.classList.toggle("hide");
})



// btn.addEventListener(`click`,() => {
//     if(form.classList(`hide`) === nune){
//         form.classList.remove(`hide`);
//     }
//     else{
//         form.classList.add(`hide`);
//     }
// })