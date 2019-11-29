document.write(screen.width + '×' + screen.height + 'px.');

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const header = document.querySelector('.header')
const drawer = document.querySelector('nav');

menu.addEventListener('click', function (e) {
	drawer.classList.toggle('open');
	header.classList.toggle('open');
	e.stopPropagation();
});

main.addEventListener('click', function (e) {
	drawer.classList.remove('open');
	header.classList.remove('open');
});