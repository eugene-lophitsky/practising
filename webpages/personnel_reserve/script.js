/*     Всплывающая подсказка      */

const tooltipTrigger = document.querySelector(".after-learning__tooltip");
const tooltipBody = document.getElementById("showTooltip");

function showTooltip() {
  tooltipBody.style.visibility == "hidden" ? tooltipBody.style.visibility = "visible" : tooltipBody.style.visibility = "hidden";
}
tooltipTrigger.addEventListener("click", showTooltip);


var swiper = new Swiper(".swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	dynamicBullets: true,
	},
	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
	},
  
	breakpoints:{
	320: {
	slidesPerView: 1,
	},
	420: {
	slidesPerView: 2,
	},
	520: {
	slidesPerView: 2,
	},
	660: {
		slidesPerView: 3,
	},
	850: {
		slidesPerView: 3,
	},
	960: {
	slidesPerView: 4,
	},
	1400: {
	slidesPerView: 4,
	}

	},
	});