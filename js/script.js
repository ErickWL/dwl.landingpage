$(document).ready(function () {
    $(window).on('scroll', function () {
        var $navbar = $('.navbar.fixed-top');
        if ($(window).scrollTop() > 50) {
            $navbar.addClass('navbar-scrolled');
        } else {
            $navbar.removeClass('navbar-scrolled');
        }
    });
});