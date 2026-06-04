const slider = document.querySelectorAll(".slider")
const btnPrev = document.querySelectorAll(".prev-button")
const btnNext = document.querySelectorAll("next-button")

let currentSlide = 0

function hideSlide() {
    slider.forEach(item => item.classList.remove("on"))
}

function showSlider() {
    slider[currrentSlider].classList.add("on")
}

btnNext.addEventListener("click", () => console.log("clicar"))