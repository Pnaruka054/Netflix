let target = document.querySelectorAll(".main6div")
target.forEach(items => {
    items.addEventListener("click", () => {
        for (let i = 0; i < target.length; i++) {
            if (target[i] != items) {
                target[i].classList.remove("active1")
                target[i].querySelector(".i").classList.remove("i1")
            } else {
                items.classList.toggle("active1")
                items.querySelector(".i").classList.toggle("i1")
            }
        }
    })
})