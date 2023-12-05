let jenisMt=document.querySelectorAll(".jenis-mt")
let qty = document.querySelectorAll(".qty-mt")
let lamaMt = document.querySelectorAll(".lama-sewa-mt")
let txtHarga=document.querySelectorAll(".price-mt")
let harga=0

function totHargaSewaMtr(jenis){   
   
    if(jenis == "Beat"){
        harga = 50
    }else if(jenis == "Mio"){
        harga = 75
    }else if(jenis == "Supra"){
        harga = 100
    }else if(jenis == "Nmax"){
        harga = 125
    }else if(jenis == "Aerox"){
        harga = 110
    }else if(jenis == "Jenis"){
        harga=0
    }
}

function totHargaSewaMbl(jenis){   
   
    if(jenis == "Avanza"){
        harga = 170
    }else if(jenis == "Brio"){
        harga = 225
    }else if(jenis == "Pajero"){
        harga = 300
    }else if(jenis == "Fortuner"){
        harga = 425
    }else if(jenis == "Kijang"){
        harga = 250
    }else if(jenis == "Jenis"){
        harga=0
    }
}



const add = document.querySelector(".add-mtr")
const jenisMtr = ["Jenis","Beat","Mio","Supra","Nmax","Aerox"]

const motor = document.querySelector(".motor")
add.addEventListener("click", (e)=>{     
        const tr = document.createElement("tr")
        motor.appendChild(tr)

        const td = document.createElement("td")
        td.setAttribute("colspan","3")
        tr.appendChild(td)

        const div = document.createElement("div")
        div.setAttribute("class","sewa-detail")
        td.appendChild(div)

        const select = document.createElement("select")
        select.setAttribute("class", "jenis-mt")
        div.appendChild(select)

        for(let i=0;i<jenisMtr.length;i++){
            const option = document.createElement("option")
            option.setAttribute("value", jenisMtr[i])
            option.textContent = jenisMtr[i]
            select.appendChild(option)
        }

        const selectLama = document.createElement("select")
        selectLama.setAttribute("class", "lama-sewa-mt")
        div.appendChild(selectLama)

        const optionLama = document.createElement("option")
        optionLama.setAttribute("value", "0")
        optionLama.textContent = "Lama Sewa"
        selectLama.appendChild(optionLama)

        for(let i=1;i<=3;i++){
            const option = document.createElement("option")
            option.setAttribute("value", `${i}`)
            option.textContent = `${i} Hari`
            selectLama.appendChild(option)
        }

        const selectQty = document.createElement("select")
        selectQty.setAttribute("class", "qty-mt")
        div.appendChild(selectQty)

        const option = document.createElement("option")
        option.setAttribute("value", "0")
        option.textContent = "Qty"
        selectQty.appendChild(option)

        for(let i=1;i<=5;i++){
            const option = document.createElement("option")
            option.setAttribute("value", `${i}`)
            option.textContent = `${i}`
            selectQty.appendChild(option)
        }

        const hargaBrg = document.createElement("p")
        hargaBrg.setAttribute("class","price-mt")
        hargaBrg.textContent="harga"
        div.appendChild(hargaBrg)
        e.preventDefault()
})

document.querySelector(".motor").addEventListener("click",()=>{
    for(let i=0; i<jenisMt.length; i++){
        jenisMt=document.querySelectorAll(".jenis-mt")
        qty = document.querySelectorAll(".qty-mt")
        lamaMt = document.querySelectorAll(".lama-sewa-mt")
        txtHarga=document.querySelectorAll(".price-mt")

        jenisMt[i].addEventListener("change", () =>{
            totHargaSewaMtr(jenisMt[i].value)
            harga = harga * parseInt(qty[i].value) * parseInt(lamaMt[i].value) 
            txtHarga[i].textContent=harga;
            // console.log(jenisMt)
            // console.log(i)  
        })   

        qty[i].addEventListener("change", ()=>{
            totHargaSewaMtr(jenisMt[i].value)
            harga = harga * parseInt(qty[i].value) * parseInt(lamaMt[i].value)
            txtHarga[i].textContent=harga;
            // console.log(i)  
        })
        
        lamaMt[i].addEventListener("change", ()=>{
            totHargaSewaMtr(jenisMt[i].value)
            harga = harga * parseInt(qty[i].value) * parseInt(lamaMt[i].value)
            txtHarga[i].textContent=harga;
            console.log("lama")  
        })
    }
})

