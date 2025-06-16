let btn1 = document.getElementById("btn1");
let bod = document.getElementById("body");
let txt = document.getElementById("text");
console.log(btn1);
console.log(bod);
console.log(txt);

btn1.addEventListener(`click`,function(){
    if(bod.classList.contains(`bodycolor`)){
        // document.body.classList.remove(`bodycolor`);
        bod.classList.remove(`bodycolor`);
        btn1.classList.remove(`btn1chang`);
        txt.classList.remove(`textchang`);
        this.innerText = "🖤";
    }
    else{
        // document.body.classList.add(`bodycolor`);
        bod.classList.add(`bodycolor`);
        btn1.classList.add(`btn1chang`);
        this.innerText = "💛";
        txt.classList.add(`textchang`);
    }
}
)