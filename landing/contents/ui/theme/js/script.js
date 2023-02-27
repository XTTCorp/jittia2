//SVG
jQuery(function() {
    activate('img[src*=".svg"]');

    function activate(string) {
        jQuery(string).each(function() {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');
        });
    }
});

jQuery(function($) {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".sticky-fixed.theme-big").addClass("hide-sticky-banner");
        }else{
            $(".sticky-fixed.theme-big").removeClass("hide-sticky-banner");
        }
    }); 

    $('.spu-content a').each(function(){
        $(this).addClass('spu-not-close');
    });

    //Same height script	
    //$(window).load(function () {
    sameHeight('.partners-logos .images');
    sameHeight('.menu-row .wpb_column');
    sameHeight('.two-column-content-vilt .product-wrapper');
    sameHeight('.tab-item', '.tab-item', true);
    sameHeight('.product-content', '.product-content', true);
    sameHeight('body:not(.page-template-bootcamp-v2-page):not(.page-template-vilt-v2-page) .tab-item-img', 'body:not(.page-template-bootcamp-v2-page):not(.page-template-vilt-v2-page) .tab-item-img', true);
    //sameContentHeightCols();
    sameHeight('.info-content h3');
    sameHeight('.info-content h4');
    sameHeight('.info-content .info-description');
    //});
    $(window).resize(function() {
        sameHeight('.partners-logos .images');
        sameHeight('.menu-row .wpb_column');
        sameHeight('.two-column-content-vilt .product-wrapper');
        sameHeight('.tab-item', '.tab-item', true);
        sameHeight('.product-content', '.product-content', true);
        sameHeight('body:not(.page-template-bootcamp-v2-page):not(.page-template-vilt-v2-page) .tab-item-img', 'body:not(.page-template-bootcamp-v2-page):not(.page-template-vilt-v2-page) .tab-item-img', true);
        //sameContentHeightCols();
        sameHeight('.info-content h3');
        sameHeight('.info-content h4');
        sameHeight('.info-content .info-description');
    });

    //Forms contact form 7
    $('.wpcf7-checkbox .wpcf7-list-item-label, .wpcf7-radio .wpcf7-list-item-label').on('click', function() {
        $(this).prev('input').click();
    });
    //End forms

    //Smooth Scroll
    $(document).on('click', 'a[href^="#"]', function() {

        var href = $(this).attr('href');

        if (href.indexOf("#cpop-") >= 0) return false;

        if (href.indexOf("#spu-") >= 0) return false;

        if ($(this).parents('.vc_tta-tab').length) return false;

        var pos_menu;
        if ($('.menu-row.fixed').length) { pos_menu = 70; } else { pos_menu = 130; }
        if ($.attr(this, 'href')) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - pos_menu
            }, 500);
        }

        var productItem = $.attr(this, 'href') + '.vc-custom-products';
        $(productItem).find('.tab-plus i').click();

        return false;
    });

    //Comptia popup
    $(document).on('click', 'a[href^="#cpop-"]', function() {
        var href = $(this).attr('href');
        $(href).addClass('active');
    });
    $('.comptia-popup .close, .comptia-popup a').on('click', function(){
        $(this).parents('.overlay').removeClass('active');
    });
    $(document).on("click", ".comptia-popups .overlay", function(e) {
        if ($(e.target).is(".comptia-popups .overlay")) {
            $(this).removeClass('active');;
        }
    });

    //Fix header
    //$(window).load(function () { scrollFix(); });
    scrollFix();
    $(window).resize(function() { scrollFix(); });

    $('.vc-readmore-text button.read-more-btn').on('click', function() {
        $('.vc-readmore-text .hidden-content').slideToggle();
        $(this).find('i').toggleClass('plus-icon minus-icon');
    });

    $('.vc-custom-products .tab-plus i').on('click', function() {
        $(this).parents('.tab-item').find('.tab-hidden-content').slideToggle();
        $(this).parents('.tab-item').find('.tab-buttons').slideToggle();
        $(this).toggleClass('plus-icon minus-icon');
        $(this).parents('.tab-item').attr('style', '');
    });

    $('.vc-faq').on('click', function() {
        $(this).find('.vc-faq-content').slideToggle();
        $(this).find('i').toggleClass('plus-icon minus-icon');
    });

    //Calc menu
    //$(window).load(function () { calc_menu(); });
    calc_menu();
    $(window).resize(function() { calc_menu(); });

    //Menu mobile
    $('.menu-mobile, .vc-anchor a').on('click', function() {
        $('.menu-row').toggleClass('open-menu');
    });

    //Slick slider
    $('.vc-users-box').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
    });

    //Back to up
    $(window).scroll(function() {
        $('.back-to-up.showed').stop(true, true).show().fadeOut(4000);
    });
    onScrollAdd('#exam', '.back-to-up', 'showed');

    //Tabs
    /*	$('.tabs li:first-child, .tabs-content .tabcontent:first-child').addClass('active');
	
    	$('.tabs li').on('click', function(){
	
    		$(".tabs li").removeClass('active');
	
    		$(".tabcontent").removeClass('active');
	
    		$(this).addClass('active');
	
    		var tab = $(this).attr('data-tab');
	
    		$("div[data-tab-content='"+tab+"']").addClass('active')
	
    	});*/

    //Bootcamp js
    //Testimonial Slider
    $('.testimonial-slider').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
    });
    $('.testimonial-slider .testimonial-prev').on('click', function() {
        $('.testimonial-slider').slick("slickPrev");
    });
    $('.testimonial-slider .testimonial-next').on('click', function() {
        $('.testimonial-slider').slick("slickNext");
    });

    //Anchor down click and anchor menu
    if ($('.bc-down').length) {
        $('.anchor-menu .tabs li:first-child').addClass('active');
        $('.bc-down').on('click', function() {
            $('.anchor-menu .tabs li:first-child').addClass('active');
        });
        $('.anchor-menu .tabs li').on('click', function() {
            $('.anchor-menu .tabs li').removeClass('active');
            $(this).addClass('active');
        });
    }

    //Scroll
    if ($(".template-bootcamp").length) {
        //$(window).load(function () { bootcampMenu(); });
        bootcampMenu();
        $(window).resize(function() { bootcampMenu(); });
    }

    //Hamb menu
    $('button.menu-hamb').on('click', function() {
        $(this).next('ul.tabs').toggleClass('open');
    });

    //Bootcamp v2
    $('.close-notification').on('click', function() {
        $('.sticky-notification').addClass('hide');
        $('.sticky-fixed').css('padding-top', '0');
    });

    if ($('body').hasClass('page-template-vilt-v2-page')) {
        onScrollAdd('#exam', '.sticky-notification', 'show');
    } else {
        onScrollAdd('#section-why-comptia', '.sticky-notification', 'show');
    }

    // if ($(".sticky-notification").hasClass("style-black")) {
    //     $("#primary").addClass('sticky-fixed');
    // }

    //onScrollAdd('#section-why-comptia','.sticky-notification','show');
    //onScrollAdd('#pricing','.sticky-notification','show');

    $('.vc-testimonials').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        prevArrow: $('.vc-testimonials .prev'),
        nextArrow: $('.vc-testimonials .next')
    });

    $('.vc-events').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        speed: 1000,
        prevArrow: $('.events-slider .prev'),
        nextArrow: $('.events-slider .next'),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }]
    });

    //data-v2-testimonials
    if( $('.data-v2-testimonials .testimonials').length ){
        $('.data-v2-testimonials .testimonials').slick({
            centerMode: true,
            centerPadding: '225px',
            slidesToShow: 2,
            prevArrow: $('.data-v2-testimonials .prev'),
            nextArrow: $('.data-v2-testimonials .next'),
            responsive: [{
                breakpoint: 1240,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerPadding: '110px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1,
                }
            }]
        });
        $('.data-v2-testimonials .testimonials').on('setPosition', function(){
            sameHeight('.data-v2-testimonials .testimonial-description');
        })

        /*sameHeight('.data-v2-testimonials .testimonial-description');
        $(window).resize(function() {
            sameHeight('.data-v2-testimonials .testimonial-description');
        });*/
    }

    //data-v2-testimonials
    if( $('.text-slider-wrapper').length ){
        $('.text-slider-wrapper').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            speed: 1000,
            fade: true,
        });
    }

    //Data plus logo and button
    var headerElement = $('.dataplus-v2 .fixed');
    if( headerElement.length ){
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                headerElement.addClass("scrolled");
            }else{
                headerElement.removeClass("scrolled");
            }
        });
    }

	//Mobile Carousel Cols Slider
    /*sameHeight('.mobile-carousel-cols .vc_column-inner');
    $(window).resize(function() {
        sameHeight('.mobile-carousel-cols .vc_column-inner');
    });*/
	if ( $('.mobile-carousel-cols').length && $(window).width() <= 990 ) {
        $('.mobile-carousel-cols').slick({
            centerMode: true,
            centerPadding: '225px',
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
			adaptiveHeight: false,
            responsive: [{
                breakpoint: 769,
                settings: {
                    centerPadding: '110px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1,
                }
            }]
        });
    }

    //Mobile Cols Slider
	if ( $('.mobile-slide-cols').length && $(window).width() <= 990 ) {
        $('.mobile-slide-cols').slick({
            arrows: false,
            autoplay: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 1000,
            fade: true,
        });
    }

    //Params hidden inputs
    params();

    //Auto Padding
    autoPadding();
    $(window).resize(function() { autoPadding(); });
});

