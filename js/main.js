//// sticky header js code

var header = document.querySelector("header");

window.addEventListener("scroll",function(){
   header.classList.toggle("sticky", window.scrollY > 60);
})

/// header sidebar toggle js code
var menuBar = document.querySelector("nav .fa-bars");

menuBar.addEventListener("click",function(){
   menuBar.classList.toggle("fa-xmark");
})
var slide = document.querySelector(".mein-menu");
menuBar.addEventListener("click",function(){
   slide.classList.toggle("active");
})

/// header sidebar toggle scroll js code
 window.addEventListener("scroll", function(){
   menuBar.classList.remove("fa-xmark");
   slide.classList.remove("active");
 });

//  owl carousel js codes  //

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin:10,
      nav: true,
      navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
      dots: true,
      autoplay: true,
      autoplayTimeout:6000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });