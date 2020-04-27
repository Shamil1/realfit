document.addEventListener("DOMContentLoaded", function(event) {
	
	let burger = document.getElementById('burger');
	let header__nav = document.getElementById('header__nav');
	let header__links = document.getElementsByClassName('header__links');

	burger.onclick = function() {
		burger.classList.toggle('active');
		header__nav.classList.toggle('active');
	};

});