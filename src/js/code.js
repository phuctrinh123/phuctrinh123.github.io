//resource defining
const resource = [
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
    "src/images/optimized/tinified/product-2.png",
]
// end

// quick code
function byID(name = "" ){
    return document.getElementById(name);
}

//quick code

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let isMobile = window.screen.width < 500 ? true : false;
let viewportWidth =  isMobile ? screenWidth: 320 ;
var body = document.body;
body.style.fontSize = Math.round(isMobile ==  true ? screenWidth*13/320 : 13) + "px";

let image = document.getElementsByTagName('img');
let totalBlock = 9;
let prizes = {
    1: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "May quá dưới viên kẹo này chỉ có 1k thôi bạn ơi!", value:1},
    2: {img: "src/images/optimized/tinified/prize-1.png", type:"many", name: "May quá dưới viên kẹo này chỉ có 5k thôi bạn ơi!", value:5},
    3: {img: "src/images/optimized/tinified/prize-13.png", type:"many", name: "May quá dưới viên kẹo này chỉ có 10k thôi bạn ơi!", value:10},
    4: {img: "src/images/optimized/tinified/prize-2.png", type:"many", name: "Ồ dưới viên kẹo này có 25k nà!", value:25},
    5: {img: "src/images/optimized/tinified/prize-3.png", type:"many", name: "Hmm, dưới viên kẹo này có 50k. Hơi tiếc nhỉ!", value:50},
    6: {img: "src/images/optimized/tinified/prize-4.png", type:"many", name: "Oops! Dưới viên kẹo này là 100k. Hụt rồi!", value:100},
    7: {img: "src/images/optimized/tinified/prize-14.png", type:"many", name: "Ối, viên kẹo này có giá 200k đấy bạn ơi!", value:200},
    8: {img: "src/images/optimized/tinified/prize-15.png", type:"many", name: "Hu hu, 300k đã bay màu!", value:300},
    9: {img: "src/images/optimized/tinified/prize-16.png", type:"many", name: "Thôi xong, 400k đã không cánh mà bay.", value:400},
}
// let prizes = {

//     1 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     2 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     3 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     4 : {img: "src/images/optimized/tinified/prize-12.png", type:"sale", name: "Bạn được voucher giảm 10%. Bạn có muốn nhận nó không?"},

//     12 : {img: "src/images/optimized/tinified/prize-1.png", type:"money", name: "Dưới viện kẹo này là 5k. Bạn có muốn nhận nó không?"},
//     13 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     14: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     15 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     23 : {img: "src/images/optimized/tinified/prize-8.png", type:"sale", name: "Bạn được voucher giảm 20%. Bạn có muốn nhận nó không?"},
//     24 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     25: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     26 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     34 : {img: "src/images/optimized/tinified/prize-13.png", type:"money", name: "Dưới viên kẹo này là 10k. Bạn có muốn nhận nó không?"},
//     35 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     36: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     37 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     45 : {img: "src/images/optimized/tinified/prize-12.png", type:"sale", name: "Bạn được voucher giảm 10%. Bạn có muốn nhận nó không?"},
//     46 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     47: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     48 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     56 : {img: "src/images/optimized/tinified/prize-5.png", type:"material", name: "Bạn được tặng thêm 1 ly khi mua từ 2 ly. Bạn có muốn nhận nó không?"},
//     57 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     58: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     59 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     67 : {img: "src/images/optimized/tinified/prize-6.png", type:"material", name: "Bạn được tặng 1 chiếc áo thun LUPU. Bạn có muốn nhận nó không?"},
//     68 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     69: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     70 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     78 : {img: "src/images/optimized/tinified/prize-2.png", type:"money", name: "Dưới viên kẹo này là 25k. Bạn có muốn nhận nó không?"},
//     79 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     80: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     81 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     89 : {img: "src/images/optimized/tinified/prize-9.png", type:"sale", name: "Bạn được giảm 30%. Bạn có muốn nhận nó không?"},
//     90 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     91: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     92 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     100 : {img: "src/images/optimized/tinified/prize-3.png", type:"money", name: "Dưới viên kẹo này là 50k. Bạn có muốn nhận nó không?"},
//     101 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     102: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     103 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     111 : {img: "src/images/optimized/tinified/prize-10.png", type:"sale", name: "Bạn được giảm 40%. Bạn có muốn nhận nó không?"},
//     112 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     113: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     114 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     122 : {img: "src/images/optimized/tinified/prize-7.png", type:"sale", name: "Bạn được giảm 50%. Bạn có muốn nhận nó không?"},
//     123 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     124: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     125 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},

