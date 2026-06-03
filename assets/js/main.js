/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
})

/*=============== CHANGE HEADER STYLES ===============*/
const header = document.getElementById("header")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header")
  } else {
    header.classList.remove("shadow-header")
  }
})

/*=============== HOME SWIPER ===============*/
const homeSwiper = new Swiper(".home-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-swiper .swiper-pagination",
    clickable: true,
  },
})

/*=============== PRODUCTS SWIPER ===============*/
const productSwiper = new Swiper(".product-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".product__pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1150: { slidesPerView: 4 },
  },
})

/*=============== PRODUCTS TAB FILTER ===============*/
const productTabs = document.querySelectorAll(".product__tab")
const productSlides = document.querySelectorAll(".product__slide")

function filterProducts(category) {
  productSlides.forEach(slide => {
    slide.style.display = slide.dataset.category === category ? "block" : "none"
  })
  productSwiper.update()
}

productTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    productTabs.forEach(t => t.classList.remove("active-tab"))
    tab.classList.add("active-tab")
    filterProducts(tab.dataset.tab)
  })
})

filterProducts("vanilla")

/*=============== NEW SWIPER ===============*/
const newSwiper = new Swiper(".new-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".new__pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1150: { slidesPerView: 3 },
  },
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById("scroll-up")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll")
  } else {
    scrollUp.classList.remove("show-scroll")
  }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

    if (sectionClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add("active-link")
      } else {
        sectionClass.classList.remove("active-link")
      }
    }
  })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
})

sr.reveal(".home__data, .section__title", {})
sr.reveal(".home__images", { delay: 600, origin: "bottom" })
sr.reveal(".about__images", { origin: "left" })
sr.reveal(".about__data", { origin: "right" })
sr.reveal(".product__tabs", { delay: 300 })
sr.reveal(".product__card", { interval: 100 })
sr.reveal(".new__card", { interval: 100 })
sr.reveal(".contact__info", { origin: "left" })
sr.reveal(".contact__form", { origin: "right" })
sr.reveal(".footer__content", { interval: 100 })
