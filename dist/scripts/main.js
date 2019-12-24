'use strict';

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var header = document.querySelector('.header');
var drawer = document.querySelector('nav');
menu.addEventListener('click', function (e) {
  drawer.classList.toggle('open');
  header.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function (e) {
  drawer.classList.remove('open');
  header.classList.remove('open');
});