//     133 : {img: "src/images/optimized/tinified/prize-4.png", type:"money", name: "Dưới viên kẹo này là 100k. Bạn có muốn nhận nó không?"},
//     134 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     135: {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
//     136 : {img: "src/images/optimized/tinified/prize-11.png", type:"many", name: "Dưới viên kẹo này là 1k. Bạn có muốn nhận nó không?"},
// }
let prizeMapWithBlock = [0];
// var openedBlock = [];
var allLoaded =  false;
// var selectingBlock = null;
// var selectingBlockIndex = 0;
let playTimes = 6;
// let precision = 10;
// let round2PlayTime = 1;
// var notifyUserState = 0;
var shareFacebook = 0;
var clickOnPlay = 0;

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

// function shufflePrize(){
//     let randomPrize = randomNumber(precision);
//     if(prizeMapWithBlock.length != Object.keys(prizes).length + 1){
//         if(!prizeMapWithBlock.includes(randomPrize) && (randomPrize != 0)){
//             prizeMapWithBlock.push(randomPrize);
//         }
//     }else{
//         clearInterval(generatePrizeMap);
//         boardInit();
//     }
// }

// let generatePrizeMap = setInterval(() => {
//     shufflePrize();
//     // console.log(Object.keys(prizes).length );
//     // console.log(prizeMapWithBlock);
// }, 0);


// function hideBUP(callback = null, delay = null){
//     var bup = byID("before-u-play");
//     bup.className = "before-u-play";
//     if(callback){
//       if(delay){
//           setTimeout(() => {
//             callback();
//           }, delay);
//       }else{
//         callback();
//       }
       
//     }
// }

function playGame(){
    var menu = byID("game-menu");
    var board = byID("game-board");
    // var playTimeIndicator = byID("play-times-indicator");
    // var guideText = byID("guide-text");
    menu.className += " hide";
    board.className += " show";
    // guideText.className += " show";
    // playTimeIndicator.className += " show";
    clickOnPlay = 1;
    setTimeout(function(){
        menu.style.zIndex = -1000;
        // setTimeout(()=>{
        //     let beforeUPlay = byID("before-u-play");
        //     beforeUPlay.className += " show";
        // }, 500);
    },200)
}

function shareFacebookClick(){
    var popup = byID("confirm-select-popup");
    var popupBlockDisplayer = byID("selected-block");
    var popupContent = byID('content');
    var popupConfirmButton = byID("confirm-button");
    var playTimeIndicator = byID("play-times");
    FB.ui({
        method: 'share',
        href: 'http://lupucoffee.com/',
      }, function(response){
        let blockContainer = document.createElement("div");
        shareFacebook = 1;
        // popup.className = "popup";
        blockContainer.className = "block show selected";
        blockContainer.innerHTML = `<img 
            src="src/images/optimized/tinified/add-plays.png" 
            alt="lupu giải thưởng"
            width= "100%"
            height= "100%"
            style="height: 100% !important; width:100% !important;"
        />`;
        popupContent.innerHTML = "Bạn vừa nhận thêm một lượt chơi từ việc chia sẻ facebook, mở kẹo tiếp thôi";
        popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/continue-button.png")`;
        popupConfirmButton.setAttribute("onclick", "userConfirm()");
        popupBlockDisplayer.innerHTML = "";
        popupBlockDisplayer.append(blockContainer);
        playTimes = 1;
        playTimeIndicator.innerHTML = playTimes;
        console.log("click on share");
      });  
}
  

function redirectToFacebook(){
    window.location.href = "https://www.facebook.com/lupucoffee";
}

