// global variable defining //
const resouceList = [
    "src/images/optimized/tinified/background.png",
    "src/images/optimized/tinified/background-header.png",
    "src/images/optimized/tinified/game-logo.png",
    "src/images/optimized/tinified/menu-background.png",
    "src/images/optimized/tinified/play-button.png",
    "src/images/optimized/tinified/term-button.png",
    "src/images/optimized/tinified/policy-button.png",
    "src/images/optimized/tinified/before-u-play.png",
    "src/images/optimized/tinified/board.png",
    "src/images/optimizedtinified//block-1.png",
    "src/images/optimized/tinified/block-1-right.png",
    "src/images/optimized/tinified/block-1-wrong.png",
    "src/images/optimized/tinified/block-2.png",
    "src/images/optimized/tinified/block-2-right.png",
    "src/images/optimized/tinified/block-2-wrong.png",
    "src/images/optimized/tinified/block-3.png",
    "src/images/optimized/tinified/block-3-right.png",
    "src/images/optimized/tinified/block-3-wrong.png",
    "src/images/optimized/tinified/block-4.png",
    "src/images/optimized/tinified/block-4-right.png",
    "src/images/optimized/tinified/block-4-wrong.png",
    "src/images/optimized/tinified/block-5.png",
    "src/images/optimized/tinified/block-5-right.png",
    "src/images/optimized/tinified/block-5-wrong.png",
    "src/images/optimized/tinified/block-6.png",
    "src/images/optimized/tinified/block-6-right.png",
    "src/images/optimized/tinified/block-6-wrong.png",
    "src/images/optimized/tinified/block-7.png",
    "src/images/optimized/tinified/block-7-right.png",
    "src/images/optimized/tinified/block-7-wrong.png",
    "src/images/optimized/tinified/block-8.png",
    "src/images/optimized/tinified/block-8-right.png",
    "src/images/optimized/tinified/block-8-wrong.png",
    "src/images/optimized/tinified/block-9.png",
    "src/images/optimized/tinified/block-9-right.png",
    "src/images/optimized/tinified/block-9-wrong.png",
    "src/images/optimized/tinified/prize-1.png",
    "src/images/optimized/tinified/prize-2.png",
    "src/images/optimized/tinified/prize-3.png",
    "src/images/optimized/tinified/prize-4.png",
    "src/images/optimized/tinified/prize-5.png",
    "src/images/optimized/tinified/prize-6.png",
    "src/images/optimized/tinified/prize-7.png",
    "src/images/optimized/tinified/prize-8.png",
    "src/images/optimized/tinified/prize-9.png",
    "src/images/optimized/tinified/prize-10.png",
    "src/images/optimized/tinified/prize-11.png",
    "src/images/optimized/tinified/prize-12.png",
    "src/images/optimized/tinified/prize-13.png",
    "src/images/optimized/tinified/round-1.png",
    "src/images/optimized/tinified/round-2.png",
    "src/images/optimized/tinified/more-plays.png",
    "src/images/optimized/tinified/add-plays.png",
    "src/images/optimized/tinified/popup-base.png",
    "src/images/optimized/tinified/glow-effect.png",
    "src/images/optimized/tinified/cancel-button.png",
    "src/images/optimized/tinified/confirm-button.png",
    "src/images/optimized/tinified/continue-button.png",
    "src/images/optimized/tinified/share-button.png",
    "src/images/optimized/tinified/background-order.png",
    "src/images/optimized/tinified/background-order-bottom.png",
    "src/images/optimized/tinified/order-popup.png",
    "src/images/optimized/tinified/back-button.png",
    "src/images/optimized/tinified/order-button.png",
    "src/images/optimized/tinified/product-1.png",
    "src/images/optimized/tinified/product-2.png"
];

