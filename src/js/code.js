//resource defining
const resource = [
    "src/images/optimized/tinified/background.png",
    "src/images/optimized/tinified/background-header.png",
    "src/images/optimized/tinified/game-logo.png",
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
    "src/images/optimized/tinified/popup-base.png",
    "src/images/optimized/tinified/glow-effect.png",
    "src/images/optimized/tinified/cancel-button.png",
    "src/images/optimized/tinified/confirm-button.png",
    "src/images/optimized/tinified/continue-button.png",
    "src/images/optimized/tinified/background-order.png",
    "src/images/optimized/tinified/background-order-bottom.png",
    "src/images/optimized/tinified/order-popup.png",
]
// end

// quick code
function byID(name = "" ){
    return document.getElementById(name);
}

//quick code

let viewportWidth = window.screen.width;
let viewportHeight = window.screen.height;
let image = document.getElementsByTagName('img');
let totalBlock = 9;
let prizes = {
    1 : {img: "src/images/optimized/prize-1.png", type:"money", name: "Dưới viên kẹo này là 5k. Bạn có muốn nhận nó không?"},
    2 : {img: "src/images/optimized/prize-2.png", type:"money", name: "Dưới viên kẹo này là 25k. Bạn có muốn nhận nó không?"},
    3 : {img: "src/images/optimized/prize-3.png", type:"money", name: "Dưới viên kẹo này là 50k. Bạn có muốn nhận nó không?"},
    4 : {img: "src/images/optimized/prize-4.png", type:"money", name: "Dưới viên kẹo này là 100k. Bạn có muốn nhận nó không?"},
    5 : {img: "src/images/optimized/prize-5.png", type:"material", name: "Bạn được tặng thêm 1 ly khi mua. Bạn có muốn nhận nó không?"},
    6 : {img: "src/images/optimized/prize-6.png", type:"material", name: "Bạn được tặng 1 chiếc áo thun LUPU. Bạn có muốn nhận nó không?"},
}
let prizeMapWithBlock = [];
var prizeChecker = [];
var allLoaded =  false;
var selectingBlock = null;
var selectingBlockIndex = 0;
let playTimes = 3;
let precision = 9;
var notifyUserState = 0;

let blockDescription = [
    "",
    "Lupu coffee kẹo dẻo dưa hấu",
    "Lupu coffee kẹo đào",
    "Lupu coffee kẹo dẻo chanh",
    "Lupu coffee kẹo chanh",
    "Lupu coffee kẹo sữa dâu",
    "Lupu coffee kẹo bạc hà",
    "Lupu coffee kẹo keo sữa dưa lưới",
    "Lupu coffee kẹo dẻo cam",
    "Lupu coffee kẹo sữa việt quất",
];

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
  

function redirectToFacebook(){
    window.location.href = "https://www.facebook.com/lupucoffee";
}

function blockTap(index,blockWidth = 0, blockHeight = 0){
    var block = byID(`block-${index}`);
    var popup = byID("confirm-select-popup");
    var popupContent = byID('content');
    var popupBlockDisplayer = byID("selected-block"); // => display the selected block on popup
    var popupCancelButton = byID("cancel-button");
    var popupConfirmButton = byID("confirm-button");
    var playTimeIndicator = byID("play-times");
    console.log(playTimes);
    if(playTimes > 0){
        let clonedBlock = block.cloneNode(true);
        selectingBlock = block;
        selectingBlockIndex = index;
        block.className = "block show selected";
        selectingBlock.className = "block hide";
        clonedBlock.className = "block show selected";
        clonedBlock.id = "_selectedBlock";
        clonedBlock.style.margin = "0";
        clonedBlock.style.transform = "scale(1)";
        popupBlockDisplayer.innerHTML = '<div class="glow-effect" id="glow-effect"></div>';
        popupBlockDisplayer.style.height = blockHeight;
        popupBlockDisplayer.style.width = blockWidth;
        popupBlockDisplayer.appendChild(clonedBlock);

        if(prizeMapWithBlock[selectingBlockIndex] != 0){
            var blockDisplayedInDisplayer = byID("_selectedBlock");
            var glowEffect = byID("glow-effect");
            let prize = byID(`prize-${selectingBlockIndex}`); //prize in the selected block
            let prizeContainer = document.createElement("div");

            prizeContainer.innerHTML = `<img 
                src="${prizes[prizeMapWithBlock[selectingBlockIndex]].img}" 
                alt="lupu giải thưởng"
                width= "100%"
                height= "100%"
            />`;
            popupBlockDisplayer.append(prizeContainer);
            blockDisplayedInDisplayer .style.display = "none";
            glowEffect.className += " show";
            prize? prize.className += "show" : "";
            popupContent.innerHTML = `${prizes[prizeMapWithBlock[selectingBlockIndex]].name}`;
            popupCancelButton.style.display = "block";
            popupConfirmButton. style.backgroundImage = `url("src/images/optimized/tinified/confirm-button.png")`;
            popupConfirmButton.style.right = "10%";
            popup.className += " show";
            notifyUserState = 1;
            playTimeIndicator.innerHTML = playTimes > 0 ? playTimes - 1 : 0;
            playTimes -= 1;
        }else{
            let blockDisplayedInDisplayer = byID("_selectedBlock");
            let blockContainer = document.createElement("div");
            blockContainer.className = "block show selected";
            blockContainer.innerHTML =  `<img 
                src="src/images/optimized/tinified/block-${selectingBlockIndex}-wrong.png" 
                alt="lupu giải thưởng"
                width= "100%"
                height= "100%"
                style="height: 100% !important; width:100% !important;"
            />`;
            popupBlockDisplayer.append(blockContainer);
            blockDisplayedInDisplayer.style.display = "none";
            popupContent.innerHTML = `Tiếc quá, dưới viên kẹo này chẳng có gì cả. Bạn có muốn tiếp tục không?`;
            popupCancelButton.style.display = "none";
            popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/continue-button.png")`;
            popupConfirmButton.style.right = "30%";
            popup.className += " show";
            notifyUserState = 1;
            playTimeIndicator.innerHTML = playTimes > 0 ? playTimes - 1 : 0;
            playTimes -= 1;
        }
    }else{
        let blockContainer = document.createElement("div");
        blockContainer.className = "block show selected";
        blockContainer.innerHTML = `<img 
            src="src/images/optimized/tinified/block-${index}-wrong.png" 
            alt="lupu giải thưởng"
            width= "100%"
            height= "100%"
            style="height: 100% !important; width:100% !important;"
        />`;
        popupBlockDisplayer.innerHTML = "";
        popupBlockDisplayer.append(blockContainer);
        popupContent.innerHTML = "Bạn có muốn đặt ngay một ly trà mật rừng hoặc phin sữa để mở viên kẹo này không?"
        popupCancelButton.style.display = "block";
        popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/confirm-button.png")`;
        popupConfirmButton.style.right = "10%";
        popup.className += " show";
        playTimeIndicator.innerHTML = 0;
        playTimes -= 1;
    }
}

