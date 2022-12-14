let home = document.getElementById("home")
let guest = document.getElementById("guest")
let counterHome = document.getElementById("counterHome")
let counterGuest = document.getElementById("counterGuest")
let resultHome = 0
let resultGuest = 0

function addOneH() {
    resultHome += 1
    home.innerText = resultHome
}

function addTwoH() {
    resultHome += 2
    home.innerText = resultHome
}

function addThreeH() {
    resultHome += 3
    home.innerText = resultHome
}

function addOneG() {
    resultGuest += 1
    guest.innerText = resultGuest
}

function addTwoG() {
    resultGuest += 2
    guest.innerText = resultGuest
}

function addThreeG() {
    resultGuest += 3
    guest.innerText = resultGuest
}

function reset() {
    home.innerText = 0
    guest.innerText = 0
}

function winner() {
    if (resultHome > resultGuest) {
        counterHome.style.border = '2px solid #a7f3d0'
        counterGuest.style.border = 'none'
        console.log('home is winner')
    } else if (resultGuest > resultHome) {
        counterGuest.style.border = '2px solid #a7f3d0'
        counterHome.style.border = 'none'
        console.log('guest is winner')
    } else {
        counterGuest.style.border = 'none'
        counterHome.style.border = 'none'
        console.log('tied')
    }
}