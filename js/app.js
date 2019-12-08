const analyzeBtn = document.querySelector(".analyzeBtn");
const list = document.querySelector(".warningList");
const iframe=document.querySelector(".iframe");
const pageMessage=document.querySelector(".pageMessage");
iframe.style.display="none";

analyzeBtn.addEventListener("click",analyzeFile);

function analyzeFile(){
    iframe.src="test/test.html";
    iframe.style.display="block";
    pageMessage.innerHTML="Your Page Looks like!";
    console.log(iframe.childNodes)
}