
$(document).ready(function() {
$("#fontSize").change(function() { //start change function//
	$(".readingContainer *").css("font-size", $(this).val() + "px");//target the reading container and change the font size according to changed option//
	$(".firstLetter").css("font-size",( $(this).val() *3)+ "px").css("color","#4677C8");//target the first letter class and make it 3 times bigger than the font size selected//
});
$("#fontFamily").change(function() {
    $(".readingContainer *").css("font-family", $(this).val());//target everything in the reading container and change its font family according to the option selected//

});
$("#selector1").click(function() { //target selector1- the Day Reading radio button and when clicked change the options//
	$(".readingContainer *").css("background-color","white").css("color","black");//make the reading container background white and font black//
	$(".firstLetter").css("color","#172742");//change the .firstLetter color to #172742//
	$(".pathChoosing1").css('color','#4677c8');//change the pathChoosing- all 3 options to choose from in the game to #4677c8//
	$(".pathChoosing2").css('color','#4677c8');
	$(".pathChoosing3").css('color','#4677c8');

});
$("#selector2").click(function() {//target selector2- the Night Reading radio button and change the following options//
	$(".readingContainer *").css("background-color","black").css("color","white");//make the reading container background black and font white//
	$(".firstLetter").css("color","#4677C8");//change the firstLetter color to #4677C8//
	$(".pathChoosing1").css('color','#4677c8');//change the pathChoosing-all 3 options to choose from in the game to #4677c8//
	$(".pathChoosing2").css('color','#4677c8');
	$(".pathChoosing3").css('color','#4677c8');
});

$("#marginSlider").change(function(){ //target the marginslider-the slider controlling the margin value//
	$(".readingContainer *").css("margin-left", $(this).val() + "px").css("margin-right", $(this).val() + "px");//target the reading container. get the value from the slider and add px to create the value understood by css and change the margin, both left and right//

});

$("#spacing").change(function() {//target spacing-margin controlling the spacing between the paragraphs//
	$(".readingContainer *").css("line-height",$(this).val() + "px");//get the value from the reading container with its current spacing and change it according to the slider value//
});

var fixed = $(".optionContainer");//create variable optionContainer//
$(window).scroll(function() { //start the function for the window that is based on scrolling//
	if ($(this).scrollTop() > 130) {// if the window(the whole viewed site) will go below 130px then...//
		fixed.addClass('fixedMenu').slideDown('fixedMenu'); //add class fixedMenu that will change to position:fixed and attach the menu on top of the page//
	}
	else {
		fixed.removeClass('fixedMenu'); //if not under 130px below remove the class//
	}
});
});
$(document).ready(function(){
$(".pathChoosing1").hover(function() {//when hovering over any of pathchoosing options animate it by adding 10px to its left side and changing colour to '#c87a46'//
	$(".pathChoosing1").animate({left: '+=10px'},'fast').css('color', '#c87a46');
},
function(){
	$(".pathChoosing1").animate({left:'0'},'fast').css('color','#4677c8');
});
});
$(document).ready(function(){
$(".pathChoosing2").hover(function() {
	$(".pathChoosing2").animate({left: '+=10px'},'fast').css('color', '#c87a46');
},
function(){
	$(".pathChoosing2").animate({left:'0'},'fast').css('color','#4677c8');
});
});
$(document).ready(function(){
$(".pathChoosing3").hover(function() {
	$(".pathChoosing3").animate({left: '+=10px'},'fast').css('color', '#c87a46');
},
function(){
	$(".pathChoosing3").animate({left:'0'},'fast').css('color','#4677c8');
});
});

$(document).ready(function() {
$(".theEnd").hover(function(){ //target the theEnd class that is made only for the end words on the screen//
	$(".theEnd").animate({fontSize: '+30px'},'slow'); //increase the font size slowly by 30 px/
		});
	});

var checkSubmission = true; //create the variable to check form//
function validateForm() { //function that checks the form with onreturn//
	var name = document.forms["contactForm"]["Name"].value; //Name of the form and name of the input being checked//
	if (name == ""){ //if the name is empty then alert''
		alert("Please insert your name");
		checkSubmission = false;//assign false value to checkSubmission//
	}
	var email = document.forms["contactForm"]["Email"].value;
	if (email == ""){
		alert("Please insert your email");
		checkSubmission = false;
	}
	var text = document.forms["contactForm"]["Message"].value;
	if (text == ""){
		alert("Please provide a message");
		checkSubmission = false;
	}
	if (checkSubmission == false){
		event.preventDefault();//prevents the form from being submitted as long as any checkSubmission is false//
	}
	else {
	alert("Your form has been submitted");
		}
};
