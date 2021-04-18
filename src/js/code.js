//resource defining
let res = [
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
    "src/images/optimized/tinified/popup-base.png",
    "src/images/optimized/tinified/glow-effect.png",
    "src/images/optimized/tinified/cancel-button.png",
    "src/images/optimized/tinified/confirm-button.png",


]
// end

let viewportWidth = window.screen.width;
let viewportHeight = window.screen.height;
let image = document.getElementsByTagName('img');
let totalBlock =  9;
let prizes = {
    1 : {img: "src/images/optimized/prize-1.png", name: "5k"},
    2 : {img: "src/images/optimized/prize-2.png", name: "25k"},
    3 : {img: "src/images/optimized/prize-3.png", name: "50k"},
    4 : {img: "src/images/optimized/prize-4.png", name: "100k"},
    5 : {img: "src/images/optimized/prize-5.png", name: "thêm 1 ly LUPU khi order"},
}
let prizeMapWithBlock = [];
var prizeChecker = [];
var allLoaded =  false;
var selectingBlock = null;
var selectingBlockIndex = 0;
let playTimes = 9;
let precision = 6;
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
    var block = document.getElementById(`block-${index}`);
    var confirmPopup = document.getElementById("confirm-select-popup");
    var popupContent = document.getElementById('content');
    var selectedBlockDisplayer = document.getElementById("selected-block");
    var displayBlockOnPopup = null;

    if(playTimes > 0){
        selectingBlock = block;
        selectingBlockIndex = index;
        displayBlockOnPopup = block.cloneNode(true);
        displayBlockOnPopup.style.transform = "scale(1)";
        displayBlockOnPopup.style.margin = "0";
        displayBlockOnPopup.setAttribute("id", "_selectedBlock");
        block.className = "block show selected";
        displayBlockOnPopup.className = " block show selected";
        selectedBlockDisplayer.style.width = blockWidth;
        selectedBlockDisplayer.style.height = blockHeight;
        selectedBlockDisplayer.innerHTML = `<div class="glow-effect" id="glow-effect"></div>`;
        selectedBlockDisplayer.appendChild(displayBlockOnPopup);
        popupContent.innerHTML = "Bạn có chắc chắn muốn mở viên kẹo này chứ? Bạn sẽ không thể hồi lại đâu nhé."
        confirmPopup.className += " show";
    }else{
        displayBlockOnPopup = block.cloneNode(true);
        displayBlockOnPopup.style.transform = "scale(1)";
        displayBlockOnPopup.style.margin = "0";
        displayBlockOnPopup.className = "block show selected";
        selectedBlockDisplayer.style.width = blockWidth;
        selectedBlockDisplayer.style.height = blockHeight;
        selectedBlockDisplayer.innerHTML = ""; 
        selectedBlockDisplayer.appendChild(displayBlockOnPopup);
        popupContent.innerHTML = "Bạn có muốn đặt ngay một ly trà mật rừng hoặc phin sữa để mở viên kẹo này không?"
        confirmPopup.className += " show";
    }
}

function hidePopup(){
    var confirmPopup = document.getElementById("confirm-select-popup");
    confirmPopup.className = "popup";
    if(notifyUserState == 0){
        if(playTimes > 0){
            setTimeout(()=>{ selectingBlock.className = "block normal show";},300)
        }
    }else{
        notifyUserState = 0;
    }
   
}

function userConfirm(){
    var confirmPopup = document.getElementById("confirm-select-popup");
    var playTimeIndicator = document.getElementById("play-times");
    var guideText = document.getElementById("guide-text");
    var popupContent = document.getElementById('content');
    var glowEffect = document.getElementById('glow-effect');
    let prize = document.getElementById(`prize-${selectingBlockIndex}`);

    if(notifyUserState == 0){
        if(playTimes - 1 == 0) {
            playTimeIndicator.innerHTML = playTimes - 1;
            playTimes -= 1;
            guideText.innerHTML = "Những viên kẹo còn lại biết cách giúp bạn có thêm lượt đấy"
        }
        else if (playTimes == 0){
            window.location.href = " http://m.me/lupucoffee";
        }
        else{
            playTimeIndicator.innerHTML = playTimes - 1;
            playTimes -= 1;
        }
    
        confirmPopup.className = "popup";
        prize? prize.className += " show" : "";
        setTimeout(()=>{ 
            selectingBlock.className = "block hide";
            if(prizeMapWithBlock[selectingBlockIndex] != 0){
                var selectedBlockDisplayer = document.getElementById("selected-block");
                var _selectedBlock = document.getElementById("_selectedBlock");
                var tmpDiv = document.createElement("div");
    
                tmpDiv.innerHTML = `<img 
                    src="${prizes[prizeMapWithBlock[selectingBlockIndex]].img}" 
                    alt="lupu giải thưởng"
                    width= "100%"
                    height= "100%"
                />`;
                selectedBlockDisplayer.append(tmpDiv);
                _selectedBlock.style.display = "none";
                glowEffect.className += " show";
                popupContent.innerHTML = `Chúc mừng, bạn đã nhận được ${prizes[prizeMapWithBlock[selectingBlockIndex]].name}. Bạn có muốn nhận phần quà này không?`;
                confirmPopup.className += " show";
                notifyUserState = 1;
            }else{
                var selectedBlockDisplayer = document.getElementById("selected-block");
                var _selectedBlock = document.getElementById("_selectedBlock");
                var tmpDiv = document.createElement("div");
    
                tmpDiv.innerHTML = `<img 
                    src="src/images/optimized/tinified/block-${selectingBlockIndex}-wrong.png" 
                    alt="lupu giải thưởng"
                    width= "100%"
                    height= "100%"
                />`;
                selectedBlockDisplayer.append(tmpDiv);
                _selectedBlock.style.display = "none";
                popupContent.innerHTML = `Tiếc quá, dưới viên kẹo này chẳng có gì cả. Bạn có muốn tiếp tục không?`;
                confirmPopup.className += " show";
                notifyUserState = 1;
            }
        },200)
    }else{
        hidePopup();
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

    playTimeIndicator.innerHTML = playTimes;

    for (let i = 1; i <= totalBlock; i++) {
        let randomPrize = randomNumber(precision);
        var prize =  "";
        console.log(randomPrize);
        if((typeof (prizes[randomPrize]) != "undefined") && (!prizeMapWithBlock.includes(randomPrize))){
            prize = `<img 
                id="prize-${i}"
                src="${prizes[randomPrize].img}" 
                alt="${blockDescription[i]}"
                width= "${blockSize}px"
                height= "${blockSize}px"
            />`;
            prizeMapWithBlock[i] = randomPrize;
        }else{
            prizeMapWithBlock[i] = 0;
        }

        htmlString += `
        <div
            class="block-wrapper"
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
    for(let i = 0; i < res.length; i++){
        imageLoader.setAttribute("src",res[i]);
        if(imageLoader.complete && imageLoader.naturalHeight !== 0){
            progressBar.style.width =  boardWidth*0.872*(i/res.length);
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