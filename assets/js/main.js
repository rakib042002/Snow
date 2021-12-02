(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    	//carousel items start

        // testimonial-slider
        $(".testimonial-slider").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            mouseDrag: true,
            loop:true,
            autoplay: true,
        });

        // branding-slider

        $(".branding-slider").owlCarousel({
            items: 5,
            mouseDrag: true,           
            loop:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                },
                400:{
                    items:2,
                },
                600:{
                    items:3,
                },
                900:{
                    items:4,
                },
                1200:{
                    items:5,
                }

            }
        });

        $(".block-slider").owlCarousel({
            items: 3,
            mouseDrag: true,           
            loop:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    dots:false,
                },
                600:{
                    items:2,
                    dots:false,
                },
                993:{
                    items:3,
                }
            }
        });

        //carousel items end

        // counter

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // counter
        // mobile-menu
        $(function(){
            $('#mobile-menu').slicknav({
                'brand': '<img src="assets/img/logo-light.svg" alt="LOGO">',
            });

        });





        

    //jquery end 
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	