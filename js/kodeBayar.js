var countDownDate = new Date("Dec 8, 2023 23:59:00").getTime();

var myfunc = setInterval(function() {
   var now = new Date().getTime();
   var timeleft = countDownDate - now;
   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s"
   }, 1000)

document.querySelector(".kode h4").textContent = Math.floor(Math.random() * (29000-20000) +20000)

document.addEventListener("DOMContentLoaded", ()=>{
   const param = new URLSearchParams(window.location.search)
   const total = param.get('total')
   const gerai = param.get('gerai')

   if(total, gerai){
      setText(total, gerai)
   }
})

function setText(total, gerai){
   document.querySelector(".gerai h3").textContent = gerai
   document.querySelector(".total h4").textContent = total
}
