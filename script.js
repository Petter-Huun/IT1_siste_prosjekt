const burger = document.getElementById("burger")
const burgerx = document.getElementById("burgerx")
const burgermeny = document.getElementById("burgermeny")
const medie = document.getElementById("medie")
const disiplin = document.getElementById("disp")
const wc = document.getElementById("wc")

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

function visInnhold(trykk) {
    const tekst = trykk.previousElementSibling
    tekst.classList.toggle("open")
    trykk.classList.toggle("endreFarge")
    if (tekst.classList.contains("open")) {
        trykk.innerHTML = "LES MINDRE"
    } else {
        trykk.innerHTML = "LES MER"
    }
}

