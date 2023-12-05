let jkG=document.querySelectorAll(".jk-guide")
let txtHarga=document.querySelectorAll(".price-guide")
let harga=0

function totHargaGuide(jk){   
   
   if(jk == "L"){
       harga = 250
   }else if(jk == "P"){
       harga = 250
   }else if(jk == "Jenis"){
    harga = 0
}
}

const addGuide = document.querySelector(".add-guide")
const jk = ['Jenis','L','P']
const jkDesc = ['Jenis','Laki-Laki','Perempuan']

const guide = document.querySelector(".guide")
addGuide.addEventListener("click", (e)=>{     
    console.log("hallo")
        const tr = document.createElement("tr")
        guide.appendChild(tr)

        const td = document.createElement("td")
        td.setAttribute("colspan","3")
        tr.appendChild(td)

        const div = document.createElement("div")
        div.setAttribute("class","sewa-detail")
        td.appendChild(div)

        const select = document.createElement("select")
        select.setAttribute("class", "jk-guide")
        div.appendChild(select)

        for(let i=0;i<jk.length;i++){
            const option = document.createElement("option")
            option.setAttribute("value", jk[i])
            option.textContent = jkDesc[i]
            select.appendChild(option)
        }

        const selectLama = document.createElement("select")
        selectLama.setAttribute("class", "lamaSewa-guide")
        div.appendChild(selectLama)

        const optionLama = document.createElement("option")
        optionLama.setAttribute("value", "0")
        optionLama.textContent = "Lama Sewa"
        selectLama.appendChild(optionLama)

        for(let i=1;i<=5;i++){
            const option = document.createElement("option")
            option.setAttribute("value", `${i}`)
            option.textContent = `${i} Hari`
            selectLama.appendChild(option)
        }

        const hargaSewa = document.createElement("p")
        hargaSewa.setAttribute("class","price-guide")
        hargaSewa.textContent="0"
        div.appendChild(hargaSewa)
        e.preventDefault()
})

document.querySelector(".guide").addEventListener("click",()=>{
   for(let i=0; i<jkG.length; i++){
       jkG=document.querySelectorAll(".jk-guide")
       lamaSewa = document.querySelectorAll(".lamaSewa-guide")
       txtHarga =document.querySelectorAll(".price-guide")

       jkG[i].addEventListener("change", () =>{
           totHargaGuide(jkG[i].value)
           harga = harga * parseInt(lamaSewa[i].value)
           txtHarga[i].textContent=harga;
           // console.log(jenisMb)
           // console.log(i)      
       })   

       lamaSewa[i].addEventListener("change", ()=>{
           totHargaGuide(jkG[i].value)
           harga = harga * parseInt(lamaSewa[i].value)
           txtHarga[i].textContent=harga;
           // console.log(i)  
       })
       
     
   }
})

let price = document.querySelector(".total")
let actualPrice = document.querySelector(".actual-price")
let diskon = document.querySelector(".diskon")
let diskon_v = document.querySelector(".diskon-v")
let priceGuide = 0
let priceTotal = 0
let afterDiskon = 0
let diskonV = 0

window.addEventListener("change", ()=>{
    priceGuide =0
    for(let i=0;i<txtHarga.length;i++){
        priceGuide += parseInt(txtHarga[i].textContent)
    }
    priceTotal
    if(priceGuide > 1500){
        diskon_v.textContent = "Diskon  20%"
        diskonV = priceGuide * 0.4
        afterDiskon = priceGuide - diskonV
    }else if(priceGuide > 1000){
        diskon_v.textContent = "Diskon  15%"
        diskonV = priceGuide * 0.3
        afterDiskon = priceGuide - diskonV
    }else if(priceGuide > 700){
        diskon_v.textContent = "Diskon  10%"
        diskonV = priceGuide * 0.2
        afterDiskon = priceGuide - diskonV
    }

    price.textContent = priceGuide
    diskon.textContent = diskonV 
    actualPrice.textContent = afterDiskon 

})