// function hideAllPrize(){
//     for(let i = 0; i< openedBlock.length; i++){
//         let prizeElem = byID(`prize-${openedBlock[i]}`);
//         prizeElem.className = "";
//     }
//     setTimeout(() => {
//         let beforeUPlay = byID("before-u-play");
//         let bupTitle = byID("bup-title");
//         let bupText = byID("bup-text");
//         let bupButton = byID("bup-agree-button");
//         let round1Content = byID("round1-content");
//         let round2Content = byID("round2-content");
//         let round2PlayTimeIndicator = byID("round2-play-times");
//         bupTitle.innerHTML = "Vòng 2";
//         bupText.innerHTML = `LUPU sẽ giữ lại viên kẹo có giá trị cao nhất, 2 viên còn lại sẽ không có gì. Giá trị của ba viên này sẽ bị hoán đổi cho nhau. Bạn chỉ được chọn 1 viên trong 3 viên này. Chúc bạn may mắn.`;
//         bupButton.setAttribute("onclick","hideBUP(showAllPrize,1000)");
//         round2PlayTimeIndicator.innerHTML = round2PlayTime;
//         beforeUPlay.className += " show";
//         round1Content.className = "";
//         round2Content.className += "show";

//     }, 1000);
    
// }

// function showAllPrize(){
//     let maxValue = 0;
//     let maxBlockIndex = null;
//     for(let i = 1; i <= totalBlock; i++){
//         if(!openedBlock.includes(i)){
//             let prize = byID(`prize-${i}`);
//             if(parseInt(prize.getAttribute("data-value")) > maxValue){
//                 console.log(prize.getAttribute("data-value"));
//                 maxValue = prize.getAttribute("data-value");
//                 maxBlockIndex = i;
//             }
//         }
//     }
//     let prize = byID(`prize-${maxBlockIndex}`);
//     let block = byID(`block-${maxBlockIndex}`);
//     block.className = "block hide";
//     prize.className += " show";

//     setTimeout(() => {
//         block.className = "block show";
//     prize.className = "";
//     }, 1500);

// }

// function blockTap(index,blockWidth = 0, blockHeight = 0){
//     var block = byID(`block-${index}`);
//     var popup = byID("confirm-select-popup");
//     var popupContent = byID('content');
//     var popupBlockDisplayer = byID("selected-block"); // => display the selected block on popup
//     var popupCancelButton = byID("cancel-button");
//     var popupConfirmButton = byID("confirm-button");
//     var playTimeIndicator = byID("play-times");
//     // console.log(playTimes);
//     if(playTimes > 0){
//         let clonedBlock = block.cloneNode(true);
//         selectingBlock = block;
//         selectingBlockIndex = index;
//         block.className = "block show selected";
//         selectingBlock.className = "block hide";
//         clonedBlock.className = "block show selected";
//         clonedBlock.id = "_selectedBlock";
//         clonedBlock.style.margin = "0";
//         clonedBlock.style.transform = "scale(1)";
//         popupBlockDisplayer.innerHTML = '<div class="glow-effect" id="glow-effect"></div>';
//         popupBlockDisplayer.style.height = blockHeight;
//         popupBlockDisplayer.style.width = blockWidth;
//         popupBlockDisplayer.appendChild(clonedBlock);

//         if(prizeMapWithBlock[selectingBlockIndex] != 0){
//             var blockDisplayedInDisplayer = byID("_selectedBlock");
//             var glowEffect = byID("glow-effect");
//             let prize = byID(`prize-${selectingBlockIndex}`); //prize in the selected block
//             let prizeContainer = document.createElement("div");

//             prizeContainer.innerHTML = `<img 
//                 src="${prizes[prizeMapWithBlock[selectingBlockIndex]].img}" 
//                 alt="lupu giải thưởng"
//                 width= "100%"
//                 height= "100%"
//             />`;
//             popupBlockDisplayer.append(prizeContainer);
//             blockDisplayedInDisplayer .style.display = "none";
//             glowEffect.className += " show";
//             prize? prize.className += "show" : "";
//             popupContent.innerHTML = `${prizes[prizeMapWithBlock[selectingBlockIndex]].name}`;
//             // popupCancelButton.style.display = "block";
//             // popupConfirmButton. style.backgroundImage = `url("src/images/optimized/tinified/confirm-button.png")`;
//             // popupConfirmButton.style.right = "10%";
//             // popupConfirmButton.setAttribute("onclick", "userConfirm()");
//             popupCancelButton.style.display = "none";
//             popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/continue-button.png")`;
//             popupConfirmButton.style.right = "30%";
//             popupConfirmButton.setAttribute("onclick", "userConfirm()");
//             popup.className += " show";
//             notifyUserState = 1;
//             playTimeIndicator.innerHTML = playTimes > 0 ? playTimes - 1 : 0;
//             playTimes -= 1;
//             openedBlock.push(index);
//             if(playTimes == 0){
//                 setTimeout(() => {
//                     hideAllPrize();
//                 }, 1500);
//             }

