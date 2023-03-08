$(function () {
    $(window).on('scroll', function () {
        if ($('.top').height() < $(this).scrollTop()) {
            $('.js-header').addClass('.change-color');
      } else {
            $('.js-header').removeClass('.change-color');
      }
    });
  });

  $(".openbtn4").click(function () {
    $(this).toggleClass('active');
});

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
