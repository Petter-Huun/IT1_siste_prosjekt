const burger = document.getElementById("burger")
const burgerx = document.getElementById("burgerx")
const burgermeny = document.getElementById("burgermeny")
const medie = document.getElementById("testFooter")
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
    document.getElementById("scrollbar").scrollBy({ left: flytt, behavior: "smooth" });
}

function bla_y(flytt) {
    document.getElementById("scrollbar").scrollBy({ top: flytt, behavior: "smooth" });
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

// TEST DEG SELV

const kort = document.querySelectorAll(".kort")
const pkort = document.querySelectorAll(".pkort")

function stokkKort(elementer) {
    kort.forEach(element => {
        let tilfeldig = Math.floor(Math.random() * 100)
        element.style.order = tilfeldig
        console.log("hei")
    })
}

stokkKort(kort)
stokkKort(pkort)

let kort1 = null
let kort2 = null

kort.forEach(elm => {
    elm.addEventListener("click", () => {
        console.log("kortet ble klikket")
        elm.classList.add("trykket")

        if (kort1 === null) {
            kort1 = elm
        } else if (kort2 === null) {
            kort2 = elm

            setTimeout(sjekkKort, 500)
        }
    })
})


function sjekkKort() {
    let bilde1 = kort1.querySelector(".bak").classList[1] //finner andre klassen i classlisten til .bak
    let bilde2 = kort2.querySelector(".bak").classList[1]

    if (bilde1 !== bilde2) {
        kort1.classList.remove("trykket")
        kort2.classList.remove("trykket")
    } else {
        kort1.classList.add("funnet")
        kort2.classList.add("funnet")

        sjekkVinn()
    }

    kort1 = null
    kort2 = null
}

function sjekkVinn() {
    const alleKort = document.querySelectorAll(".kort")
    const funnet = document.querySelectorAll(".funnet")

    if (alleKort.length == funnet.length) {
        const seier = document.getElementById("overskrift")
        seier.innerHTML = "Du vant"
    }
}






