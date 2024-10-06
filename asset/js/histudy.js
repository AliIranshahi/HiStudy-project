function typescript() {
  new Typed('#typed', {
    strings: ['دبیرستان', 'مهدکودک', 'دوره های آنلاین', 'لایک آکادمی', 'مدرسه', 'دانشگاه'],
    typeSpeed: 100,
    delaySpeed: 1500,
    loop: true
  });
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 9800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// swiper.on('slideChange', function () {
//   alert('slide changed');
// });
function menuphonescreen() {
  barsclick.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("header").classList.add("blur-background");
    document.getElementById("main-content").classList.add("blur-background");
    newnavbar.classList.add("how");
    newnavbar.classList.add("w-75");
    newnavbar.classList.add("h-100");
    newnavbar.classList.add("bg-white");
    newnavbar.classList.remove("d-none");
    newnavbar.classList.add("d-block");
    newnavbar.classList.add("fadein");
    closeicon.addEventListener("click", (a) => {
      document.getElementById("header").classList.remove("blur-background");
      document.getElementById("main-content").classList.remove("blur-background");
      newnavbar.classList.remove("how");
      newnavbar.classList.remove("w-75");
      newnavbar.classList.remove("h-100");
      newnavbar.classList.remove("bg-white");
      newnavbar.classList.add("d-none");
      newnavbar.classList.remove("d-block");
      newnavbar.classList.add("fadeout");
      newnavbar.classList.remove("fadein");
    });
  });

}
typescript();
menuphonescreen();


