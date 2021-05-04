// global variable defining //
// const resouceList = [
//     "src/images/optimized/tinified/background.png",
//     "src/images/optimized/tinified/background-header.png",
//     "src/images/optimized/tinified/game-logo.png",
//     "src/images/optimized/tinified/menu-background.png",
//     "src/images/optimized/tinified/play-button.png",
//     "src/images/optimized/tinified/term-button.png",
//     "src/images/optimized/tinified/policy-button.png",
//     "src/images/optimized/tinified/before-u-play.png",
//     "src/images/optimized/tinified/board.png",
//     "src/images/optimizedtinified//block-1.png",
//     "src/images/optimized/tinified/block-1-right.png",
//     "src/images/optimized/tinified/block-1-wrong.png",
//     "src/images/optimized/tinified/block-2.png",
//     "src/images/optimized/tinified/block-2-right.png",
//     "src/images/optimized/tinified/block-2-wrong.png",
//     "src/images/optimized/tinified/block-3.png",
//     "src/images/optimized/tinified/block-3-right.png",
//     "src/images/optimized/tinified/block-3-wrong.png",
//     "src/images/optimized/tinified/block-4.png",
//     "src/images/optimized/tinified/block-4-right.png",
//     "src/images/optimized/tinified/block-4-wrong.png",
//     "src/images/optimized/tinified/block-5.png",
//     "src/images/optimized/tinified/block-5-right.png",
//     "src/images/optimized/tinified/block-5-wrong.png",
//     "src/images/optimized/tinified/block-6.png",
//     "src/images/optimized/tinified/block-6-right.png",
//     "src/images/optimized/tinified/block-6-wrong.png",
//     "src/images/optimized/tinified/block-7.png",
//     "src/images/optimized/tinified/block-7-right.png",
//     "src/images/optimized/tinified/block-7-wrong.png",
//     "src/images/optimized/tinified/block-8.png",
//     "src/images/optimized/tinified/block-8-right.png",
//     "src/images/optimized/tinified/block-8-wrong.png",
//     "src/images/optimized/tinified/block-9.png",
//     "src/images/optimized/tinified/block-9-right.png",
//     "src/images/optimized/tinified/block-9-wrong.png",
//     "src/images/optimized/tinified/prize-1.png",
//     "src/images/optimized/tinified/prize-2.png",
//     "src/images/optimized/tinified/prize-3.png",
//     "src/images/optimized/tinified/prize-4.png",
//     "src/images/optimized/tinified/prize-5.png",
//     "src/images/optimized/tinified/prize-6.png",
//     "src/images/optimized/tinified/prize-7.png",
//     "src/images/optimized/tinified/prize-8.png",
//     "src/images/optimized/tinified/prize-9.png",
//     "src/images/optimized/tinified/prize-10.png",
//     "src/images/optimized/tinified/prize-11.png",
//     "src/images/optimized/tinified/prize-12.png",
//     "src/images/optimized/tinified/prize-13.png",
//     "src/images/optimized/tinified/round-1.png",
//     "src/images/optimized/tinified/round-2.png",
//     "src/images/optimized/tinified/more-plays.png",
//     "src/images/optimized/tinified/add-plays.png",
//     "src/images/optimized/tinified/popup-base.png",
//     "src/images/optimized/tinified/glow-effect.png",
//     "src/images/optimized/tinified/cancel-button.png",
//     "src/images/optimized/tinified/confirm-button.png",
//     "src/images/optimized/tinified/continue-button.png",
//     "src/images/optimized/tinified/share-button.png",
//     "src/images/optimized/tinified/background-order.png",
//     "src/images/optimized/tinified/background-order-bottom.png",
//     "src/images/optimized/tinified/order-popup.png",
//     "src/images/optimized/tinified/back-button.png",
//     "src/images/optimized/tinified/order-button.png",
//     "src/images/optimized/tinified/product-1.png",
//     "src/images/optimized/tinified/product-2.png"
// ];

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
let round = window.localStorage.getItem('plays')!= 0 ? 1 : 2;
let openTimes = window.localStorage.getItem('plays')!= 0 ? 6 : 0;
let buyingPhase = 0;
let startShowGuide = 0;
let endShowGuide = 0;
let isCheat = false;

