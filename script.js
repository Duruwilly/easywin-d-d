const glide = document.querySelector(".glide");

if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 2,
    gap: 10,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.querySelector(".t-c");
  const closeModalBtn = document.querySelector(".close-btn");
  const modalBtn = document.querySelector(".close-modal");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Set the title
  document.title = "100% First Deposit Bonus—Double Your Winnings!";

  // Create and set the meta description
  let metaDescription = document.createElement("meta");
  metaDescription.name = "description";
  metaDescription.content =
    "Deposit now and get a 100% bonus! Turn 1,000 into 2,000 or 10,000 into 20,000. Double your deposit, double your win. Claim your bonus today!";
  document.head.appendChild(metaDescription);

  // Create and set the meta keywords
  let metaKeywords = document.createElement("meta");
  metaKeywords.name = "keywords";
  metaKeywords.content =
    "100% first deposit bonus for new players on easywin, Double your deposit and win big instantly on easywin, First deposit bonus, Double your win";
  document.head.appendChild(metaKeywords);
});

const swiper = new Swiper(".swiper", {
  //   slidesPerView: 1,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