// let prizes = {
//     1: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "May quá dưới viên kẹo này chỉ có 1k thôi bạn ơi!", value:1},
//     2: {img: "src/images/optimized/tinified/prize-1.png", type:"many", name: "May quá dưới viên kẹo này chỉ có 5k thôi bạn ơi!", value:5},
//     3: {img: "src/images/optimized/tinified/prize-13.png", type:"many", name: "May quá dưới viên kẹo này chỉ có 10k thôi bạn ơi!", value:10},
//     4: {img: "src/images/optimized/tinified/prize-2.png", type:"many", name: "Ồ dưới viên kẹo này có 25k nà!", value:25},
//     5: {img: "src/images/optimized/tinified/prize-3.png", type:"many", name: "Hmm, dưới viên kẹo này có 50k. Hơi tiếc nhỉ!", value:50},
//     6: {img: "src/images/optimized/tinified/prize-4.png", type:"many", name: "Oops! Dưới viên kẹo này là 100k. Hụt rồi!", value:100},
//     7: {img: "src/images/optimized/tinified/prize-14.png", type:"many", name: "Ối, viên kẹo này có giá 200k đấy bạn ơi!", value:200},
//     8: {img: "src/images/optimized/tinified/prize-15.png", type:"many", name: "Hu hu, 300k đã bay màu!", value:300},
//     9: {img: "src/images/optimized/tinified/prize-16.png", type:"many", name: "Thôi xong, 400k đã không cánh mà bay.", value:400},
// };

const _screenWidth = window.screen.width;
const _screenHeight = window.screen.height;
const _isMobile = window.screen.width < 500 ? true : false;
const _viewportWidth =  _isMobile ? _screenWidth: 320 ;
const _totalBlock = 9;
const _boardWidth =  _viewportWidth - 60;
const _precision = 10;


let prizeInBlock = [];
let openedBlock = [];
let unopenBlock = [];
let blockHasPrize = null;
let maxValueBlock = null;
let maxValuePrizeIndex = null;
let round = 1;
let openTimes = 6;

// DOM element
const _body  = document.body;
const board = document.getElementById("board");


randomNumber = max => {
    return Math.floor(Math.random() * max);
}

shufflePrize = ()=>{
    let randomPrize = randomNumber(_precision);
    if(prizeInBlock.length != Object.keys(prizes).length){
        if(!prizeInBlock.includes(randomPrize) && (randomPrize != 0)){
            prizeInBlock.push(randomPrize);
        }
    }else{
        clearInterval(generatePrizeMap);
        board.className += " show";
        createBoard();
    }
}      

getNotYetOpenedBlock = ()=>{
    let notOpenedBlock = [];
    for(let i = 1; i <=  _totalBlock; i++){
        if(!openedBlock.includes(i)) notOpenedBlock.push(i);
    }
    return notOpenedBlock;
}

showPrize = (index)=>{
    let block = document.getElementById(`block-${index}`);
    block.className += " show-prize";
}

hidePrize = (index)=>{
    let block = document.getElementById(`block-${index}`);
    block.className = "block";
    setTimeout(()=>{
        block.className += " show-revert";
    },0);
}

removePrize = (index)=>{
    let block = document.getElementById(`block-${index}-prize`);
    block.remove();
}




// popup
hidePopup = ()=>{
    let popup = document.getElementById("popup");
    let content = document.getElementById("popup-content");
    popup.className += " hide";
    if(round == 2){
        let unopenBlock = getNotYetOpenedBlock();
        if(openTimes > 0){
            for(let i = 0; i< unopenBlock.length; i++){
                showPrize(unopenBlock[i]);
            }

            setTimeout(()=>{

                for(let i = 0; i< unopenBlock.length; i++){
                    let prizeElem = document.getElementById(`block-${unopenBlock[i]}-prize`);
                    if (unopenBlock[i] != maxValueBlock){
                        prizeElem.className = "hide";
                    }
                }
                setTimeout(()=>{
                    for(let i = 0; i< unopenBlock.length; i++){
                        hidePrize(unopenBlock[i]);
                    }
                    setTimeout(()=>{
                        for(let i = 0; i< unopenBlock.length; i++){
                            removePrize(unopenBlock[i]);
                        }
                    },200);
                },1500)
            },2000)
        }else{
            blockHasPrize.className = "block show";
            setTimeout(()=>{
                blockHasPrize.className += " show-prize";
                setTimeout(()=>{
                    let popupButton= document.getElementById("popup-button");
                    popupButton.setAttribute("src","src/images/optimized/tinified/agree-order-button.png")
                    content.innerHTML = `Bạn có muốn chọn lại không? Chỉ cần đặt một ly Trà Mật Rừng hoặc Phin Sữa Nâu chỉ 29k của LUPU là bạn đã có thể tiếp tục ván này rồi. ${prizes[maxValuePrizeIndex].value}k đang chờ bạn.`;
                    popup.className += " show";
                },1500);
            },1000);
        }
    }
    setTimeout(()=>{
        popup.className = "popup";
        
    },1000)
}

