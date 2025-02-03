let btns = document.querySelectorAll("button");
for(let b of btns){
    b.addEventListener("click",()=>{
        console.log("button was clicked");
    });
}