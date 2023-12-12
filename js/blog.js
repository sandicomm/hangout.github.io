const main = document.querySelector(".article-blog h2")
const img = document.querySelector(".article-blog img")
const side = document.querySelectorAll(".article-sidebar h2")

for(let i=0; i<side.length;i++){
   side[i].addEventListener("click", ()=>{
      let rand = Math.floor(Math.random() * (14-1) +1)
      let title = main.textContent
      main.textContent = side[i].textContent
      side[i].textContent = title
      img.src = `./assets/foto/foto${rand}.jpg`
   })
}