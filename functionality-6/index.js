let button = document.getElementById(`button`);
let ansWer = document.getElementById(`answer`);

// console.log(button)
// console.log(ansWer)

button.addEventListener(`click`,() => {
    // ansWer.classList.toggle(`answer`);
    let name = prompt(`Enter Your age`);
    if(name = `1`){
        ansWer.classList.add(`answer`);
        body.style.backgroundColor = `skyblue` ;
        button.innerText = name;
    }
    else{
        ansWer.classList.add(`visit`);
        body.style.backgroundColor = `blue` ;
    }
})