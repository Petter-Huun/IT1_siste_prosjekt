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

//Match

const kort = document.querySelectorAll(".kort")
const pkort = document.querySelectorAll(".pkort")

function stokkKort(elementer) {
    elementer.forEach(element => {
        let tilfeldig = Math.floor(Math.random() * 100)
        element.style.order = tilfeldig
        console.log("hei")
    })
}

stokkKort(kort)
stokkKort(pkort)

let valgtBilde = null

kort.forEach(elm => {
    elm.addEventListener("click", () => {
        if (valgtBilde !== null) {
            valgtBilde.classList.remove("valgt")
        }

        valgtBilde = elm
        elm.classList.add("valgt")
    })

})

let forsok = 0

pkort.forEach(elm => {
    elm.addEventListener("click", () => {
        if (valgtBilde === null) return

        forsok += 1

        if (valgtBilde.dataset.navn === elm.dataset.navn) {
            valgtBilde.classList.remove("valgt")
            valgtBilde.classList.add("funnet")
            elm.classList.add("funnet")
            valgtBilde = null
            sjekkVinn()
        } else {
            valgtBilde.classList.add("feil")
            elm.classList.add("feil")
            setTimeout(() => {
                valgtBilde.classList.remove("valgt", "feil")
                elm.classList.remove("feil")
                valgtBilde = null
            }, 500)
        }
    })

})

function sjekkVinn() {
    const funnet = document.querySelectorAll(".kort.funnet")
    if (funnet.length === kort.length) {
        if (forsok == 5) {
            document.querySelector(".overskriftContainer p").innerHTML = "Du vant! Og klarte det på første forsøk "
        } else {
            document.querySelector(".overskriftContainer p").innerHTML = "Du vant! Og brukte " + forsok + " forsøk"
        }
    }

}

function reset() {
    document.querySelectorAll(".kort, .pkort").forEach(elm => {
        elm.classList.remove("funnet", "valgt", "feil")
        elm.style.pointerEvents = "auto"
        forsok = 0
    })
    valgtBilde = null
    document.querySelector(".overskriftContainer p").innerHTML = "Trykk på riktig bilde til riktig navn"
    stokkKort(kort)
    stokkKort(pkort)
}

//Spørsmål

let riktig = 0
let feil = 0
let spmNr = 0
const overskrift = document.getElementById("testH2")
const testTekst = document.querySelector(".pQuiz")

const sporsmal = [
    {
        tekst: "Hvilken alpinist vant flest medaljer under OL i Milano/Cortina?",
        svar: "Franjo Von Allmen"
    },

    {
        tekst: "Hvilken alpinist har vunnet flest sammenlagtkuler?",
        svar: "Marcel Hirscher"
    },

    {
        tekst: "Hvilket renn kjøres på kvelden/natten",
        svar: "Schladming"
    },

    {
        tekst: "Hvilken alpinist fikk flest WC points i forrige sesong?",
        svar: "Marco Odermatt"
    },

    {
        tekst: "Hvilken alpinist har flest WC seiere?",
        svar: "Michaela Shiffrin"
    }
]

function sjekk(elm) {
    const input = elm.previousElementSibling
    const svar = input.value    
    console.log(svar)
    if (svar === sporsmal[spmNr].svar) {
        riktig += 1
    } else {
        feil += 1
    }

    input.value = ""

    spmNr += 1

    if (spmNr < sporsmal.length) {
        overskrift.innerHTML = "Spørsmål " + (spmNr + 1) + "/5"
        testTekst.innerHTML = sporsmal[spmNr].tekst
        input.value = ""
    } else {
        overskrift.innerHTML = "Quizen er ferdig!"
        testTekst.innerHTML = "Du fikk " + riktig + "av 5"
        input.value = ""
    }
    
}

