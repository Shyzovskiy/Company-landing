document.querySelector(".header__burger").addEventListener("click", function() {
	this.classList.toggle("header__burger--active");
	document.querySelector(".header__list").classList.toggle("header__list--active");
	document.querySelector("body").classList.toggle("body--noscroll");
})