/**
 * "When the page loads, get the height of the sticky notification and add that height to the top
 * padding of the page."
 * 
 * The first line of the function is a variable declaration. We're declaring a variable called
 * sticky_height and assigning it the value of the height of the sticky notification
 */
function autoPadding(){
    var sticky_height = jQuery('.sticky-notification').innerHeight();
    jQuery('#page').css('padding-top', sticky_height);    
}

//Fill fields from url
function params() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    jQuery('input[name^="vars["]').each(function() {
        var param = url.searchParams.get(jQuery(this).attr('data-var'));
        jQuery(this).val(param);
    });
}

function bootcampMenu() {
    //Fix menu
    var menuPos = jQuery('.template-bootcamp .anchor-menu').position().top + 50;

    jQuery(window).scroll(function() {
        if (jQuery(window).width() > 767) {

            var sticky = jQuery('.template-bootcamp .site-header'),
                scroll = jQuery(window).scrollTop();

            if (scroll >= 1) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

            if (scroll >= menuPos) jQuery(".template-bootcamp .anchor-menu").addClass('fixed');
            else jQuery(".template-bootcamp .anchor-menu").removeClass('fixed');

        } else {
            jQuery('.template-bootcamp .site-header').removeClass('fixed');
        }
    });
}

function onScrollAdd(element, target, cls) {
    if (jQuery(element).length) {
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() >= jQuery(element).position().top) {
                jQuery(target).addClass(cls);
            } else {
                jQuery(target).removeClass(cls);
            }
        });
    }
}

