let viewportWidth = window.screen.width;
let viewportHeight = window.screen.height;
let image = document.getElementsByTagName('img');
let totalBlock =  9;
var allLoaded =  false;
var selectingBlock = null;
var selectingBlockIndex = 0;
var playTimes = 3;

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
        block.className = "block show selected";
        selectedBlockDisplayer.style.width = blockWidth;
        selectedBlockDisplayer.style.height = blockHeight;
        selectedBlockDisplayer.innerHTML = "";
        selectedBlockDisplayer.appendChild(displayBlockOnPopup);
        confirmPopup.className += " show";
    }else{
        displayBlockOnPopup = block.cloneNode(true);
        displayBlockOnPopup.style.transform = "scale(1)";
        displayBlockOnPopup.style.margin = "0";
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
    if(playTimes > 0){
        setTimeout(()=>{ selectingBlock.className = "block normal show";},300)
    }
}

function userConfirm(){
    var confirmPopup = document.getElementById("confirm-select-popup");
    var playTimeIndicator = document.getElementById("play-times");
    var guideText = document.getElementById("guide-text");
    let prize = document.getElementById(`prize-${selectingBlockIndex}`);

   
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
    setTimeout(()=>{ selectingBlock.className = "block hide";},200)

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

    loadingBar.style.width =  boardWidth*0.9;
    loadingBar.style.height = (boardWidth*0.9)*0.25;

    progressBar.style.width =  0;
    progressBar.style.height = (boardWidth*0.75)*0.115;

    gameBoardShadow.style.width = viewportWidth - Math.floor(boardWidth*75/375);
    gameBoardShadow.style.height = viewportWidth - Math.floor(boardWidth*75/375);
    board.style.width = viewportWidth - Math.floor(boardWidth*50/375);
    board.style.height = viewportWidth - Math.floor(boardWidth*50/375);

    
    confirmPopup.style.width = viewportWidth - Math.floor(boardWidth*50/375);
    confirmPopup.style.height = viewportWidth - Math.floor(boardWidth*50/375);
    content.style.width = boardWidth*0.6;
    content.style.height = (boardWidth*0.6)*0.5;
    cancelButton.style.width = boardWidth*0.35;
    cancelButton.style.height = (boardWidth*0.35)*0.5;
    confirmButton.style.width = boardWidth*0.35;
    confirmButton.style.height = (boardWidth*0.35)*0.5;

    playTimeIndicator.innerHTML = playTimes;

    for (let i = 1; i <= totalBlock; i++) {
        let randomPrize = randomNumber(5);
        var prize = (randomPrize != 0) ? `<img  id="prize-${i}" src="src/images/optimized/prize-${randomPrize}.png" alt="${blockDescription[i]}"/>` : "";
        htmlString += `
        <div
            class="block-wrapper"
            style="
                width:${Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375)}px;
                margin-top: ${rowCount > 0 ? Math.floor(boardWidth*10/375) + "px" : 0};
                margin-left: ${(i - (rowCount*3))%2 == 0 ? Math.floor(boardWidth*10/375) + "px" : i%3 == 0 ? Math.floor(boardWidth*10/375) +"px" : "0px"};
            "
            onClick= "blockTap(${i},${Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375)}, ${Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375)} )"
        >\n    
            ${prize}
            <div 
                class="block normal" 
                id="block-${i}" 
            > \n
                <img src="src/images/optimized/block-${i}.png" alt="${blockDescription[i]}" />
                <img src="src/images/optimized/block-${i}-right.png" alt="${blockDescription[i]}"/>
            </div> \n
        </div>    
        `;  

        if (i%3 == 0){
            var row = document.createElement("div");
            row.innerHTML = htmlString;    
            row.className = "row";
            row.style.height = `${Math.floor(boardWidth/3) - (Math.floor(boardWidth*25/375)+5)}px`;
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
    for(let i = 0; i < image.length; i++){
        if(image[i].complete && image[i].naturalHeight !== 0){
            progressBar.style.width =  boardWidth*0.872*(i/image.length);
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
  
    for(let i = 0; i < image.length; i++){
        if(image[i].complete && image[i].naturalHeight !== 0){
            allLoaded = true;
        }
        else{
            allLoaded = false;
        }   
    } 

    if(allLoaded){
        var boardShadow = document.getElementById("game-board-shadow");
        var loadingBar = document.getElementById("loading-bar");

        loadingBar.className = "loading-bar"
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
        },1300)
    }
});