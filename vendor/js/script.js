// $(function(){
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1000,
//     });
// });

$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 300,
    });
});

// Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:true
        }
    }
})
// 
new WOW().init();