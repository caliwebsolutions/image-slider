const innerContainer=document.querySelector(".innerContainer")
const prevBtn=document.querySelector(".btnPrev")
const nextBtn=document.querySelector(".btnNext")

nextBtn.addEventListener("click",()=>{
    innerContainer.scrollLeft +=100
})

prevBtn.addEventListener("click",()=>{
    innerContainer.scrollLeft -=100
})