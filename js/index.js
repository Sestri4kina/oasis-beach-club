var main = function(){
  $('.dropdown-toggle').dropdown();
  $('.carousel').carousel({
		interval: 3000
	});
  $('.carouselplus').carousel({
		interval: 3000
	});
  $('.carouselbung').carousel({
		interval: 3000
	});
};

$(document).ready(main);