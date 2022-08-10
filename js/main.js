// preloader
document.body.onload = function () {
   var body = document.querySelector('body');
   body.classList.add('lock');
   setTimeout(function () {
      var preloader = document.querySelector('.preloader');
      if (!preloader.classList.contains('done')) {
         preloader.classList.add('done');
         body.classList.remove('lock');
      }
   }, 2100);
};
// parallax
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);
// burger
$('document').ready(function () {
   $('#burger').click(function (event) {
      $('.mobile-menu').toggleClass('active');
   });
   $('.overlay').click(function () {
      $('#burger,.mobile-menu').removeClass('active');
   });
});
// scroll
$('a[href^="#"').on('click', function () {
   let href = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(href).offset().top - 140 //здесь делает отступ
   }, 100); // Здесь меняет скорость прокрутки
   return false;
});
// scroll to top
const scrollToTop = document.getElementById('go-to-top');
window.addEventListener('scroll', function () {
   if (window.scrollY >= 120) {
      scrollToTop.classList.add('visible');
   } else if (window.scrollY < 100) {
      scrollToTop.classList.remove('visible');
   }
});