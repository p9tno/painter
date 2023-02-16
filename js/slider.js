$(document).ready(function() {


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





    const teamPreview = new Swiper('.teamPreview-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

        allowTouchMove: false,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.teamSlider__dotted',
            clickable: true,
        },

        thumbs: {
            swiper: teamSlider,
        },

        slideToClickedSlide: true,
        autoHeight: true,

    });
    teamPreview.on('slideChange', function (e) {
        // console.log('slide changed');
        // console.log(e.activeIndex);
    });

    // END TEAM












    function addSteps() {

        let steps = $('.steps-swiper-js');

        steps.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent().parent();
            let swiperDefaults = {

                slidesPerView: 1,
                spaceBetween: 10,
                speed: 500,
                loop: true,

                pagination: {
                    el: $parent.find('.steps__dotted')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                }


            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.steps__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    // addSteps();

});
