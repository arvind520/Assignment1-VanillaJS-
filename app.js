//! Category
let menu = document.querySelectorAll(".menu h4");
menu.forEach((element) => {
  element.addEventListener("click", function () {
    menu.forEach((myCat) => {
      myCat.classList.remove("activeItem");
    });
    this.classList.add("activeItem");
  });
});

//! Slider
let currentSlide = 0;
let slider3 = document.querySelector(".slider3");

setInterval(function () {
  currentSlide = ++currentSlide % 3;
  slider3.style.transform = `translateX(-${currentSlide}00%)`;
}, 3000);

document.querySelector(".navBtn1").addEventListener("click", function () {
  currentSlide = 0;
  slider3.style.transform = `translateX(-${currentSlide}00%)`;
});
document.querySelector(".navBtn2").addEventListener("click", function () {
  currentSlide = 1;
  slider3.style.transform = `translateX(-${currentSlide}00%)`;
});
document.querySelector(".navBtn3").addEventListener("click", function () {
  currentSlide = 2;
  slider3.style.transform = `translateX(-${currentSlide}00%)`;
});

//! Color Picker
let allInnerColors = document.querySelectorAll(".inner__color");

allInnerColors.forEach(function (ele) {
  ele.addEventListener("click", function () {
    //remove previous Border
    if (allInnerColors[0].parentElement.classList.contains("color1-border")) {
      allInnerColors[0].parentElement.classList.remove("color1-border");
    }
    if (allInnerColors[1].parentElement.classList.contains("color2-border")) {
      allInnerColors[1].parentElement.classList.remove("color2-border");
    }
    if (allInnerColors[2].parentElement.classList.contains("color3-border")) {
      allInnerColors[2].parentElement.classList.remove("color3-border");
    }
    if (allInnerColors[3].parentElement.classList.contains("color4-border")) {
      allInnerColors[3].parentElement.classList.remove("color4-border");
    }
    if (allInnerColors[4].parentElement.classList.contains("color5-border")) {
      allInnerColors[4].parentElement.classList.remove("color5-border");
    }
    if (allInnerColors[5].parentElement.classList.contains("color6-border")) {
      allInnerColors[5].parentElement.classList.remove("color6-border");
    }

    //add Border to current
    if (this == allInnerColors[0]) {
      allInnerColors[0].parentElement.classList.add("color1-border");
    }
    if (this == allInnerColors[1]) {
      allInnerColors[1].parentElement.classList.add("color2-border");
    }
    if (this == allInnerColors[2]) {
      allInnerColors[2].parentElement.classList.add("color3-border");
    }
    if (this == allInnerColors[3]) {
      allInnerColors[3].parentElement.classList.add("color4-border");
    }
    if (this == allInnerColors[4]) {
      allInnerColors[4].parentElement.classList.add("color5-border");
    }
    if (this == allInnerColors[5]) {
      allInnerColors[5].parentElement.classList.add("color6-border");
    }
  });
});

//!Brand Selector
let brandItems = document.querySelectorAll(".brand_item");
brandItems.forEach((element) => {
  element.addEventListener("click", function () {
    brandItems.forEach((myItem) => {
      myItem.classList.remove("brand__selected");
    });
    this.classList.add("brand__selected");
  });
});

//! Page Number
let pages = document.querySelectorAll(".page");

pages.forEach((element) => {
  element.addEventListener("click", function () {
    pages.forEach((myPage) => {
      myPage.classList.remove("pageNumberSelected");
    });
    this.classList.add("pageNumberSelected");
  });
});
