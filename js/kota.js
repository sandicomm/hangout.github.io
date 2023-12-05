const select = document.querySelector(".select-kota")
const option = document.querySelectorAll(".select-kota option")
const btnCari = document.querySelector(".btn-cari")
const judul = document.querySelectorAll(".desc h1")
const link = document.querySelectorAll(".desc h1 a")
const img = document.querySelectorAll(".img img")

const judulArtikel = ["Kawah Putih", "Ciwidey", "Transtudio Bandung", 
"Bundaran HI", "Pantai Indah Kapuk", "Monas", "Puncak", "Taman Bogor", "Cafe Bogor"]
const kode = ["kp", "cw", "tb", "bh", "pik", "m", "p", "tbr", "cb"]

document.addEventListener("DOMContentLoaded", ()=>{
   const param = new URLSearchParams(window.location.search)
   const indi = param.get('kota')

   if(indi){
      setSearch(indi)
   }
})

function setSearch(indi){
   for(let i=0;i<option.length;i++){
      option[i].removeAttribute("selected")
   }
   for(let i=0;i<option.length;i++){
      if(option[i].value == indi){
         option[i].setAttribute("selected", "selected")
         kota()
      }
   }
   
}

function kota(){
   for(let i=0; i<judul.length;i++){
      if(select.value == 'bandung'){
         console.log("j")
         for(let i=0; i<3;i++){
            // let rand = Math.floor(Math.random() * (14-1) +1)
            link[i].textContent = judulArtikel[i]
            link[i].href=`produk.html?indi=${kode[i]}&title=${link[i].textContent}`
            img[i].src=`./assets/foto/foto${i+1}.jpg`
         }
      }else if(select.value == 'jakarta'){
         console.log("a")
         for(let i=0; i<3;i++){
           
            link[i].textContent = judulArtikel[i+3]
            link[i].href=`produk.html?indi=${kode[i+3]}&title=${link[i].textContent}`
            img[i].src=`./assets/foto/foto${i+3}.jpg`
         }
      }else if(select.value == 'bogor'){
         console.log("a")
         for(let i=0; i<3;i++){
           
            link[i].textContent = judulArtikel[i+6]
            link[i].href=`produk.html?indi=${kode[i+6]}&title=${link[i].textContent}`
            img[i].src=`./assets/foto/foto${i+7}.jpg`
         }
      }
   }
}

kota()

btnCari.addEventListener("click", ()=>{
   kota()
})
