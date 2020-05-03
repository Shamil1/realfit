document.addEventListener("DOMContentLoaded", function(event) {
	
	let burger = document.getElementById('burger');
	let header__nav = document.getElementById('header__nav');
	let anchs = header__nav.querySelectorAll('a');

	// burger menu
	burger.onclick = function() {
		burger.classList.toggle('active');
		header__nav.classList.toggle('active');
	};

	// adding class active
	header__nav.onclick = function(e) {
		e.preventDefault();
		anchs.forEach(function(item) {
			item.classList.remove('active');

			if(e.target == item) {
				e.target.classList.add('active');
			}
		});
	}

	// smooth scroll to sections
	let dataLinkArr = document.querySelectorAll('[data-scroll]');

	dataLinkArr.forEach(function(item) {
		item.onclick = function(e) {
			if(e.target.getAttribute('data-scroll') == item.getAttribute('data-scroll')) {
				let blockId = e.target.getAttribute('data-scroll');
				let coords = document.getElementById(blockId).getBoundingClientRect();
				
				window.scrollTo({
					top: (window.pageYOffset+coords.top),
					left: 0,
					behavior: 'smooth'
				});
			}
		}
	});

});