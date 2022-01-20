let num=document.getElementsByClassName("first")[0].value;
let ognum=Number(num);
console.log(ognum);
const num2=document.getElementsByClassName("second")[0].value;
const ognum2=Number(num2);
console.log(ognum2);

const pluss=document.getElementsByClassName("plus")[0];
const minus=document.getElementsByClassName("minus")[0];
const divi=document.getElementsByClassName("division")[0];
const mode=document.getElementsByClassName("mode")[0];

const anss=document.getElementsByClassName("ans")[0];

pluss.addEventListener('click',()=>{

let results=ognum+ognum2;
console.log(results)
console.log("working");
document.getElementsByClassName("ans")[0].innerText=results;


})