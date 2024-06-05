// let search = document.querySelector('.search-box');

// document.querySelector('#search-icon').onclick = () => {
//     search.classList.toggle('active')
// }

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
// Form
console.log(jQuery().jquery);
//цей скрипт для меню «бургера»
$(document).on('click', '#burger', function () {
 $('.nav-menu').toggleClass('active');
});
// Submit subscription form using Ajax
$('#subscription_form').on('submit', function (e) {
 e.preventDefault();
 var $form = $(this);
 $.ajax({
 type: 'POST',
 url: '/subscription_ajax.php',
 data: $form.serialize()
 }).done(function () {
 $form[0].reset()
 alert('Thank you for the subscription!')
 }).fail(function () {
 alert('Something went wrong')
 });
});
console.log(jQuery().jquery)
// nav menu
$(document).on('click', '#burger', function(){
    $('.nav-menu').toggleClass('active');
});

