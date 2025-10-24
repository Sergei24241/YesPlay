document.addEventListener("DOMContentLoaded", function () {
  const swiperHeader = new Swiper(".swiper-header", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".header-swiper-button-next",
      prevEl: ".header-swiper-button-prev",
    },
    on: {
      init: function () {
        updateArrows(this);
      },
      slideChange: function () {
        updateArrows(this);
      },
      reachEnd: function () {
        updateArrows(this);
      },
      fromEdge: function () {
        updateArrows(this);
      }
    },
  });

  function updateArrows(swiper) {
    const prevBtn = document.querySelector(".header-swiper-button-prev");
    const nextBtn = document.querySelector(".header-swiper-button-next");

    prevBtn.style.display = swiper.isBeginning ? "none" : "";
    nextBtn.style.display = swiper.isEnd ? "none" : "";
  }

  const swiperCategories = new Swiper(".swiper-categories", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".categories-swiper-button-next",
      prevEl: ".categories-swiper-button-prev",
    },
    on: {
      init: function () {
        updateArrowsCategories(this);
      },
      slideChange: function () {
        updateArrowsCategories(this);
      },
      reachEnd: function () {
        updateArrowsCategories(this);
      },
      fromEdge: function () {
        updateArrowsCategories(this);
      }
    },
  });

  function updateArrowsCategories(swiper) {
    const prevBtn = document.querySelector(".categories-swiper-button-prev");
    const nextBtn = document.querySelector(".categories-swiper-button-next");

    prevBtn.style.display = swiper.isBeginning ? "none" : "";
    nextBtn.style.display = swiper.isEnd ? "none" : "";
  }
});

const swiperHeaderMobile = new Swiper(".swiper-header-mobile", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".header-mobile-swiper-button-next",
    prevEl: ".header-mobile-swiper-button-prev",
  },
  on: {
    init: function () {
      updateArrowsMobile(this);
    },
    slideChange: function () {
      updateArrowsMobile(this);
    },
    reachEnd: function () {
      updateArrowsMobile(this);
    },
    fromEdge: function () {
      updateArrowsMobile(this);
    }
  },
});

function updateArrowsMobile(swiper) {
  const prevBtn = document.querySelector(".header-mobile-swiper-button-prev");
  const nextBtn = document.querySelector(".header-mobile-swiper-button-next");

  prevBtn.style.display = swiper.isBeginning ? "none" : "";
  nextBtn.style.display = swiper.isEnd ? "none" : "";
}
