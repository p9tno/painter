var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device






$(document).ready(function() {

    function openMobileNav() {

        $('.header__toggle').click(function(event) {
            $('.toggle__toggle').toggleClass('active');
            $('.header__toggle').toggleClass('active');
        });
    };
    openMobileNav();

    function addDataFancybox() {
        let item = $('.itemForDataFancybox_js');
        let num = 0;

        item.each(function(index, el) {
            $(this).find('a:not(.singleSlider__link)').attr('data-fancybox', num);
            num++;
        });
    }
    addDataFancybox();



    function scrollTop() {
        $(".toTop").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 700);
        });
    }
    scrollTop();

    const singleSlider = new Swiper('.single_swiper_js', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        // loop: true,
        autoplay: {
          delay: 5000,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
            el: '.singleSlider__dotted',
            clickable: true,
        },

    });

    const reviews = new Swiper('.reviews_swiper_js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.icon_arrow_left',
            // prevEl: '.icon_arrow_left',
        },
        breakpoints: {
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
            },

        }

    });

});