// DOM element
const _body  = document.body;
const board = document.getElementById("board");
let guideText = document.getElementById("guide-text");
let playTimesIndicator = document.getElementById("play-times-indicator");
let round1Indicator = document.getElementById("round1-content");
let round1IndicatorContent = document.getElementById("play-times");
let round2Indicator = document.getElementById("round2-content");
let round2IndicatorContent = document.getElementById("round2-play-times");

playGame = ()=>{
    var menu = byID("game-menu");
    menu.className += " hide";
    magicKey();
    clickOnPlay = 1;
    setTimeout(function(){
        menu.style.zIndex = -1000;
    },200);
}

magicKey = ()=>{
    let db = firebase.firestore();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var keyCode = url.searchParams.get("code");
    var board = byID("game-board");
    if (keyCode){
        if(!window.localStorage.getItem(keyCode)){
            let docRef =  db.collection("codes").doc(keyCode);
            docRef.get().then((doc) => {
                if(!doc.data()){
                    let decrypt = CryptoJS.AES.decrypt(keyCode,"LUPUCOFFE");
                    let string = decrypt.toString(CryptoJS.enc.Utf8);
                    if(string.includes("add 1 play")){window.localStorage.setItem('plays',1); round = 1; openTimes = 6; }
                    else if (string.includes("add 2 play")){window.localStorage.setItem('plays', 2); round = 1; openTimes = 6;}
                    else if (string.includes("add 3 play")){window.localStorage.setItem('plays', 3); round = 1; openTimes = 6;}
                    else if (string.includes("add 4 play")){window.localStorage.setItem('plays', 4); round = 1; openTimes = 6;}
                    else if (string.includes("add 5 play")){window.localStorage.setItem('plays', 5); round = 1; openTimes = 6;}
                    else if (string.includes("add 6 play")){window.localStorage.setItem('plays', 6); round = 1; openTimes = 6;}
                    else if (string.includes("add 7 play")){window.localStorage.setItem('plays', 7); round = 1; openTimes = 6;}
                    else if (string.includes("add 8 play")){window.localStorage.setItem('plays', 8); round = 1; openTimes = 6;}
                    else if (string.includes("add 9 play")){window.localStorage.setItem('plays', 9); round = 1; openTimes = 6;}
                    else if (string.includes("add 10 play")){window.localStorage.setItem('plays', 10); round = 1; openTimes = 6;}
                    else if (string.includes("add 11 play")){window.localStorage.setItem('plays', 11); round = 1; openTimes = 6;}
                    else if (string.includes("add 12 play")){window.localStorage.setItem('plays', 12); round = 1; openTimes = 6;}
                    else if (string.includes("add 13 play")){window.localStorage.setItem('plays', 13); round = 1; openTimes = 6;}
                    else if (string.includes("add 14 play")){window.localStorage.setItem('plays', 14); round = 1; openTimes = 6;}
                    else if (string.includes("add 15 play")){window.localStorage.setItem('plays', 15); round = 1; openTimes = 6;}
                    else if (string.includes("add 16 play")){window.localStorage.setItem('plays', 16); round = 1; openTimes = 6;}
                    else if (string.includes("add 17 play")){window.localStorage.setItem('plays', 17); round = 1; openTimes = 6;}
                    else if (string.includes("add 18 play")){window.localStorage.setItem('plays', 18); round = 1; openTimes = 6;}
                    window.localStorage.setItem(keyCode,false);
                    db.collection("codes").doc(keyCode).set({
                        status: false,
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                    createBoard();
                    board.className += " show";
                }else{
                    round = 2;
                    openTimes = 0;
                    window.localStorage.setItem('plays',0);
                    isCheat = true;
                    createBoard();
                    board.className += " show";
                    console.log("out of plays firestore");
                }
            });
        }else{
            createBoard();
            board.className += " show";
            console.log("out of plays");
        }
    } 
}

redirectToFacebook = () =>{
    // gtag("event","Tap",{
    //     'event_category': 'Tap on button',
    //     'event_label': 'Order button',
    //     'value': `pressed`
    // }); 
    window.location.href = `https://m.me/lupucoffee?ref=${prizes[maxValuePrizeIndex].value}`;
}

getTimeData = ()=>{
    var d = new Date();
    var n = d.getTime();
    return n;
}

getInteractionTime = (start,end)=>{
    let timeSpan = end - start;
    let seconds = Math.floor(timeSpan/1000);
    let minute = Math.floor(timeSpan/1000/60);
    let hour =  Math.floor(timeSpan/1000/60/60);
    console.log(timeSpan);
    return `${hour}:${minute}:${seconds}`;
}



randomNumber = max => {
    return Math.floor(Math.random() * max);
}

// shufflePrize = ()=>{
//     let randomPrize = randomNumber(_precision);
//     if(prizeInBlock.length != Object.keys(prizes).length){
//         if(!prizeInBlock.includes(randomPrize) && (randomPrize != 0)){
//             prizeInBlock.push(randomPrize);
//         }
//     }else{
//         clearInterval(generatePrizeMap);
//     }
// }

shufflePrize = ()=>{
    setTimeout(()=>{
        let randomPrize = randomNumber(_precision);
        if(prizeInBlock.length != Object.keys(prizes).length){
            if(!prizeInBlock.includes(randomPrize) && (randomPrize != 0)){
                prizeInBlock.push(randomPrize);
                console.log(randomPrize);
            }
            shufflePrize();
        }
    },0);
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
                        setTimeout(()=>{
                            guideText.className += " show";
                            playTimesIndicator.className += " show";
                        },500);  
                    },200);
                },1500)
            },2000)
        }else{
            if(buyingPhase != 1){
                blockHasPrize.className = "block show";
                setTimeout(()=>{
                    blockHasPrize.className += " show-prize";
                    setTimeout(()=>{
                        let popupButton= document.getElementById("popup-button");
                        let label = document.getElementById("popup-label");
                        let localStorage = window.localStorage;
                        guideText.className = "guide-text";
                        playTimesIndicator.className = "play-times-indicator";
                        label.setAttribute("src","src/images/optimized/tinified/out-of-plays.png");
                        popupButton.setAttribute("src","src/images/optimized/tinified/agree-order-button.png")
                        content.innerHTML = `Bạn có muốn chơi lại không? Chỉ cần đặt một ly Trà Mật Rừng hoặc Phin Sữa Nâu của LUPU bạn sẽ có thêm 1 lượt chơi. Ngoài ra bạn sẽ được LUPU tặng 10k và giảm đến 50% cho ly thứ 2. `;
                        // popup.className += " show";
                        buyingPhase = 1;
                        localStorage.setItem('plays',0);
                        showPopup();
                        
                    },1500);
                },1000);
            }else{
                let products = document.getElementById("products");
                let buyingInfo = document.getElementById("buying-info");
                products.className += " show";
                buyingInfo.className += " show";
            }
        }
    }else{
        setTimeout(()=>{
            guideText.className += " show";
            playTimesIndicator.className += " show";
        },500); 
    }

    if(buyingPhase != 1){
        popup.className += " hide";
        endShowGuide = getTimeData();
        setTimeout(()=>{
            popup.className = "popup";
            // gtag("event","Tap",{
            //     'event_category': 'Tap on button',
            //     'event_label': `Close guide modal - round ${round}`,
            //     'value': `${getInteractionTime(startShowGuide,endShowGuide)}`
            // }); 
        },1000);
    }
   
}

