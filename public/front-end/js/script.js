$(document).ready(function () {
    $('.slide').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src='/front-end/icons/icon-left.png'>","<img src='/front-end/icons/icon-right.png'>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1200: {
                items: 1,
            },

        }
    });
    $('.destination').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src='/front-end/icons/icon-0-left.png'>","<img src='/front-end/icons/icon-0-right.png'>"],
        margin: 5,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 6,
            },

        }
    });
    $('.list-post-relate').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src='/front-end/icons/icon-0-left.png'>","<img src='/front-end/icons/icon-0-right.png'>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },

        }
    });

});