function hidePopup(){
    var confirmPopup = byID("confirm-select-popup");
    var guideText = byID("guide-text");
    let prize = byID(`prize-${selectingBlockIndex}`);
    confirmPopup.className = "popup";
    if(notifyUserState == 0){
        if(playTimes > 0){
            setTimeout(()=>{ selectingBlock.className = "block normal show";},300)
        }
    }else{
        if(playTimes == 0) {
            guideText.innerHTML = "Những viên kẹo còn lại biết cách giúp bạn có thêm lượt đấy"
        }else if (playTimes > 0){
            if (prize) {
                prize.className = "";
                selectingBlock.className = "block normal show";
            }
        }
        notifyUserState = 0;
    }
   
}

function returnToBoard(){
    var orderScreen = byID("order-screen");
    var mainScreen = byID("main-screen");

    orderScreen.className = "order-screen";
    mainScreen.style.filter = "none";
}

function userConfirm(){
    var confirmPopup = document.getElementById("confirm-select-popup");
    var guideText = document.getElementById("guide-text");
    let block = byID("block-wrapper-"+selectingBlockIndex);
    var orderScreen = byID("order-screen");
    var mainScreen = byID("main-screen");

    if(playTimes > -1){
        if(playTimes == 0) {
            guideText.innerHTML = "Những viên kẹo còn lại biết cách giúp bạn có thêm lượt đấy";
        }
        block.setAttribute("onClick","");
        confirmPopup.className = "popup";
    }  else if (playTimes < 0){
        confirmPopup.className = "popup";
        orderScreen.className += " show";
        mainScreen.style.filter = "blur(5px)";
        // window.location.href = " http://m.me/lupucoffee";
    }
}

