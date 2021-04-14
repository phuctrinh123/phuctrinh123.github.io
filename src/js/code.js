var viewportWidth = window.screen.width;
var allLoaded =  false;
var selectingBlock = null;

function blockTap(index){
    var block = document.getElementById(`block-${index}`);
    var confirmPopup = document.getElementById("confirm-select-popup");

    selectingBlock = block;
    block.className = "block show selected";
    confirmPopup.className += " show";
    // setTimeout(()=>{block.className = "block";},400)
}

function boardInit (){
    var loadingBar = document.getElementById("loading-bar");
    var progressBar = document.getElementById("progress-bar");
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
                onClick="blockTap(${i})"
            > \n
                <img src="src/images/block-${i}.png" />
                <img src="src/images/block-${i}-right.png"/>
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

window.addEventListener("load", event => {
    var board = document.getElementById("board");
    let boardWidth = board.offsetWidth;
    let image = document.getElementsByTagName('img');
    var progressBar = document.getElementById("progress-bar");
    
    for(let i = 0; i < image.length; i++){
        if(image[i].complete && image[i].naturalHeight !== 0){
            allLoaded = true;
            progressBar.style.width =  boardWidth*0.9*(i/image.length);
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
            block.className += " show";
        }
    }
});