showPopup = ()=>{
    let popup = document.getElementById("popup");
    let label = document.getElementById("popup-label");
    let content = document.getElementById("popup-content");
    let unopenBlock = getNotYetOpenedBlock();
    if(round == 2){
        if(openTimes == 0){
            label.setAttribute("src","src/images/optimized/tinified/round-2.png");
            content.innerHTML = "Tiếc quá, bạn đã chọn không đúng rồi. Bây giờ LUPU sẽ cho bạn thấy phần thường của bạn nằm ở viên kẹo nào nhé"; 
            setTimeout(()=>{ 
                 popup.className += " show";
                 setTimeout(()=>{
                    let randomBlock = randomNumber(2);
                    blockHasPrize = document.getElementById(`block-${unopenBlock[randomBlock]}`);
                    blockHasPrize.innerHTML += `<img 
                        alt="lupu coffee"
                        id="block-${maxValueBlock}-prize"
                        src="${prizes[maxValuePrizeIndex].img}" 
                    />`;
                },500);
            },1000);
        }else{
            let maxValue = 0;
            let blockIndex = null;
            let prizeIndex =  null;
            for(let i = 0; i < unopenBlock.length; i++){
                let prizeElem = document.getElementById(`block-${unopenBlock[i]}-prize`);
                if(parseInt(prizeElem.dataset.value) > maxValue ){
                    maxValue = parseInt(prizeElem.dataset.value);
                    blockIndex = unopenBlock[i]; 
                    prizeIndex = parseInt(prizeElem.dataset.prizeIndex); 
                    console.log(prizeIndex);
                }   
            }
            maxValueBlock = blockIndex;
            maxValuePrizeIndex = prizeIndex;
            label.setAttribute("src","src/images/optimized/tinified/round-2.png");
            content.innerHTML = "Hai trong ba viên kẹo này sẽ bị thay thế bởi những viên kẹo rỗng. Viên có giá trị cao nhất sẽ được giữ lại. Tuy nhiên giá trị của chúng sẽ hoán đổi cho nhau. Bạn chỉ được chọn 1 trong 3.";
            popup.className += " show";
        }
    }else{
        popup.className += " show";
    }
}

// popup

// blocks

createBlock = (index = null, prizeIndex = null)=>{
    return`
        <div class="block" id="block-${index}" onclick="blockTap(${index})">   
            <img 
                alt="lupu coffee"
                id="block-${index}-prize"
                src="${prizes[prizeIndex].img}" 
                data-value="${prizes[prizeIndex].value}" 
                data-prize-index = "${prizeIndex}"
            />

            <div class="candy" id="block-${index}-candy">
                <img
                    alt="lupu coffee"
                    src="src/images/optimized/tinified/block-${index}.png"  
                />
            </div>
        </div>    
    `;
}

showBlock = (i = 1)=>{
    setTimeout(() => {
        let block = document.getElementById(`block-${i}`);
        block.className += " show";
        i++;
        if(i <= _totalBlock){
            showBlock(i);
        }else{
            const round1Label = document.getElementById("round-1");
            setTimeout(()=>{
                round1Label.className += " show";
                setTimeout(()=>{
                    round1Label.className = "round-label";
                    setTimeout(()=>{
                        showPopup();
                    },200);
                },1500)
            },100);
        }
    }, 120);
}

