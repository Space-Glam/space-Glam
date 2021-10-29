const modal = document.querySelector(".modal")
const modalcloseBtn = modal.querySelector(".modal__closeBtn")
const form = document.querySelector(".form")

modalcloseBtn.addEventListener('click', () => {
    modal.classList.add("hidden")
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    modal.classList.remove("hidden")
})