showPopup = ()=>{
    let popup = document.getElementById("popup");
    let label = document.getElementById("popup-label");
    let content = document.getElementById("popup-content");
    let unopenBlock = getNotYetOpenedBlock();
    if(round == 2){
        if(openTimes == 0){
            if(buyingPhase != 1){
                label.setAttribute("src","src/images/optimized/tinified/sorry.png");
                content.innerHTML = "Bạn đã chọn không đúng rồi. Bây giờ LUPU sẽ cho bạn thấy phần thường của bạn nằm ở viên kẹo nào nhé"; 
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
            }
            else{
                let tooltip = document.getElementById("tooltip");
                popup.className += " show";
                setTimeout(()=>{
                    tooltip.className += " show";
                    setTimeout(()=>{
                        tooltip.className += " hide";
                        // setTimeout(()=>{
                        //     let slider = document.getElementById("slider");
                        //     slider.className += " show";
                        //     tooltip.className = "tooltips";
                        // },850);
                    },1500);
                },2500);
            }
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
            content.innerHTML = `LUPU sẽ giữ lại viên có giá ${prizes[maxValuePrizeIndex].value}k và hoán đổi giá trị với hai viên còn lại (2 viên rỗng). Chúc bạn may mắn.`;
            popup.className += " show";
            startShowGuide = getTimeData();
        }
    }else{
        popup.className += " show";
        startShowGuide = getTimeData();
    }
}

