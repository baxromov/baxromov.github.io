(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        loop:true,
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true,
        responsiveClass:true,
        responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true
                }
        }
    });
});

$('#tooltip').owlCarousel({
    loop:true,
    margin:10,
    autoPlay:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
        }
    }
})
$(document).ready(function(){
    $("#as").on("click", function(){
        $("#header").toggle(1000);
    });
});