//         }else{
//             let blockDisplayedInDisplayer = byID("_selectedBlock");
//             let blockContainer = document.createElement("div");
//             blockContainer.className = "block show selected";
//             blockContainer.innerHTML =  `<img 
//                 src="src/images/optimized/tinified/block-${selectingBlockIndex}-wrong.png" 
//                 alt="lupu giải thưởng"
//                 width= "100%"
//                 height= "100%"
//                 style="height: 100% !important; width:100% !important;"
//             />`;
//             popupBlockDisplayer.append(blockContainer);
//             blockDisplayedInDisplayer.style.display = "none";
//             popupContent.innerHTML = `Tiếc quá, dưới viên kẹo này chẳng có gì cả. Bạn có muốn tiếp tục không?`;
//             popupCancelButton.style.display = "none";
//             popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/continue-button.png")`;
//             popupConfirmButton.style.right = "30%";
//             popupConfirmButton.setAttribute("onclick", "userConfirm()");
//             popup.className += " show";
//             notifyUserState = 1;
//             playTimeIndicator.innerHTML = playTimes > 0 ? playTimes - 1 : 0;
//             playTimes -= 1;
//         }
//     }else{
//         let blockContainer = document.createElement("div");
//         blockContainer.className = "block show selected";
       
//         // if(shareFacebook != 0){
//             blockContainer.innerHTML = `<img 
//                 src="src/images/optimized/tinified/block-${index}.png" 
//                 alt="lupu giải thưởng"
//                 width= "100%"
//                 height= "100%"
//                 style="height: 100% !important; width:100% !important;"
//             />`;
//             popupContent.innerHTML = "Bạn có muốn thử 1 ly trà mật rừng hoặc phin sữa nâu không để mở viên kẹo này không?"
//             popupCancelButton.style.display = "block";
//             popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/confirm-button.png")`;
//             popupConfirmButton.style.right = "10%";
//             popupConfirmButton.setAttribute("onclick", "userConfirm()");
//         // }
//         // else{
//             // blockContainer.innerHTML = `<img 
//             //     src="src/images/optimized/tinified/more-plays.png" 
//             //     alt="lupu giải thưởng"
//             //     width= "100%"
//             //     height= "100%"
//             //     style="height: 100% !important; width:100% !important;"
//             // />`;
//             // popupContent.innerHTML = `Nhấn vào nút share bên dưới để nhận thêm lượt chơi. 100k đang chờ đợi bạn.`
//             // popupCancelButton.style.display = "none";
//             // popupConfirmButton.style.backgroundImage = `url("src/images/optimized/tinified/share-button.png")`;
//             // popupConfirmButton.style.right = "30%";
//             // popupConfirmButton.setAttribute("onclick", "shareFacebookClick()");

//         // }
//         popupBlockDisplayer.innerHTML = "";
//         popupBlockDisplayer.append(blockContainer);
//         popup.className += " show";
//         playTimeIndicator.innerHTML = 0;
//         playTimes -= 1;
//     }
// }

// function hidePopup(){
//     var confirmPopup = byID("confirm-select-popup");
//     var guideText = byID("guide-text");
//     let prize = byID(`prize-${selectingBlockIndex}`);
//     confirmPopup.className = "popup";
//     if(notifyUserState == 0){
//         if(playTimes > 0){
//             setTimeout(()=>{ selectingBlock.className = "block normal show";},300)
//         }
//     }else{
//         if(playTimes == 0) {
//             guideText.innerHTML = "Những viên kẹo còn lại biết cách giúp bạn có thêm lượt đấy"
//         }else if (playTimes > 0){
//             if (prize) {
//                 prize.className = "";
//                 selectingBlock.className = "block normal show";
//             }
//         }
//         notifyUserState = 0;
//     }
   
// }

function returnToBoard(){
    var orderScreen = byID("order-screen");
    var mainScreen = byID("main-screen");

    orderScreen.className = "order-screen";
    mainScreen.style.filter = "none";
}

