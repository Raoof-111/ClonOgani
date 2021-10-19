$(document).ready(function(){
$("#box").click(function(){
    $(".ac-box").slideToggle()
});
});

$(document).ready(function(){
    $('.your-class').slick({
        dots: false,
       
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  autoplay:true,
  autoplaySpeed:4000,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] 

    });
  });



  $(document).ready(function(){
    $('.your-class1').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:900,
      autoplay:true,
      autoplaySpeed:4000,
      nextArrow: '.next_caro1',
      prevArrow: '.previous_caro1'
    });
    $('.your-class2').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:900,
      autoplay:true,
      autoplaySpeed:4000,
      nextArrow: '.next_caro2',
      prevArrow: '.previous_caro2'
    });
    $('.your-class3').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:900,
      autoplay:true,
      autoplaySpeed:4000,
      nextArrow: '.next_caro3',
      prevArrow: '.previous_caro3'
    });
  });




  $(document).ready(function(){
    $(".ajaxbot").load("Ajax/all.html")
  
   $("#all").click(function(){
     $(".ajaxbot").load("Ajax/all.html")
   });
   $("#org").click(function(){
    $(".ajaxbot").load("Ajax/Oranges.html")
  });
  $("#fresh").click(function(){
    $(".ajaxbot").load("Ajax/Fresh.html")
  });
  $("#veget").click(function(){
    $(".ajaxbot").load("Ajax/vegetables.html")
  });
  $("#fast").click(function(){
    $(".ajaxbot").load("Ajax/fastfood.html")
  });
  });
 
  AOS.init();