// popup

// blocks

createBlock = (index = null, prizeIndex = null)=>{
    console.log(prizeIndex);
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
    showPrize(index);
    openedBlock.push(index);
    openTimes --;
    round1IndicatorContent.innerHTML = openTimes;
    console.log(openTimes);
    targetBlock.setAttribute("onlick","");
    // gtag("event","Tap",{
    //     'event_category': 'Tap on candy',
    //     'event_label': `Open block ${index}`,
    //     'value': 'opened'
    // });
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
                    guideText.className = "guide-text";
                    playTimesIndicator.className = "play-times-indicator";
                    setTimeout(()=>{
                        showPopup();
                        round1Indicator.className="";
                        round2IndicatorContent.innerHTML = openTimes;
                        round2Indicator.className = "show";
                        guideText.innerHTML = "Ba viên kẹo này đã bị hoán đổi giá trị cho nhau. Bạn chỉ được chọn 1 trong 3.";
                    },200);
                },1500)
            },1000);
        },2000)
    }
}

round2LogicTap = (index)=>{
    let round2IndicatorContent = document.getElementById("round2-play-times");
    showPrize(index);
    openedBlock.push(index);
    openTimes --;
    round2IndicatorContent.innerHTML = openTimes;
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
                        <p id="popup-content">Mỗi viên kẹo được sắp xếp ngẫu nhiên với giá 1k, 5k, 10k, 25k, 100k, 200k, 300k và 400k . Bạn phải bỏ đi 6 viên chỉ giữ lại 3 cho vòng sau.</p>
                        <div class="button" onclick="hidePopup()"><img id="popup-button" src="src/images/optimized/tinified/agree-button.png" alt ="lupu coffee"/></div>
                        <div class="products" id="products">
                            <div class="frame">
                                <div class="wrapper" id="slider">
                                    <img src="src/images/optimized/tinified/product-2.png"/>
                                    <img src="src/images/optimized/tinified/product-1.png"/>
                                    <div class="tooltips" id="tooltip">
                                        Quẹt sang phải để xem thêm bạn nhé!
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>`;
    board.innerHTML = html;
    if (window.localStorage.getItem('plays')!= 0){
        showBlock();
    }else{
        let popupButton= document.getElementById("popup-button");
        let content = document.getElementById("popup-content");
        let label = document.getElementById("popup-label");
        guideText.className = "guide-text";
        playTimesIndicator.className = "play-times-indicator";
        label.setAttribute("src","src/images/optimized/tinified/out-of-plays.png");
        popupButton.setAttribute("src","src/images/optimized/tinified/agree-order-button.png")
        if(!isCheat){
            content.innerHTML = `Bạn đã hết lượt rồi? Chỉ cần đặt một ly Trà Mật Rừng hoặc Phin Sữa Nâu của LUPU bạn sẽ có thêm 1 lượt chơi. Ngoài ra bạn sẽ được LUPU tặng 10k và giảm đến 50% cho ly thứ 2. `;
        }else{
            content.innerHTML = 'Mã code này đã được sử dụng. Đặt ngay một ly Trà Mật Rừng hoặc Phin Sữa Nâu của LUPU bạn sẽ có thêm 1 lượt chơi. Ngoài ra bạn sẽ được LUPU tặng 10k và giảm đến 50% cho ly thứ 2.'
        }
     
        buyingPhase = 1;
        showPopup();
    }
}

//realtime logic

// var generatePrizeMap = setInterval(() => {shufflePrize();}, 60);
// init logic when page load
body.onload = (e)=>{
    body.style.fontSize = Math.round(_isMobile ==  true ? _screenWidth*13/320 : 13) + "px";
    board.style.width = _boardWidth;
    board.style.height = _boardWidth;
    shufflePrize();
}
