$(document).ready(function(){
    /*if (jQuery) {
     // jQuery is loaded
    alert("Yeah!");
    } else {
    // jQuery is not loaded
    alert("Doesn't Work");
	}*/
$('#inputbox').focus();
//$('#inputbox').css("visibility", "hidden");

var typingTimer;                //timer identifier
var doneTypingInterval = 2000;  //time in ms, 5 second for example

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
				$(this).css("visibility", "hidden");
				$(this).addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$(this).removeClass('animated fadeIn');
					});
				$(this).css("visibility", "visible");
				//$(this).removeClass('animated fadeIn');
			});



		//$('#gradtext').
}

/*
//var inputBox = document.getElementById("inputbox");
var running = false;

function myFunction() {

if(running == false){
	runing = true;
	var inputText;
	setTimeout(function(){
		inputText = document.getElementById("inputbox").value;
		document.getElementById("inputbox").value = "";
		document.getElementById("display").innerHTML = inputText;
		},1000);
	running = false;
}


}*/

    });
