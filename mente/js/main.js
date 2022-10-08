// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var closeBtn = document.getElementById("close");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
closeBtn.onclick = function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};
// menu end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// sliders
$(function () {
  $(".hero__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });
});

 $(function () {
  $(".testimonials__inner-slider").slick({
    dots: true,
    infinite: true,
    centerMode: false,
    fade: true,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
