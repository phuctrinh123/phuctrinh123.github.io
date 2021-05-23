
var tradeButton = document.getElementsByTagName("trade-button");
var cache = 0;
var old = 0;
var stop = 1;
openPopup = ()=>{
    tradeButton[0].children[0].click();
}

stopProcess = () => {
    stop = 1;
}

startProcess = () => {
    stop = 0;
    algorithm();
}

algorithm = () =>{
    var watchNumber = parseFloat(document.getElementsByClassName("head-info-stats-value")[0].innerHTML);
    if(cache == 0){
        cache = watchNumber;
        old = watchNumber;
    }else{
        if((watchNumber >  cache)&&(watchNumber != old)){
            console.log("sell");
            cache = watchNumber;
            old = watchNumber;
        }else if((watchNumber <  cache)&&(watchNumber != old)){
            console.log("buy");
            cache = watchNumber;
            old = watchNumber;
        }
    }

    setTimeout(() => {
        if(stop != 1){
          algorithm();  
        }
    }, 0);
}


