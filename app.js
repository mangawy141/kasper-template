// navigation bar fixed state

let header = document.getElementById("navigation");
let headerLinks = document.querySelectorAll(
  "header .container nav .primary-navigation a "
);
let toggleMenu = document.querySelector('.toggle-menu');

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 560) {
    header.classList.add("headerFixed");
    toggleMenu.classList.add('toggle-menu-fixed')
    headerLinks.forEach((el) => {
      el.style.paddingBlock = "1.4rem";
    });
  } else {
    header.classList.remove("headerFixed");
    toggleMenu.classList.remove('toggle-menu-fixed')
    headerLinks.forEach((el) => {
      el.style.paddingBlock = "2.2rem";
    });
  }
});

let sections = document.querySelectorAll("section");

headerLinks.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    let href = el.getAttribute("href"); // Get the href attribute of the clicked link

    sections.forEach((section) => {
      if (href === `#${section.getAttribute("id")}`) {
        // Compare href to section id
        section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
      }
    });

    // Toggle the active class for the clicked link
    headerLinks.forEach((link) => {
      link.classList.remove("activeLink");
    });

    if (href !== "#home") {
      el.classList.toggle("activeLink");
    }
  });
});

// Services animation
let serviceHeading = document.querySelector(".service-heading");
let serviceItems = document.querySelectorAll(".serv");
let windowHeight = window.innerHeight;

window.addEventListener("scroll", function () {
  // Calculate the position of the service heading relative to the viewport
  let elementPosition = serviceHeading.getBoundingClientRect().top;

  // Check if the service heading is within the viewport
  if (elementPosition <= windowHeight) {
    // Add the 'fadeInDown' class to trigger the animation
    serviceHeading.classList.add("fadeInDown");
  }

  // Loop through each service item
  for (let i = 0; i < serviceItems.length; i++) {
    let elementPositionItem = serviceItems[i].getBoundingClientRect().top;

    // Check if the top of the service item is within the viewport
    if (elementPositionItem - windowHeight <= 0) {
      // Add the 'fadeInRight' class to the next service item
      serviceItems[0].classList.add("fadeInLeft");
      serviceItems[1].classList.add("fadeInRight");
      serviceItems[2].classList.add("fadeInLeft");
      serviceItems[3].classList.add("fadeInRight");
      // Add the 'fadeInLeft' class to the current service item
    }
  }
});
