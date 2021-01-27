
$(document).ready(function(){
    $('.loader').fadeOut();
    $('.product-owl  .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        // responsiveClass:true,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            600:{
                items:3,
                // nav:false
            },
            1000:{
                items:5,
                // nav:true,
                // loop:false
            }
        }
     });
     

     $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        items:1
    });


     $('.menu-icon').on('click',function(){
        $('.menu').toggleClass('show');
     });

     //Mixup start
     
     AOS.init({
        duration: 600,
        easing: 'ease-in-sine',
        dataAosOnce:true
     });
     $( "#Onavbar" ).click(function( e ) {
        e.stopPropagation();
        $(this).removeClass('show');

      }).on('click','a',function(e) {
        e.stopPropagation();
   });
   //when you click on the menu item
   $('nav .groups .menu ul li a').on('click',function(){
       $(this).addClass('active').parent().siblings().children().removeClass('active')
   })

   //Start with scroll top action
   $(window).scroll(function () { 
       var winSrollTop =$(this).scrollTop();
       $('section').each(function(){
            if(winSrollTop >= $(this).offset().top - 80){
                // console.log();
                $('nav .groups .menu ul li a[href=#'+$(this).attr('id')+']').addClass('active').parent().siblings().children().removeClass('active')
            }
       });
   });
    $('.theme-btns li').on('click', function(){
        $("link[href*='Mytheme']").attr("href","css/style_theme/" + $(this).data('color') + ".css");
    });

});
