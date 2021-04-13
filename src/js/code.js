var viewportWidth = window.screen.width;

function blockTap(index){
    var block = document.getElementById(`block-${index}`);
    block.className = "block";
    alert("clicked on block-" + index);
}

function boardInit (){
    var board = document.getElementById("board");
    let boardWidth = board.offsetWidth;
    let total =  9;
    var htmlString = ""
    var rowCount = 0;

    board.style.width = viewportWidth -10;
    board.style.height = viewportWidth -10;

    for (let i = 1; i <= total; i++) {
        htmlString += `
            <div 
                class="block normal" 
                id="block-${i}" 
                style="
                    width:${Math.round(boardWidth/3) - 17}px;
                    margin-top: ${rowCount > 0 ? "11px" : 0};
                    margin-left: ${(i - (rowCount*3))%2 == 0 || i%3 == 0 ? "11px" : "0px"};
                " 
                onClick="blockTap(${i})"
            > \n
                <image src="src/images/block-${i}.png" />
                <image src="src/images/block-${i}-right.png"/>
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