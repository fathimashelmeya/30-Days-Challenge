let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let input =document.querySelector("#input");
let text = document.querySelector("#text").innerText;
let result = document.querySelector("#result");
let started = false;

let startTime, endTime;

startBtn.addEventListener("click",function(){
    console.log("clicked");
    input.value = "";
    input.focus();
    startTime = new Date().getTime();
    
    input.placeholder =  "type Now...";
    result.innerText = "Typing started...";
});

input.addEventListener("input",function(){
    if(input.value === text){
        endTime = new Date().getTime();

        let timeTaken = (endTime - startTime) / 1000;
        let words = text.split(" ").length;
        let speed = Math.round((words/ timeTaken) * 60);

        result.innerText = `Completed! Speed: ${speed} WPM`;
    }
});

resetBtn.addEventListener("click",function(){
    input.value = "";
    result.innerText = "";
});
