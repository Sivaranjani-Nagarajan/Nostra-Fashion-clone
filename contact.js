//Side Navigation Bar

let sideNav = document.getElementById("sideNav")
let menuIcon = document.getElementById("menuIcon")
let closeNav = document.getElementById("closeNav")

menuIcon.addEventListener("click", function(){
    sideNav.style.left = 0
})

closeNav.addEventListener("click", function(){
    sideNav.style.left = "-50%"
})