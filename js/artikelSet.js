const rate = ["7.5", "8.5", "9.0", "8.3", "7.5", "8.5", "9.0", "8.0", "7.5", "8.0",
 "9.0", "8.4", "8.5", "9.3", "7.8"]
const kode = ["ab","kp","jm","kt","tkt","tkb","cw", "tb", "bh", "pik", "m", "p", "tbr", "cb"]
const desc = ["Alun-alun bogor tempat yang paling banyak dikunjugi.....", 
"Kawah Putih tempat yang cukup terkenal dikalangan anak muda bandung", 
"Jl.Malioboro sangat digandrungi para anak muda", "Kota Tua tempat yang sangat bersejarah", 
"Tempat yang cocok untuk kumpul bareng keluarga", "Kota Hujan yang cocok untuk pasangan dan menggalau",
"Ciwidey tempat yang sedang naik daun saat ini", "tempat hiburan yang banyak dikunjungi gen-Z",
"Tempat Yang cukup iconic", "Tempat berkumpulnya para chindo hehe", "Tempat iconic jakarta",
"tempat yang menjadi lahan uang penjual nanas muda", "Kota Hujan Cocok untuk menggalau",
"sangat recomen sambil minum coklat panas"]


document.addEventListener("DOMContentLoaded", ()=>{
   const param = new URLSearchParams(window.location.search)
   const indi = param.get('indi')
   const title = param.get('title')

   if(indi, title){
      setArtikel(indi, title)
   }
})

function setArtikel(indi, title){
   let a;
   for(let i=0; i<kode.length; i++){
      if(indi == kode[i]){
         a=i
      }
   }
   // if(indi == 'ab'){
   //    a=0
   // }else if(indi == 'kp'){
   //    a=1
   // }else if(indi == 'jm'){
   //    a=2
   // }else if(indi == 'kt'){
   //    a=3
   // }else if(indi == 'tkt'){
   //    a=4
   // }else if(indi == 'tkb'){
   //    a=5
   // }else if(indi == 'cw'){
   //    a=6
   // }else if(indi == 'tb'){
   //    a=7
   // }else if(indi == 'tb'){
   //    a=7
   // }

   const titleE = document.querySelector(".title")
   const rateE = document.querySelector(".rate")
   const descE = document.querySelector(".sub-desc")
   const hImage = document.querySelector(".h-img")
   const Image = document.querySelectorAll(".gallery-wrapper img")

   for(let i=0; i<Image.length;i++){
      Image[i].src = `./assets/foto/foto${a+1+i}.jpg`
   }
   hImage.src = `./assets/foto/foto${a+1}.jpg`
   titleE.textContent = title
   rateE.textContent = rate[a]
   descE.textContent = desc[a]
}


  