hideBlocks = ()=>{
    for(let i = 0; i < openedBlock.length; i++){
        let block = document.getElementById(`block-${openedBlock[i]}`);
        block.className += " hide";
    }
}

round1LogicTap = (index)=>{
    let targetBlock = document.getElementById(`block-${index}`);
    let round1Indicator = document.getElementById("round1-content");
    let round1IndicatorContent = document.getElementById("play-times");
    let round2Indicator = document.getElementById("round2-content");
    let round2IndicatorContent = document.getElementById("round2-play-times");
    let guideText = document.getElementById("guide-text");
    showPrize(index);
    openedBlock.push(index);
    openTimes --;
    round1IndicatorContent.innerHTML = openTimes;
    console.log(openTimes);
    targetBlock.setAttribute("onlick","");
    if(openTimes == 0){
        setTimeout(()=>{
            hideBlocks();
            setTimeout(()=>{
                const round2Label = document.getElementById("round-2");
                round2Label.className += " show";
                setTimeout(()=>{
                    round2Label.className = "round-label";
                    round = 2;
                    openTimes = 1;
                    setTimeout(()=>{
                        round1Indicator.className="";
                        round2IndicatorContent.innerHTML = openTimes;
                        round2Indicator.className = "show";
                        guideText.innerHTML = "Ba viên kẹo này đã bị hoán đổi giá trị cho nhau. Bạn chỉ được chọn 1 trong 3.";
                        showPopup();
                    },200);
                },1500)
            },1000);
        },2000)
    }
}

round2LogicTap = (index)=>{
    showPrize(index);
    openedBlock.push(index);
    openTimes --;
    showPopup();

}


blockTap = (index)=>{
    if(round == 1 && openTimes > 0){
        round1LogicTap(index);
    }else if(round == 2 && openTimes > 0){
        round2LogicTap(index);
    } 
}

// blocks

createBoard = ()=>{
    let html = "";
    for(let i = 1; i <= _totalBlock; i++){html += createBlock(i, prizeInBlock[i-1]);}
    html += '<div class="round-label" id="round-1"><img src="src/images/optimized/tinified/round-1.png" alt="lupu coffee"/></div>';
    html += '<div class="round-label" id="round-2"><img src="src/images/optimized/tinified/round-2.png" alt="lupu coffee"/></div>';
    html += '<div class="board-shadow"></div>';
    html += `<div id="popup" class="popup">
                <div class="wrapper">
                    <img src="src/images/optimized/tinified/before-u-play.png" alt="lupu coffee"/>
                    <div class="content">
                        <div class="img-holder"><img id="popup-label" src="src/images/optimized/tinified/round-1.png" alt ="lupu coffee"/></div>
                        <p id="popup-content"> Dưới mỗi viên kẹo là các mệnh giá gồm 1k, 5k, 10k, 25k, 50k, 100k, 200k, 300k và 400k. Bạn sẽ phải bỏ đi 6 viên kẹo (chỉ giữ lại 3) bằng cách nhấn vào chúng. Cân nhắc trước khi chọn nhé ! </p>
                        <div class="button" onclick="hidePopup()"><img id="popup-button" src="src/images/optimized/tinified/agree-button.png" alt ="lupu coffee"/></div>
                    </div>
                </div>
            </div>`;
    board.innerHTML = html;
    showBlock();
}

//realtime logic
var generatePrizeMap = setInterval(() => {if(clickOnPlay == 1) shufflePrize();}, 60);

// init logic when page load
body.onload = ()=>{
    body.style.fontSize = Math.round(_isMobile ==  true ? _screenWidth*13/320 : 13) + "px";
    board.style.width = _boardWidth;
    board.style.height = _boardWidth;
}
