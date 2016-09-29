$(document).ready(function(){
	scrollToSchedule();
	scrollToRegistration();
	scrollToSponsors();
	scrollToResults();
	scrollToLodging();
	scrollToVendors();
})

$(function() {
	$('.fade-in img:gt(0)').hide();
	setInterval(function(){
		$('.fade-in :first-child').fadeOut()
		.next('img').fadeIn()
		.end().appendTo('.fade-in');
	}, 8000)
})

var scrollToSchedule = function(){

	$('.schedule-link').on("click",function(){
		$('html, body').animate({
			scrollTop: $('.schedule').offset().top
		}, 'slow')
	})
	
}

var scrollToRegistration = function(){
	$('.registration-link').on("click",function(){
		$('html, body').animate({
			scrollTop: $('.registration').offset().top
		}, 'slow')
	})
	
}

var scrollToSponsors = function(){
	$('.sponsors-link').on("click",function(){
		$('html, body').animate({
			scrollTop: $('.sponsors').offset().top
		}, 'slow')
	})
	
}

var scrollToResults = function(){
	$('.results-link').on("click",function(){
		$('html, body').animate({
			scrollTop: $('.results').offset().top
		}, 'slow')
	})
	
}


var scrollToLodging = function(){
	$('.lodging-link').on("click",function(){
		$('html, body').animate({
			scrollTop: $('.lodging').offset().top
		}, 'slow')
	})
	
}


var scrollToVendors = function(){
	$('.vendors-link').on("click",function(){
		$('html, body').animate({
			scrollTop: $('.vendors').offset().top
		}, 'slow')
	})
	
}