function calc_menu() {
    if (jQuery('.menu-row.fixed').length && jQuery(window).width() > 767) {
        var row_width = jQuery('.menu-row.fixed').innerWidth();
        var paddT = jQuery('.menu-row').innerWidth() - jQuery('.menu-row').width();

        var row_logo = row_width - 215 - paddT; //logo size - padding
        var count = jQuery(".menu-row.fixed>div").length;

        jQuery(".menu-row.fixed>div").css('width', row_logo / count);
    } else {
        jQuery(".menu-row>div").css('width', '');
    }
}

function scrollFix() {

    jQuery(window).scroll(function() {
        if (jQuery(window).width() > 767) {

            var sticky = jQuery('.menu-row'),
                scroll = jQuery(window).scrollTop();
            //console.log(scroll);

            if (scroll >= 615) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

            calc_menu();
        } else {
            jQuery('.menu-row').removeClass('fixed');
        }
    });
}

function sameHeight(div, target, mobile) {
    if (!target) target = div;
    if (!mobile) mobile = false;

    var maxHeight = -1;
    var item1 = jQuery(div);
    var item2 = jQuery(target);
    item2.attr('style', '');
    item1.each(function() {
        if (jQuery(this).innerHeight() > maxHeight) maxHeight = jQuery(this).innerHeight();
    });
    item2.each(function() {
        jQuery(this).innerHeight(maxHeight);
    });

    if (jQuery(window).width() < 767 && jQuery('.template-bootcamp').length && mobile == false) {
        item2.attr('style', '');
    }
}

jQuery(document).ready(function() {
    jQuery('#proceed-btn').click(function() {
        checked = jQuery("input[type=checkbox]:checked").length;
        if (!checked) {
            jQuery('.message-error').html("You must check at least one checkbox.");
            return false;
        }
    });
});

jQuery(document).ready(function() {
    jQuery(function($) {

        $(document).on('touchstart click', 'li.vc_tta-tab a,li.vc_tta-tab,.vc_tta-panel-title', function() {
            $('html, body').stop();
        });

    });
});


// MENU MOBILE 

jQuery(function($) {

    $(".menu-icon-mobile").click(function() {
        $('.opcions-menu').toggle(300);
    });

});