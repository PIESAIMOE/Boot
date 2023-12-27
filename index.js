// var multipleItemCarousel = document.querySelector("#carouselExampleControls");

// if (window.matchMedia("(min-width:576px)").matches) {
//     const carousel = new bootstrap.Carousel(multipleItemCarousel, {
//         interval: false,
//       })
//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;

//   $(".carousel-control-prev").hide();
//   $(".carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 2) {
//       console.log("next");
//       scrollPosition += cardWidth;
//       $(".carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );

//       if(scrollPosition > 0){
//         $(".carousel-control-prev").show();
//       }
//       if (scrollPosition > carouselWidth - cardWidth * 2){
//         $(".carousel-control-next").hide();
//       }
//     }

//   });
//   $(".carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0){
//       console.log("prev");
//       scrollPosition -= cardWidth;
//       $(".carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//       if(scrollPosition <= 0){
//         $(".carousel-control-prev").hide();
//       }
//       if (scrollPosition < carouselWidth - cardWidth * ){
//         $(".carousel-control-next").show();
//       }
     
//     }
//   });
// }else{
//     $(multipleItemCarousel).addClass("slide");
// }

