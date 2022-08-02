const openBtn = document.querySelector(".btn.modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", ()=>{
    overlay.classList.add("active");
})

closeBtn.addEventListener("click", ()=>{
    overlay.classList.remove("active");
})