let target = document.querySelectorAll(".main6div")
target.forEach(items => {
    items.addEventListener("click", () => {
        items.classList.toggle("active1")
        items.querySelector(".i").classList.toggle("i1")
    })
})