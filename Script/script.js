let menu = document.querySelector('div#menu-icon');
let navbar = document.querySelector('div.menu-bar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open-nav-bar');
}