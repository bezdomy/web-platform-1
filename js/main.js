$(function () {

    $(".header-link-item").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('.filter__item-drop').on('click', function () {
        $(this).toggleClass('curators__filter-item-content--active');
        $(this).next().slideToggle('100');
    });

    $('.curators__inner-review-button').on('click', function () {
        $('.curators__contact-box').addClass('curators__contact-box--active');
        $('main').addClass('main-bg');
    });

    $('.curators__inner-contact-button').on('click', function () {
        $('.curators__contact-box').removeClass('curators__contact-box--active');
        $('main').removeClass('main-bg');
    });

    $('.filter-btn').on('click', function () {
        $('.curators__inner-filters').toggleClass('curators__inner-filters--remove');
    });

    $('#file-input').focus(function () {
            $('label').addClass('focus');
        })
        .focusout(function () {
            $('label').removeClass('focus');
        });

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    })
});

$('.filter-style').styler();