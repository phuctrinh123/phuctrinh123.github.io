let viewportWidth = window.screen.width;
let viewportHeight = window.screen.height;
let image = document.getElementsByTagName('img');
var allLoaded =  false;
var selectingBlock = null;
var playTimes = 1;

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
]

function redirectToFacebook(){
    window.location.href = "https://www.facebook.com/lupucoffee";
}

function blockTap(index,blockWidth = 0, blockHeight = 0){
    var block = document.getElementById(`block-${index}`);
    var confirmPopup = document.getElementById("confirm-select-popup");
    var confirmText = document.getElementById('confirm-open-block-text');
    var selectedBlockDisplayer = document.getElementById("selected-block");
    var displayBlockOnPopup = null;

    if(playTimes > 0){
        selectingBlock = block;
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
        confirmText.style.backgroundImage = "url('src/images/optimized/confirm-order-text.png')"
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

   
    if(playTimes - 1 == 0) {
        playTimeIndicator.innerHTML = playTimes - 1;
        playTimes -= 1;
        guideText.style.backgroundImage = "url('src/images/optimized/sorry-text.png')";   
    }
    else if (playTimes == 0){
        window.location.href = " http://m.me/lupucoffee";
    }
    else{
        playTimeIndicator.innerHTML = playTimes - 1;
        playTimes -= 1;
    }

    confirmPopup.className = "popup";
    setTimeout(()=>{ selectingBlock.className = "block hide";},200)

}

function boardInit (){
    var loadingBar = document.getElementById("loading-bar");
    var progressBar = document.getElementById("progress-bar");
    var gameLogo = document.getElementById("game-logo");
    // var orderButton = document.getElementById("order-button");
    var gameBoard = document.getElementById("game-board");
    var gameBoardShadow =  document.getElementById("game-board-shadow");
    var board = document.getElementById("board");
    var confirmPopup = document.getElementById("confirm-select-popup");
    var cancelButton = document.getElementById("cancel-button");
    var confirmButton = document.getElementById("confirm-button");
    var confirmText = document.getElementById('confirm-open-block-text');
    let boardWidth = board.offsetWidth;
    let total =  9;
    var htmlString = ""
    var rowCount = 0;

    loadingBar.style.width =  boardWidth*0.9;
    loadingBar.style.height = (boardWidth*0.9)*0.25;

    progressBar.style.width =  0;
    progressBar.style.height = (boardWidth*0.75)*0.115;

    // gameLogo.style.width = viewportWidth*0.9;
    // gameLogo.style.height =  viewportHeight*0.2;
    // gameLogo.style.marginTop = viewportHeight*0.02;

    // orderButton.style.width = boardWidth*0.6;
    // orderButton.style.height = (boardWidth*0.5)*0.25;
    // orderButton.style.lineHeight = (boardWidth*0.03)*0.25;

    gameBoard.style.marginTop = (viewportHeight/2) - (((viewportWidth - Math.floor(boardWidth*50/375))/2) + gameBoard.offsetTop + 20);

    gameBoardShadow.style.width = viewportWidth - Math.floor(boardWidth*75/375);
    gameBoardShadow.style.height = viewportWidth - Math.floor(boardWidth*75/375);
    board.style.width = viewportWidth - Math.floor(boardWidth*50/375);
    board.style.height = viewportWidth - Math.floor(boardWidth*50/375);

    
    confirmPopup.style.width = viewportWidth - Math.floor(boardWidth*50/375);
    confirmPopup.style.height = viewportWidth - Math.floor(boardWidth*50/375);
    confirmText.style.width = boardWidth*0.6;
    confirmText.style.height = (boardWidth*0.6)*0.5;
    cancelButton.style.width = boardWidth*0.38;
    cancelButton.style.height = (boardWidth*0.38)*0.5;
    confirmButton.style.width = boardWidth*0.38;
    confirmButton.style.height = (boardWidth*0.38)*0.5;

    for (let i = 1; i <= total; i++) {
        htmlString += `
            <div 
                class="block normal" 
                id="block-${i}" 
                style="
                    width:${Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375)}px;
                    margin-top: ${rowCount > 0 ? Math.floor(boardWidth*10/375) + "px" : 0};
                    margin-left: ${(i - (rowCount*3))%2 == 0 ? Math.floor(boardWidth*10/375) + "px" : i%3 == 0 ? Math.floor(boardWidth*10/375) +"px" : "0px"};
                "
                onClick= "blockTap(${i},${Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375)}, ${Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375)} )"
            > \n
                <img src="src/images/optimized/block-${i}.png" alt="${blockDescription[i]}" />
                <img src="src/images/optimized/block-${i}-right.png" alt="${blockDescription[i]}"/>
            </div> \n
        `;  

        if (i%3 == 0){
            var row = document.createElement("div");
            row.innerHTML = htmlString;    
            row.className = "row";
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
        for(let i = 1; i <= image.length/2; i++){
            var block = document.getElementById(`block-${i}`);
            block.className += " show shake";
        }

        setTimeout(()=>{
            for(let i = 1; i <= image.length/2; i++){
                var block = document.getElementById(`block-${i}`);
                block.className = "block normal show";
            }
        },1300)
    }
});