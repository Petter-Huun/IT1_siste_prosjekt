const burger = document.getElementById("burger")
const burgerx = document.getElementById("burgerx")
const burgermeny = document.getElementById("burgermeny")
const medie = document.getElementById("medie")


burger.addEventListener("click", () => {
    burgermeny.classList.toggle("visburger")
    burger.style.display = "none"
    burgerx.style.display = "block"
})

burgerx.addEventListener("click", () => {
    burgermeny.classList.toggle("visburger")
    burger.style.display = "block"
    burgerx.style.display = "none"
})

medie.addEventListener("click", () => {
    burgermeny.classList.toggle("visburger")
    burger.style.display = "block"
    burgerx.style.display = "none"
})

function bla(flytt) {
    document.getElementById("scrollbar").scrollBy({left: flytt, behavior: "smooth"});
}

function bla_y(flytt) {
    document.getElementById("scrollbar").scrollBy({top: flytt, behavior: "smooth"});
}

