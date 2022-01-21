const score=document.querySelector(".score span");
const holes=document.querySelectorAll(".hole");
const playBtn=document.querySelector(".buttons .play");
const stopBtn=document.querySelector(".buttons .stop");
const cursor=document.querySelector(".cursor img");


window.addEventListener("mousemove",(e) =>{

    cursor.style.top=e.pageY+"px";
    cursor.style.left=e.pageX+"px";

    window.addEventListener("click",() =>{
    cursor.style.animation="hit 0.1s ease";
    setTimeout(()=>{   cursor.style.removeProperty("animation");
            },100 );
        });
});
playBtn.addEventListener("click", () => {
    console.log("working");
    playBtn.style.display = 'none';
    stopBtn.style.display="inline-block";
});