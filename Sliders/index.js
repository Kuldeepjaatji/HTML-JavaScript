const dots = document.getElementById(`dot`);
const carousel = document.getElementById(`carousel-slides`);
const prevbtn = document.getElementById(`prev`);
const nextbtn = document.getElementById(`next`);
const totalSlider = document.querySelectorAll(`slide`);

const slideL = totalSlider.length;

let slideindex = 0 ;

function slideshow(index){
    slideindex = (slideL + index)%3;
    carousel.style.transform = `translateX(-${slideindex*100}%)`;
    // carousel.style.transform = `translateX(-${index*100}%)`;
}
prevbtn.addEventListener("click",function(){
    slideshow(slideindex - 1);
  })
nextbtn.addEventListener(`click`,function(){
    slideshow(slideindex + 1);
})
function dotsbtn(){
    for(let i = 0; i < slideL ; i++ ){
        let dot = document.createElement(`span`);
        dot.classList.add(`dot`);
        if(i===0){
            dot.classList.add(`activ`);
        }
        dot.addEventListener(`click`,()=>{
            slideshow(i);
        })
        dots.appendChild(dot);
    }
}
dotsbtn();