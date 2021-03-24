$('body').removeClass('desktop-detected');
$('#left-panel').mouseover(function () {
    $('body').removeClass('minified');
    $('body').addClass('desktop-detected');
});
$('#left-panel').mouseleave(function () {
    $('body').removeClass('desktop-detected');
    $('body').addClass('minified');

});
$('.welcome-dropdown').mouseover(function () {
    $('.welcome-dropdown-menu').show();
});
$('.welcome-dropdown').mouseleave(function () {
    $('.welcome-dropdown-menu').hide();
});