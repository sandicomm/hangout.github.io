const carousel = document.querySelector(".gallery-wrapper")

let isDragStart = false, prevPagex, prevScrollLeft

const dragStart = (e) => {
    isDragStart = true
    prevPagex = e.pageX
    prevScrollLeft = carousel.scrollLeft
}
const dragging = (e) => {
    if(!isDragStart) return
    e.preventDefault()
    let positionDiff = e.pageX - prevPagex
    carousel.scrollLeft = prevScrollLeft - positionDiff
}

const dragStop = ()=>{
    isDragStart = false
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)