$(document).ready(function(){

$('#inputbox').focus();

var typingTimer;                //timer identifier
var doneTypingInterval = 500;  //time in ms, 5 second for example

//on keyup, start the countdown
$('#inputbox').keyup(function(){
    clearTimeout(typingTimer);
    if ($('#inputbox').val) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//user is "finished typing," do something
function doneTyping () {
    //do something
		inputText = document.getElementById("inputbox").value;
		document.getElementById("inputbox").value = "";
		//$("#gradtext").text(inputText);
		$('#gradtext').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function(){

				$(this).text(inputText);
				$(this).css("visibility", "hidden");
				$(this).removeClass('animated fadeOut');
				$(this).addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$(this).removeClass('animated fadeIn');
					});
				$(this).css("visibility", "visible");
			});
 }

});
