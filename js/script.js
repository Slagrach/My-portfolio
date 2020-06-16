$(document).ready(function () {
    // бургер
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    // всплывающая подсказка
    $(" a").hover(function () {
        $(this).next("em").animate({
            opacity: "show",
            left: "80%"
        }, "slow");
    }, function () {
        $(this).next("em").animate({
            opacity: "hide",
            left: "-120%"
        }, "slow");
    })
    // всплывающая картинка
    $('.minimized').click(function (event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
    // слайдер
    $('.slider__card').slick({
        arrows: true, // стрелки вкдючены
        dots: true, // точки включены
        slidesToShow: 3, // показывать два слайда
        initialSlide: 0, // с какого слайда начинать
        autoplay: true, // автопрокрутка
        autoplaySpeed: 5000, // автопрокрутка каждые 5сек
        infinite: true, // бесконечная прокрутка
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        variableWidth: true,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
});
// медленно по стрелке
$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("slow")
        }
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("slow")
            } else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }
});
$(function () {
    $("#button__up").scrollToTop();
});
// медленно наверх
$(function () {
    $('#up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    })
})
// медленно к якорям
$(document).ready(function () {
    $(".header__menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});
