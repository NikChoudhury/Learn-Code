const setOfWord = ["There is no one who loves pain itself",
"Who seeks after it and wants to have it, simply because it is pain",
"Hello World","Where can I get some?"]

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
const inputBox = document.getElementById('inputBox');
let startTime, endTime;

const playGame =()=>{
    let randomNum =Math.floor(Math.random()*setOfWord.length);
    msg.innerText = setOfWord[randomNum];    
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
 }

const endGame =()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    let totalStr = inputBox.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMsg = "You typed total at " +speed+ " Word Per Minutes ";
    finalMsg += compareWord(msg.innerText,totalStr);
    inputBox.value ="";

    msg.innerText = finalMsg;
    // console.log(speed);
}


const wordCounter =(str)=>{
    let response = str.split(" ").length;
    return response;
}

const compareWord =(display, input)=>{
    let displayWord = display.split(" ");
    let inputMsg = input.split(" ");
    let cnt = 0;
    displayWord.forEach(function(item,index) {
        if (item == inputMsg[index]) {
            cnt++;
        }
       
    });
    let errWord = (displayWord.length - cnt);
    // return(errWord)
    return (cnt +" correct out of "+displayWord.length+ " words and the total number of error are "+errWord+ " .");
}
btn.addEventListener('click',() => {
    
        if (btn.innerText == "Start") {
            inputBox.disabled = false;
            playGame();
        }else if(btn.innerText == "Done"){
            inputBox.disabled = true;
            btn.innerText = "Start";
            endGame();
        }
});

 