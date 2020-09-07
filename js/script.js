$(function () {
    /** ************************* <Бургер> ************************* **/
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    /** ************************* <Tooltip> ************************* **/
    $("img").hover(function () {
        $(this).next("em").animate({
            opacity: "show",
            left: "55%"
        }, "slow");
    }, function () {
        $(this).next("em").animate({
            opacity: "hide",
            left: "20%"
        }, "slow");
    });
    /** ************************* <Sow scrolling> ************************* **/
    $(document).ready(function () {
        $(".header-menu").on("click", "a", function (event) {
            event.preventDefault();
            const id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        })
    });
    $('#up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    /** ************************* <Slider> ************************* **/
    $('.slider-items').slick({
        arrows: true, // стрелки включены
        dots: true, // точки включены
        slidesToShow: 1, // показывать два слайда
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
    /** ************************* <Fancybox> ************************* **/
    $("[data-fancybox]").fancybox({
        infobar: false,
        arrows: false,
        toolbar: false,
        smallBtn: true
    })
});

/** ************************* <Scrolling menu> ************************* **/
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {
        document.querySelectorAll('.page').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
                document.querySelectorAll('.header-menu a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.header-menu li')[i].querySelector('a').classList.add('active');
            }
        });
    }
});
