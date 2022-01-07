
var mobileDescriptionOpen = false;
var mobileSpecificationOpen = false;
var mobileRewievOpen = false;
var headerMenu = false;

$(document).ready(function () {

    $('#addtext').on('click', function (event) {
        $('.description__text').addClass('active');
        $(this).addClass('active');
    });

    $('.column-left__list-button').on('click', function (event) {
        $('.column-left__goods-list').addClass('goods-list_row');
        $('.column-left__goods-list').removeClass('goods-list_table');
        $(this).addClass('active');
        $('.column-left__table-button').removeClass('active');
    });

    $('.column-left__table-button').on('click', function (event) {
        $('.column-left__goods-list').addClass('goods-list_table');
        $('.column-left__goods-list').removeClass('goods-list_row');
        $(this).addClass('active');
        $('.column-left__list-button').removeClass('active');
    });

    $('.filter__button_mobile').on('click', function (event) {
        $('.filter__wrapper').slideToggle(300);
    });


    $('.description__button').on('click', function (event) {
        if ($(window).width() > 1330) {
            $('.product-description').css('display', 'grid');
            $('.product-review').css('display', 'none');
            $(this).addClass('active');
            $('.review__button').removeClass('active');

        } else {

            if (!mobileDescriptionOpen) {
                mobileDescriptionOpen = true;
                $('.product-description__text').css('display', 'block');
                $(this).addClass('active');
            } else {
                mobileDescriptionOpen = false;
                $('.product-description__text').css('display', 'none');
                $(this).removeClass('active');
            }
        }
    });

    $('.product-description_specification_title').on('click', function (event) {
        if ($(window).width() < 1331) {

            if (!mobileSpecificationOpen) {
                mobileSpecificationOpen = true;
                $('.product-description_specification_items').css('display', 'grid');
                $(this).addClass('active');
            } else {
                mobileSpecificationOpen = false;
                $('.product-description_specification_items').css('display', 'none');
                $(this).removeClass('active');
            }
        }
    });

    $('.review__title').on('click', function (event) {
        if ($(window).width() < 1331) {

            if (!mobileRewievOpen) {
                mobileRewievOpen = true;
                $('.product-review__items').css('display', 'block');
                $(this).addClass('active');
                $('.product-review__write').css('display', 'flex');
            } else {
                mobileRewievOpen = false;
                $('.product-review__items').css('display', 'none');
                $(this).removeClass('active');
                $('.product-review__write').css('display', 'none');
            }
        }
    });

    $('.product-review__write_button').on('click', function (event) {
        $('.product-review__write_wrapper').css('display', 'flex');
        $(this).remove();
    });

    $('.review__button').on('click', function (event) {
        if ($(window).width() > 1330) {
            $('.product-review').css('display', 'grid');
            $('.product-description').css('display', 'none');
            $(this).addClass('active');
            $('.description__button').removeClass('active');
        }
    });

    if ($(window).width() > 1330) {
        $('.description__button').trigger('click');
    }

    $('.header__menu_about').on('click', function (event) {
        $(this).toggleClass('active');
        $('.about__dropdown').slideToggle(300);
        $('.about__dropdown').css('display', 'flex');
    });

    $('.callback__number').on('click', function (event) {
        $(this).toggleClass('active');
        $('.callback__dropdown').slideToggle(300);
        $('.callback__dropdown').css('display', 'flex');
    });

    $('.header__menu_catalog').on('click', function (event) {
        if (headerMenu) {
            headerMenu = false;
            $('.catalog__dropdown').removeClass('catalog__dropdown_grid').removeClass('catalog__dropdown_open');
            $('#submenu-content').html('');
        } else {
            headerMenu = true;
            $('.catalog__dropdown').removeClass('catalog__dropdown_grid').addClass('catalog__dropdown_open');
        }
    });

    $('.open-submenu').on('mouseover', function () {
        var chooseClass = $(this).attr('id');
        var html = '<div class="catalog__submenu_grid">' + $('.' + chooseClass).html() + '</div>';
        $('#submenu-content').html(html);
        $('.catalog__dropdown').removeClass('catalog__dropdown_open').addClass('catalog__dropdown_grid');
    })

});

$(window).resize(function () {
    if ($(window).width() > 1330) {
        $('.product-description').css('display', 'grid');
        $('.product-description__text').css('display', 'block');
        $('.product-description_specification_items').css('display', 'grid');
        $('.product-review').css('display', 'none');
        $('.description__button').trigger('click');
    } else {
        mobileDescriptionOpen = false;
        $('.description__button').removeClass('active');
        $('.product-description__text').css('display', 'none');
        mobileSpecificationOpen = false;
        $('.product-description_specification_items').css('display', 'none');
        $('.product-description_specification_title').removeClass('active');
        $('.product-review__items').css('display', 'none');
        $('.review__title').removeClass('active');
        $('.product-review').css('display', 'grid');
    }
});