let jenisMb=document.querySelectorAll(".jenis-mt")
let qtymb = document.querySelectorAll(".qty-mt")
let lamaMb = document.querySelectorAll(".lama-sewa-mb")
let txtHargamb=document.querySelectorAll(".price-mb")

const addMbl = document.querySelector(".add-mbl")
const jenisMbl = ["Jenis","Avanza","Brio","Pajero","Fortuner","Kijang"]

const mobil = document.querySelector(".mobil")
addMbl.addEventListener("click", (e)=>{     
        const tr = document.createElement("tr")
        mobil.appendChild(tr)

        const td = document.createElement("td")
        td.setAttribute("colspan","3")
        tr.appendChild(td)

        const div = document.createElement("div")
        div.setAttribute("class","sewa-detail")
        td.appendChild(div)

        const select = document.createElement("select")
        select.setAttribute("class", "jenis-mb")
        div.appendChild(select)

        for(let i=0;i<jenisMbl.length;i++){
            const option = document.createElement("option")
            option.setAttribute("value", jenisMbl[i])
            option.textContent = jenisMbl[i]
            select.appendChild(option)
        }

        const selectLama = document.createElement("select")
        selectLama.setAttribute("class", "lama-sewa-mb")
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

        const selectQty = document.createElement("select")
        selectQty.setAttribute("class", "qty-mb")
        div.appendChild(selectQty)

        const option = document.createElement("option")
        option.setAttribute("value", "0")
        option.textContent = "Qty"
        selectQty.appendChild(option)

        for(let i=1;i<=5;i++){
            const option = document.createElement("option")
            option.setAttribute("value", `${i}`)
            option.textContent = `${i}`
            selectQty.appendChild(option)
        }

        const hargaBrg = document.createElement("p")
        hargaBrg.setAttribute("class","price-mb")
        hargaBrg.textContent="harga"
        div.appendChild(hargaBrg)
        e.preventDefault()
})

document.querySelector(".mobil").addEventListener("click",()=>{
    for(let i=0; i<jenisMb.length; i++){
        jenisMb=document.querySelectorAll(".jenis-mb")
        qtymb = document.querySelectorAll(".qty-mb")
        lamaMb = document.querySelectorAll(".lama-sewa-mb")
        txtHargamb =document.querySelectorAll(".price-mb")

        jenisMb[i].addEventListener("change", () =>{
            totHargaSewaMbl(jenisMb[i].value)
            harga = harga * parseInt(qtymb[i].value) * parseInt(lamaMb[i].value)
            txtHargamb[i].textContent=harga;
            // console.log(jenisMb)
            // console.log(i)      
        })   

        qtymb[i].addEventListener("change", ()=>{
            totHargaSewaMbl(jenisMb[i].value)
            harga = harga * parseInt(qtymb[i].value) * parseInt(lamaMb[i].value)
            txtHargamb[i].textContent=harga;
            // console.log(i)  
        })
        
        lamaMb[i].addEventListener("change", ()=>{
            totHargaSewaMbl(jenisMb[i].value)
            harga = harga * parseInt(qtymb[i].value) * parseInt(lamaMb[i].value)
            txtHargamb[i].textContent=harga;
            // console.log(i)  
        })
    }
})


let price = document.querySelector(".total")
let actualPrice = document.querySelector(".actual-price")
let diskon = document.querySelector(".diskon")
let diskon_v = document.querySelector(".diskon-v")
let priceMt = 0
let priceMb = 0
let priceTotal = 0
let afterDiskon = 0
let diskonV = 0

window.addEventListener("change", ()=>{
    priceMt =0
    priceMb =0
    for(let i=0;i<txtHarga.length;i++){
        priceMt += parseInt(txtHarga[i].textContent)
        console.log(priceMt)
    }
    for(let i=0;i<txtHargamb.length;i++){
        priceMb += parseInt(txtHargamb[i].textContent)
        console.log(priceMb)
    }
    priceTotal = priceMb + priceMt
    
    if(priceTotal > 1500){
        diskon_v.textContent = "Diskon  20%"
        diskonV = priceTotal * 0.4
        afterDiskon = priceTotal - diskonV
    }else if(priceTotal > 1000){
        diskon_v.textContent = "Diskon  15%"
        diskonV = priceTotal * 0.3
        afterDiskon = priceTotal - diskonV
    }else if(priceTotal > 750){
        diskon_v.textContent = "Diskon  10%"
        diskonV = priceTotal * 0.2
        afterDiskon = priceTotal - diskonV
    }

    price.textContent = priceTotal
    diskon.textContent = diskonV 
    actualPrice.textContent = afterDiskon 

})
