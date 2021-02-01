$(document).ready(function() {

  $('.carousel').slick({
      dots: true,
      speed: 300,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            focusOnSelect: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            focusOnSelect: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
          }
        }
      ]
  });
});
