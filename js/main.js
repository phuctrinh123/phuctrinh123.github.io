let window_Width = window.innerWidth;
let window_Height = window.innerHeight;

document.body.style.width = window_Width + "px";
document.body.style.height = window_Height + "px";

document.body.style.fontSize = Math.round(window_Width*18/375);

let logo = document.getElementById('logo-scene');
let intro = document.getElementById('intro-scene');
let direction = document.getElementById('direction-scene');
let menu = document.getElementById('menu-scene');
let cup = document.getElementById('cup');
let question = document.getElementById('question');
let slogan = document.getElementById('slogan');
let letMeOrderButton = document.getElementById('letMeOrderButton');
let carousel = document.getElementById('carousel');
let carouselItemsList = document.getElementsByClassName("carousel-item");

document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(()=>{
        logo.classList.add("show");
        setTimeout(()=>{
            logo.classList.remove("show");
            setTimeout(()=>{
                cup.classList.add("show");
                setTimeout(()=>{
                    question.classList.add("show");
                    setTimeout(()=>{
                        slogan.classList.add("show");
                        setTimeout(()=>{
                            intro.classList.add("hide");
                            direction.style.display = "flex";
                            setTimeout(()=>{
                                logo.style.display = "none";
                                intro.style.display = "none";
                                direction.classList.add("show");
                            },500);
                        },2000);
                    },200);
                },200);
            },500);
        },1500);
    },200);
});

letMeOrderButton.addEventListener("click",()=>{
    direction.classList.remove("show");
    setTimeout(()=>{
        menu.classList.add("show");
    },500);
});

/*carousel init */
carousel.style.width = window_Width*carouselItemsList.length + "px";
for(let i = 0 ; i < carouselItemsList.length;i++){
    carouselItemsList[i].style.width = window_Width +"px";
}