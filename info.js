window.addEventListener("DOMContentLoaded", ()=>{
    const infoBtn = document.getElementById("info-toggle-btn")
    const infoCtn = document.getElementById("info")
    infoBtn.addEventListener("click",()=>{
        infoBtn.classList.toggle("active")
        infoCtn.classList.toggle("active")
    })
})