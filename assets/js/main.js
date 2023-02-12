// Swiper

let swiper_over = new Swiper(".swiper-over", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  mousewheel: true,
  keyboard: true,
});

let swiper_service = new Swiper(".swiper-service", {
  autoplay: {
    delay: 6000,
  },
  mousewheel: true,
  keyboard: true,
});

let swiper_blog = new Swiper(".swiper-blog", {
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  keyboard: true,
});
function mobileMenu() {
  const burgerBtn = document.querySelector("#mobile-btn");
  const mobileMenuClose = document.querySelector("#mobile-menu-close");
  const mobileMenu = document.querySelector(".mobile-menu");
  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.add("mobile-menu-active");
  });
  mobileMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("mobile-menu-active");
  });
}

window.addEventListener("DOMContentLoaded", function () {
  mobileMenu();
});
