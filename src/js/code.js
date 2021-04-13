var viewportWidth = window.screen.width;
var allLoaded =  false;

function blockTap(index){
    var block = document.getElementById(`block-${index}`);
    block.className = "block";
}

function boardInit (){
    var board = document.getElementById("board");
    let boardWidth = board.offsetWidth;
    let total =  9;
    var htmlString = ""
    var rowCount = 0;

    board.style.width = viewportWidth - Math.floor(boardWidth*50/375);
    board.style.height = viewportWidth - Math.floor(boardWidth*50/375);

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
    var image = document.getElementsByTagName('img');
    for(let i = 0; i < image.length; i++){
        if(image[i].complete && image[i].naturalHeight !== 0){
            allLoaded = true;
        }
        else{
            allLoaded = false;
        }   
    } 

    if(allLoaded){
        var board = document.getElementById("board");
        board.className += " show"
        for(let i = 1; i <= image.length/2; i++){
            var block = document.getElementById(`block-${i}`);
            block.className += " show";
        }
    }
});