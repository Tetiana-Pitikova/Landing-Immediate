$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    items:6,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