// function userConfirm(){
//     var confirmPopup = document.getElementById("confirm-select-popup");
//     var guideText = document.getElementById("guide-text");
//     let block = byID("block-wrapper-"+selectingBlockIndex);
//     var orderScreen = byID("order-screen");
//     var mainScreen = byID("main-screen");
//     var tooltip = byID("tooltips");

//     if(playTimes > -1){
//         if(playTimes == 0) {
//             guideText.innerHTML = "Chọn một trong 3 viên kẹo đã bị tráo đổi giá trị";
//         }
//         block.setAttribute("onClick","");
//         confirmPopup.className = "popup";
//     }  else if (playTimes < 0){
//         confirmPopup.className = "popup";
//         orderScreen.className += " show";
//         mainScreen.style.filter = "blur(5px)";
//         setTimeout(function(){
//             tooltip.style.display = "none";
//         },1500);

//         // window.location.href = " http://m.me/lupucoffee";
//     }
// }

function boardInit (){
    var app = byID("app");
    var loadingBar = document.getElementById("loading-bar");
    var progressBar = document.getElementById("progress-bar");
    var menu = byID("game-menu");
    var gameBoardShadow =  document.getElementById("game-board-shadow");
    var board = document.getElementById("board");
    var playTimeIndicator = document.getElementById("play-times");
    var confirmPopup = document.getElementById("confirm-select-popup");
    var cancelButton = document.getElementById("cancel-button");
    var confirmButton = document.getElementById("confirm-button");
    var content = document.getElementById('content');
    var orderPopup = byID("order-popup");
    let boardWidth = /*board.offsetWidth;*/ viewportWidth;
    var htmlString = ""
    var rowCount = 0;
  

    //optimize for calculating
    let boardShadowSize = boardWidth - Math.floor(boardWidth*75/375);
    let boardSize = boardWidth - Math.floor(boardWidth*50/375);
    let blockSize = Math.floor(boardWidth/3) - Math.floor(boardWidth*25/375);
    let popupButtonSizeW = boardWidth*0.35;
    let popupButtonSizeH = (boardWidth*0.35)*0.5;

    app.style.width = boardWidth;
    app.style.height = isMobile ? "100%" : "568px";

    loadingBar.style.width =  boardWidth*0.9;
    loadingBar.style.height = (boardWidth*0.9)*0.25;

    progressBar.style.width =  0;
    progressBar.style.height = (boardWidth*0.75)*0.115;

    menu.style.width = boardShadowSize;
    menu.style.height = boardShadowSize *1.5;
    menu.style.marginTop= boardShadowSize/4;

    // gameBoardShadow.style.width = boardShadowSize;
    // gameBoardShadow.style.height = boardShadowSize;
    // board.style.width = boardSize;
    // board.style.height = boardSize;

    
    confirmPopup.style.width = boardSize;
    confirmPopup.style.height = boardSize;
    content.style.width = boardWidth*0.65;
    content.style.height = (boardWidth*0.65)*0.5;
    cancelButton.style.width = popupButtonSizeW;
    cancelButton.style.height = popupButtonSizeH;
    confirmButton.style.width = popupButtonSizeW;
    confirmButton.style.height = popupButtonSizeH;

    orderPopup.style.width = boardWidth;
    orderPopup.style.height = boardWidth/0.8333;

    playTimeIndicator.innerHTML = playTimes;

    // for (let i = 1; i <= totalBlock; i++) {
    //     // let randomPrize = randomNumber(precision);
    //     var prize =  "";
    //     // console.log(randomPrize);
    //     // if((typeof (prizes[randomPrize]) != "undefined") && (!prizeMapWithBlock.includes(randomPrize))){  
    //         // if(prizes[randomPrize].type == "money"){
    //         //     if(moneyPrizeApplied != 1){
    //         //         prize = `<img 
    //         //             id="prize-${i}"
    //         //             src="${prizes[randomPrize].img}" 
    //         //             alt="${blockDescription[i]}"
    //         //             width= "${blockSize}px"
    //         //             height= "${blockSize}px"
    //         //         />`;
    //         //         prizeMapWithBlock[i] = randomPrize;
    //         //         moneyPrizeApplied = 1;
    //         //     }
    //         //     else{
    //         //         prizeMapWithBlock[i] = 0; 
    //         //     }
    //         // }
    //         // else if(prizes[randomPrize].type == "material"){
    //         //     if(materialPrizeApplied != 1){
    //         //         prize = `<img 
    //         //             id="prize-${i}"
    //         //             src="${prizes[randomPrize].img}" 
    //         //             alt="${blockDescription[i]}"
    //         //             width= "${blockSize}px"
    //         //             height= "${blockSize}px"
    //         //         />`;
    //         //         prizeMapWithBlock[i] = randomPrize;
    //         //         materialPrizeApplied = 1;
    //         //     }
    //         //     else{
    //         //         prizeMapWithBlock[i] = 0; 
    //         //     }
    //         // }
    //         // else if(prizes[randomPrize].type == "sale"){
    //         //     if(salePrizeApplied != 1){
    //         //         prize = `<img 
    //         //             id="prize-${i}"
    //         //             src="${prizes[randomPrize].img}" 
    //         //             alt="${blockDescription[i]}"
    //         //             width= "${blockSize}px"
    //         //             height= "${blockSize}px"
    //         //         />`;
    //         //         prizeMapWithBlock[i] = randomPrize;
    //         //         salePrizeApplied = 1;
    //         //     }
    //         //     else{
    //         //         prizeMapWithBlock[i] = 0; 
    //         //     }
    //         // }
    //         // else{
    //             // console.log("loop:"+i);
    //             // console.log(prizeMapWithBlock);
    //             // console.log("--");
    //             prize = `<img 
    //                 id="prize-${i}"
    //                 src="${prizes[prizeMapWithBlock[i]].img}" 
    //                 data-value="${prizes[prizeMapWithBlock[i]].value}"
    //                 alt="${blockDescription[i]}"
    //                 width= "${blockSize}px"
    //                 height= "${blockSize}px"
    //             />`;
    //             // prizeMapWithBlock[i] = randomPrize;
    //         // }
           
    //     // }else{
    //     //     prizeMapWithBlock[i] = 0;
    //     // }

    //     htmlString += `
    //     <div
    //         class="block-wrapper"
    //         id = "block-wrapper-${i}"
    //         style="
    //             width:${blockSize}px;
    //             height: ${blockSize}px;
    //             margin-top: ${/*rowCount > 0 ? Math.floor(boardWidth*10/375) + "px" : 0*/ ""};
    //             margin-left: ${(i - (rowCount*3))%2 == 0 ? Math.floor(boardWidth*10/375) + "px" : i%3 == 0 ? Math.floor(boardWidth*10/375) +"px" : "0px"};
    //         "
    //         onClick= "blockTap(${i},${blockSize}, ${blockSize} )"
    //     >\n    
    //         ${prize}
    //         <div 
    //             class="block normal" 
    //             id="block-${i}" 
    //         > \n
    //             <img 
    //                 src="src/images/optimized/tinified/block-${i}.png" 
    //                 alt="${blockDescription[i]}"
    //                 width= "${blockSize}px"
    //                 height= "${blockSize}px"
    //              />
    //             <img 
    //                 src="src/images/optimized/tinified/block-${i}-right.png" 
    //                 alt="${blockDescription[i]}"
    //                 width= "${blockSize}px"
    //                 height= "${blockSize}px"
    //             />
    //         </div> \n
    //     </div>    
    //     `;  

    //     if (i%3 == 0){
    //         var row = document.createElement("div");
    //         row.innerHTML = htmlString;    
    //         row.className = "row";
    //         if(rowCount == 0){row.style.marginTop = (boardWidth*(-3))/375; }
    //         board.append(row);  
    //         htmlString = "";
    //         rowCount += 1;
    //     }        
    // }
}

// shufflePrize();

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
    if(allLoaded == true){
        var board = document.getElementById("board");
        var loadingScreen = document.getElementById("loading-screen");
        // var boardShadow = document.getElementById("game-board-shadow");
        guideText.className = "guide-text";
        playTimesIndicator.className = "play-times-indicator";
        loadingScreen.className = "loading-screen";
        board.className += " show";
        loadingScreen.style.display = "none";
        // boardShadow.className += " show";
        // for(let i = 1; i <= totalBlock; i++){
        //     var block = document.getElementById(`block-${i}`);
        //     block.className += " show shake";
        // }
        // setTimeout(()=>{
        //     for(let i = 1; i <= totalBlock; i++){
        //         var block = document.getElementById(`block-${i}`);
        //         block.className = "block normal show";
        //     }
        //     loadingScreen.style.display = "none";
        // },1300)
    }
});

