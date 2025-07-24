//SignUp Offer

const signUp = document.getElementById("signUp")
const closeBtn = document.getElementById("closeBtn")

closeBtn.addEventListener("click", function(){
    signUp.style.display = "none"
})

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

//Banner

const sliderTrack = document.getElementById('sliderTrack')
  const rightArrow = document.getElementById('rightArrow')
  const leftArrow = document.getElementById('leftArrow')
  const totalSlides = sliderTrack.children.length
  let currentIndex = 0

  function updateSlide() {
    const slideWidth = sliderTrack.clientWidth
    const offset = -currentIndex * slideWidth
    sliderTrack.style.transform = `translateX(${offset}px)`
  }

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    updateSlide();
  });

  window.addEventListener('resize', updateSlide)

  

  // New Arrivals

  document.addEventListener("DOMContentLoaded", function () {
    const navNewArrival = document.getElementById("navnew-arrival")
    const targetSection = document.getElementById("new-arrivals")

    if (navNewArrival && targetSection) {
      navNewArrival.addEventListener("click", function (event) {
        event.preventDefault()
        targetSection.scrollIntoView({ behavior: "smooth" })
      })
    }
  })

  //Most Wanted

  document.addEventListener("DOMContentLoaded", function(){
    const navMostWanted = document.getElementById("navmost-wanted")
    const mostWanted = document.getElementById("most-wanted")

    if (navMostWanted && mostWanted) {
    navMostWanted.addEventListener("click", function(event){
        event.preventDefault()
        mostWanted.scrollIntoView({behavior: "smooth"})
    })
    }
  })

  //Like Button

  let likeBtn = document.querySelectorAll(".likeBtn")
  
  likeBtn.forEach((btn) => {
  const heart = btn.querySelector(".heartBtn")
  let liked = false

  btn.addEventListener("click", () => {
    liked = !liked;

    if (liked) {
      heart.classList.add("text-red-600", "fill-red-600")
    } else {
      heart.classList.remove("text-red-600", "fill-red-600")
    }
  })
})


