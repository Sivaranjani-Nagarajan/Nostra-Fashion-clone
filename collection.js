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

//Filters

 document.addEventListener("DOMContentLoaded", function () {
    // ✅ 1. Initialize constants first
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const items = document.querySelectorAll(".collection-item");

    // ✅ 2. Define the filter function
    function filterItems() {
      const selected = {
        occasion: [],
        colour: [],
        arrival: []
      };

      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          const type = checkbox.dataset.type;
          selected[type].push(checkbox.value);
        }
      });

      items.forEach(item => {
        const itemOccasion = item.dataset.occasion || "";
        const itemColour = item.dataset.colour || "";
        const itemArrival = item.dataset.arrival || "";

        const matchOccasion = selected.occasion.length === 0 || selected.occasion.includes(itemOccasion);
        const matchColour = selected.colour.length === 0 || selected.colour.includes(itemColour);
        const matchArrival = selected.arrival.length === 0 || selected.arrival.includes(itemArrival);

        if (matchOccasion && matchColour && matchArrival) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    // ✅ 3. Attach change event listeners
    checkboxes.forEach(cb => {
      cb.addEventListener("change", filterItems);
    });

    // ✅ 4. Initial call to display all items
    filterItems();
  });

