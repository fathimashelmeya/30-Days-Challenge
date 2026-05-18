let card = document.querySelector("#card");
let heart = document.querySelector(".heart");
let count = document.querySelector("#count");

let like = 0;

card.addEventListener("dblclick", function(){
    like++;
    count.innerText = `${like} Likes`;

    heart.classList.add("active");

    setTimeout(function(){
        heart.classList.remove("active");
    },6000)
});
