//Created using the guide at https://css-tricks.com/css3-clock/ Last accessed 12.05.2017 Author: TOBY PITMAN//
$(document).ready(function(){
$(function(){

	setInterval( function(){
		var seconds = new Date().getSeconds();// gets date from the system-second//
		var secRotation = seconds * 6; //sets the number how much should the hand move//
		var secMove = "rotate(" + secRotation + "deg)";//translates the number into degrees with which the hand can move//

		$("#second").css({"transform": secMove});//use css function transform to rotate the image of the clock hand//

		},1000);//wait 1000ms before executing next function//

	setInterval( function() {
		var hours = new Date().getHours();
		var minutes = new Date().getMinutes();
		var hourRotation = hours *30 +(minutes / 2);
		var hourMove = "rotate(" + hourRotation + "deg)";

		$("#hour").css({ "transform": hourMove});
	
		}, 1000);
	setInterval( function() {
		var minutes = new Date().getMinutes();
		var minRotation = minutes * 6;
		var minMove = "rotate(" + minRotation + "deg)";

		$("#minute").css({"transform" :minMove});

		}, 1000);

	});
$("#clockwrap").click(function(){//sellect the clockwrap-the container with the clock image in it//
	$(this).fadeOut(5000,function(){//after clicking fadeout in 5 sec and come back in 5 seconds//
		$(this).fadeIn(5000);
			
		});
});
});
	


    		


	
