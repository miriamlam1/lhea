//mobile.js

var nav = document.getElementById('nav-list');

$('#menu-icon').click(function (){
    nav.classList.toggle('hide-mobile');
});

$('#exit-icon').click(function (){
    nav.classList.add('hide-mobile');
});