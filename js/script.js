
var mobileDescriptionOpen = false;
var mobileSpecificationOpen = false;
var mobileRewievOpen = false;
var headerMenu = false;
var burgerOpen = false;
var modalWrapper = false


$(document).ready(function () {

    $('.product-card__purchase_1click, .goods-card__buy_1click, .comparison__item_purchase_1click').on('click', function () {
        if (modalWrapper) {
            $(this).attr('id', '');
            modalWrapper = false;
            $('.modal__wrapper').remove();
        } else {
            modalWrapper = true;
            $(this).attr('id', 'closeModal');
            var html = '<div class="modal__wrapper">';
            html += '<div class="modal__1click">';
            html += '<div class="close-modal"></div>';
            html += '<div class="modal__1click_initial"><p class="modal__1click_text">' + modalTelInput + '</p><div class="modal__1click_input"><input type="tel" name="1click-tel" id="1click-tel" placeholder="+38 (0__) ____ __ __"><button class="modal__1click_button">' + modalBuyButton + '</button></div></div>';
            html += '</div></div>';

            $('body').prepend(html);
            $('.modal__1click_input input').inputmask({ "mask": "+38 (099) 999 99 99" });

            $('.close-modal').on('click', function () {
                $('#closeModal').trigger('click');
            });

            $('.modal__1click_button').on('click', function () {
                var telNumber = $('#1click-tel').val();

                $.ajax({
                    url: 'ajax/test.html',
                    type: "POST",
                    data: "clientTelNumber=" + telNumber,
                    success: function (message) {
                        if (message) {

                            var html = '<div class="modal__1click_after"><div class="modal__1click_ok"></div><p class="modal__1click_ok-text">' + modalSuccess + '</p></div>';
                            $('.modal__1click_initial').remove();
                            $('.close-modal').after(html);

                        } else {

                        }
                    }
                });

            });
        }

    });


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
        $('.about__dropdown').slideToggle(200);
        $('.about__dropdown').css('display', 'flex');
    });

    $('.callback__number').on('click', function (event) {
        $(this).toggleClass('active');
        $('.callback__dropdown').slideToggle(200);
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
    });

    $('.burger').on('click', function () {
        if (burgerOpen) {
            burgerOpen = false;
            $('.shadow').remove();
            $('.burger__wrapper').remove();
            $('body,html').css('overflow-y', 'auto');
        } else {
            burgerOpen = true;
            var html = '<div class="shadow"></div>';
            html += '<div class="burger__wrapper"><div class="burger__default"><div class="burger__top"><div class="burger__top_logo"></div>';
            html += '<div class="header__info_language language">' + $('.header__info_language').html() + '</div>';

            html += '<button class="burger__top_login" type="button">????????????</button><div class="burger__top_close"></div></div><div class="header__main_search search">';
            html += '<div class="search__form">' + $('.search__form').html() + '</div> </div>';
            html += '<div class="burger__main"><div class="burger__main_basket">' + textCart + '<span class="burger__main_goods">' + $('.header__main_goods').text() + '</span><span class="burger__main_cash">' + cartPrice + '</span></div><div class="burger__main_choosed">' + choosedGoods + '</div><div class="burger__main_compare">' + compareGoods + '</div></div>';
            html += '<div class="burger__econom"><div class="burger__econom_bonus">' + bonusNumber + '<span class="burger__econom_bonus-date">' + bonusUntill + '</span></div><div class="burger__econom_club">' + economProgramm + '</div><div class="burger__econom_more">' + economInfo + '</div></div>';
            html += '<div class="burger__menu"><div class="burger__menu_title">' + parts + '</div>';
            html += ' <div class="burger__menu_items">' + $('.catalog__category').html() + '</div>';
            html += '<a class="burger__menu_title" href="' + $('.header__menu_blog').attr('href') + '">' + $('.header__menu_blog').text() + '</a>';
            $('.footer__information > .footer__information_item').each(function () {
                html += '<a class="burger__menu_title" href="' + $(this).attr('href') + '">' + $(this).text() + '</a>';
            });
            html += '</div><div class="burger__contacts">';
            html += '<a class="footer__contacts_number" href="' + $('.footer__contacts_number').attr('href') + '">' + $('.footer__contacts_number').text() + '</a>';
            html += ' <div class="footer__social">' + $('.footer__social').html() + '</div>';
            html += '</div></div>';

            $('body').prepend(html);
            $('.burger__top_close').on('click', function () {
                $('.burger').trigger('click');
            });
            $('body,html').css('overflow-y', 'hidden');

            $('.burger__menu_items>div').on('click', function () {

                $('.burger__menu_items .open-submenu').addClass('not-active');
                $(this).removeClass('not-active');

                $('.burger__category_items').remove();
                $('.burger__top_return').remove();
                $('.search__form, .burger__main, .burger__econom, .burger__menu_title, .burger__contacts').hide();
                $('.header__info_language, .burger__top_login').css('display', 'none');
                html = '<div class="burger__category_items">';
                var burgerClassSubmenuName = '.' + $(this).attr('id');
                $(burgerClassSubmenuName + ' .catalog__list').each(function () {

                    html += $(this).html();

                });

                html += '</div>';

                $('.burger__menu_items').before(html);
                $('.burger__top_logo').after('<div class="burger__top_return">' + burgerReturnButton + '</div>');
                $('.burger__top_return').on('click', function () {
                    $('.burger__category_items').remove();
                    $('.burger__menu_items>div').removeClass('not-active');
                    $('.search__form, .burger__main, .burger__econom, .burger__menu_title, .burger__contacts').show();
                    $('.header__info_language, .burger__top_login').css('display', 'flex');
                    $(this).remove();
                });

                $('.burger__category_items .catalog__list_title').on('click', function () {
                    $('.burger__category_items .catalog__list_title').removeClass('active');
                    $('.burger__category_items h4+div').css('display', 'none');
                    $($(this).next()).show(0);
                    $(this).addClass('active');
                });
            });

        }
    });

    $('.parameters-mob__name').on('click', function (event) {
        $($(this).next()).slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.cabinet__menu_item_active').on('click', function (event) {
        $('.cabinet__menu_item').removeClass('active');
        $('.cabinet__menu_wrapper').slideToggle(300);
        $(this).toggleClass('choosed');
    });


    $('.cabinet__add-pet_button').on('click', function (event) {
        $('.cabinet__add-pet').css('display', 'grid');
    });


    $('.my-select>div:first-child').on('click', function (event) {
        $($(this).next('div')).slideToggle(300);
        $(this).toggleClass('active');

    });

    $('.my-select >div:nth-child(2)> div').on('click', function (event) {
        $('.my-select div:nth-child(2)> div').removeClass('active');
        $(this).addClass('active');

        $($($(this).parent()).next('input')).val($(this).attr('data'));

        $($($(this).parent()).prev("div")).text($(this).text()).trigger('click');

    });

    $('.history__filter_button').on('click', function (event) {
        $('.history__filter').slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.open-history-item').on('click', function (event) {
        $('.history__order').slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.FAQ__question').on('click', function (event) {
        $($(this).next('div')).slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.cabinet__personal_tel').inputmask({ "mask": "+38 (099) 999 99 99" });

    $('.cabinet__address_tel').inputmask({ "mask": "+38 (099) 999 99 99" });


    $('.password-control').on('click', function (event) {
        if ($($(this).prev('input')).attr('type') == 'password') {
            $(this).addClass('view');
            $($(this).prev('input')).attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $($(this).prev('input')).attr('type', 'password');
        }
        return false;
    });

    $('.cabinet__address2-button').on('click', function (event) {
        $('#address1').css('display', 'none');
        $('#address2').css('display', 'block');
        $(this).addClass('active');
        $('.cabinet__address1-button').removeClass('active');
    });
    $('.cabinet__address1-button').on('click', function (event) {
        $('#address2').css('display', 'none');
        $('#address1').css('display', 'block');
        $(this).addClass('active');
        $('.cabinet__address2-button').removeClass('active');
    });


});

$(window).resize(function () {
    if ($(window).width() > 1330) {
        $('.product-description').css('display', 'grid');
        $('.product-description__text').css('display', 'block');
        $('.product-description_specification_items').css('display', 'grid');
        $('.description-review .product-review').css('display', 'none');
        $('.description__button').trigger('click');
        $('.cabinet__menu_wrapper').css('display', 'block');

        if (burgerOpen) {
            burgerOpen = false;
            $('.shadow').remove();
            $('.burger__wrapper').remove();
            $('body,html').css('overflow-y', 'auto');
        }

    } else {
        mobileDescriptionOpen = false;
        $('.description__button').removeClass('active');
        $('.product-description__text').css('display', 'none');
        mobileSpecificationOpen = false;
        $('.product-description_specification_items').css('display', 'none');
        $('.product-description_specification_title').removeClass('active');
        $('.description-review .product-review__items').css('display', 'none');
        $('.review__title').removeClass('active');
        $('.description-review .product-review').css('display', 'grid');
        $('.cabinet__menu_wrapper').css('display', 'none');
    }
});

