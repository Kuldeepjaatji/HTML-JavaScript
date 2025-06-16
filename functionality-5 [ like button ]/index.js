let icon = document.getElementById(`icon`);
let text = document.getElementById(`text`);

 icon.addEventListener(`click`,function(){
    if(this.innerText === `🧡`){
        this.innerText = `🤍`
        icon.classList.add(`text`);
        text.innerText = ``;
    }
    else{
        this.innerText = `🧡`;
        icon.classList.remove(`text`);
        text.innerText = `like`;
    }
 })