function boardInit (){
    var loadingBar = document.getElementById("loading-bar");
    var progressBar = document.getElementById("progress-bar");
    var gameBoardShadow =  document.getElementById("game-board-shadow");
    var board = document.getElementById("board");
    var playTimeIndicator = document.getElementById("play-times");
    var confirmPopup = document.getElementById("confirm-select-popup");
    var cancelButton = document.getElementById("cancel-button");
    var confirmButton = document.getElementById("confirm-button");
    var content = document.getElementById('content');
    var orderPopup = byID("order-popup");
    let moneyPrizeApplied = 0;
    let materialPrizeApplied = 0;
    let boardWidth = /*board.offsetWidth;*/ viewportWidth;
    var htmlString = ""
    var rowCount = 0;
  

    //optimize for calculating
    let boardShadowSize = boardWidth - Math.floor(boardWidth*75/375);
    let boardSize = boardWidth - Math.floor(boardWidth*50/375);
    let blockSize = Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375);
    let popupButtonSizeW = boardWidth*0.35;
    let popupButtonSizeH = (boardWidth*0.35)*0.5;

    loadingBar.style.width =  boardWidth*0.9;
    loadingBar.style.height = (boardWidth*0.9)*0.25;

    progressBar.style.width =  0;
    progressBar.style.height = (boardWidth*0.75)*0.115;

    gameBoardShadow.style.width = boardShadowSize;
    gameBoardShadow.style.height = boardShadowSize;
    board.style.width = boardSize;
    board.style.height = boardSize;

    
    confirmPopup.style.width = boardSize;
    confirmPopup.style.height = boardSize;
    content.style.width = boardWidth*0.6;
    content.style.height = (boardWidth*0.6)*0.5;
    cancelButton.style.width = popupButtonSizeW;
    cancelButton.style.height = popupButtonSizeH;
    confirmButton.style.width = popupButtonSizeW;
    confirmButton.style.height = popupButtonSizeH;

    orderPopup.style.width = boardWidth;
    orderPopup.style.height = boardWidth/0.8333;

    playTimeIndicator.innerHTML = playTimes;

    for (let i = 1; i <= totalBlock; i++) {
        let randomPrize = randomNumber(precision);
        var prize =  "";
        // console.log(randomPrize);
        if((typeof (prizes[randomPrize]) != "undefined") && (!prizeMapWithBlock.includes(randomPrize))){  
            if(prizes[randomPrize].type == "money"){
                if(moneyPrizeApplied != 1){
                    prize = `<img 
                        id="prize-${i}"
                        src="${prizes[randomPrize].img}" 
                        alt="${blockDescription[i]}"
                        width= "${blockSize}px"
                        height= "${blockSize}px"
                    />`;
                    prizeMapWithBlock[i] = randomPrize;
                    moneyPrizeApplied = 1;
                }
                else{
                    prizeMapWithBlock[i] = 0; 
                }
            }

            if(prizes[randomPrize].type == "material"){
                if(materialPrizeApplied != 1){
                    prize = `<img 
                        id="prize-${i}"
                        src="${prizes[randomPrize].img}" 
                        alt="${blockDescription[i]}"
                        width= "${blockSize}px"
                        height= "${blockSize}px"
                    />`;
                    prizeMapWithBlock[i] = randomPrize;
                    materialPrizeApplied = 1;
                }
                else{
                    prizeMapWithBlock[i] = 0; 
                }
            }
           
        }else{
            prizeMapWithBlock[i] = 0;
        }

        htmlString += `
        <div
            class="block-wrapper"
            id = "block-wrapper-${i}"
            style="
                width:${blockSize}px;
                height: ${blockSize}px;
                margin-top: ${/*rowCount > 0 ? Math.floor(boardWidth*10/375) + "px" : 0*/ ""};
                margin-left: ${(i - (rowCount*3))%2 == 0 ? Math.floor(boardWidth*10/375) + "px" : i%3 == 0 ? Math.floor(boardWidth*10/375) +"px" : "0px"};
            "
            onClick= "blockTap(${i},${blockSize}, ${blockSize} )"
        >\n    
            ${prize}
            <div 
                class="block normal" 
                id="block-${i}" 
            > \n
                <img 
                    src="src/images/optimized/tinified/block-${i}.png" 
                    alt="${blockDescription[i]}"
                    width= "${blockSize}px"
                    height= "${blockSize}px"
                 />
                <img 
                    src="src/images/optimized/tinified/block-${i}-right.png" 
                    alt="${blockDescription[i]}"
                    width= "${blockSize}px"
                    height= "${blockSize}px"
                />
            </div> \n
        </div>    
        `;  

        if (i%3 == 0){
            var row = document.createElement("div");
            row.innerHTML = htmlString;    
            row.className = "row";
            if(rowCount == 0){row.style.marginTop = (boardWidth*(-3))/375; }
            board.append(row);  
            htmlString = "";
            rowCount += 1;
        }        
    }
}

boardInit();

 //         

// bind event to each image to realtime check loaded or not

var realtimeCheck = setInterval(()=>{
    let board = document.getElementById("board");
    let boardWidth = board.offsetWidth;
    let progressBar = document.getElementById("progress-bar");
    var imageLoader = document.getElementById("image-loader");
    for(let i = 0; i < resource.length; i++){
        imageLoader.setAttribute("src",resource[i]);
        if(imageLoader.complete && imageLoader.naturalHeight !== 0){
            progressBar.style.width =  boardWidth*0.872*(i/resource.length);
            allLoaded = true;
        }else{
            allLoaded = false;
        }
    } 
    if(allLoaded == true) clearInterval(realtimeCheck);
},60)

// check if all assets loaded
window.addEventListener("load", event => {
    var board = document.getElementById("board");
    var loadingScreen = document.getElementById("loading-screen");
    var boardShadow = document.getElementById("game-board-shadow");
    loadingScreen.className = "loading-screen";
    board.className += " show";
    boardShadow.className += " show";
    for(let i = 1; i <= totalBlock; i++){
        var block = document.getElementById(`block-${i}`);
        block.className += " show shake";
    }
    setTimeout(()=>{
        for(let i = 1; i <= totalBlock; i++){
            var block = document.getElementById(`block-${i}`);
            block.className = "block normal show";
        }
        loadingScreen.style.display = "none";
    },1300)

});

