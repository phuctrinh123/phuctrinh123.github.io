let window_Width = window.innerWidth;
let window_Height = window.innerHeight;

document.body.style.width = window_Width + "px";
document.body.style.height = window_Height + "px";

document.body.style.fontSize = Math.round(window_Width*18/375) +"px";

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
let prevButton = document.getElementById('left-nav');
let nextButton = document.getElementById('right-nav');
let backToDirectionButton = document.getElementById('backToDirectionButton');
let productImage = document.getElementsByClassName('product-image');
let selectProductButtons = document.getElementsByClassName('selectProduct');
let selectedItemList = document.getElementById('selectedItemList');
let openCartButton = document.getElementById('openCartButton');
let closeCartButton = document.getElementById('closeCartButton');
let cart = document.getElementById('cart');


addToCart=(productName, productPrice)=>{
    let template = ` 
        <div class="selectedItem">
            <div class="left">
                <p>${productName}</p>
                <p>${productPrice}</p>
            </div>
            <div class="right">
                <div class="checkbox"></div>
            </div>
        </div>`;
    let list = selectedItemList.innerHTML;
    selectedItemList.innerHTML = list + template;
}


selectedItemList.style.height = Math.round((window_Height * 250)/823) +"px"; 

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
                            },400);
                        },1200);
                    },200);
                },200);
            },500);
        },700);
    },200);
});

letMeOrderButton.addEventListener("click",()=>{
    direction.classList.remove("show");
    setTimeout(()=>{
        menu.classList.add("show");
    },400);
});

/*carousel init */
let activeSlide = 0;
carousel.style.width = window_Width*carouselItemsList.length + "px";
for(let i = 0 ; i < carouselItemsList.length;i++){
    carouselItemsList[i].style.width = window_Width +"px";
}

for(let i = 0 ; i < productImage.length;i++){
    productImage[i].style.height = Math.round((window_Height*455)/812) +"px";
}

nextButton.addEventListener("click",()=>{
    let currentSlide = document.getElementById("slide"+activeSlide);
    nextButton.style.display = "flex";
    activeSlide ++;
    currentSlide.classList.add("dim");
    setTimeout(()=>{
        currentSlide.classList.remove("dim");
    },200);
    carousel.style.transform = "translateX("+  (-(window_Width*activeSlide)) +"px)";
    if(activeSlide == (carouselItemsList.length-1)) nextButton.style.display = "none";
    if(activeSlide > 0) prevButton.style.display = "flex";
});

prevButton.addEventListener("click",()=>{
    let currentSlide = document.getElementById("slide"+activeSlide);
     prevButton.style.display = "flex";
    activeSlide --;
    currentSlide.classList.add("dim");
    setTimeout(()=>{
        currentSlide.classList.remove("dim");
    },200);
    carousel.style.transform = "translateX("+ (-(window_Width*activeSlide)) +"px)";
    if(activeSlide == 0) prevButton.style.display = "none";
    if(activeSlide < carouselItemsList.length) nextButton.style.display = "flex";
});

backToDirectionButton.addEventListener("click",()=>{
    menu.classList.remove("show");
    setTimeout(()=>{
        direction.classList.add("show");
    },400);
});


for(let i = 0; i < selectProductButtons.length; i++ ){
   
    selectProductButtons[i].addEventListener("click",()=>{
        addToCart(selectProductButtons[i].attributes[1].value, selectProductButtons[i].attributes[2].value);
       //    console.log(selectProductButtons[i].attributes[1].value); 
    });
}

openCartButton.addEventListener("click",()=>{
    cart.classList.add("show");
});

closeCartButton.addEventListener("click",()=>{
    cart.classList.remove("show");
});
