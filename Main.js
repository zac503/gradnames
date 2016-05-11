$(document).ready(function(){
    if (jQuery) {
     // jQuery is loaded
    alert("Yeah!");
    } else {
    // jQuery is not loaded
    alert("Doesn't Work");
        }


var typingTimer;                //timer identifier
var doneTypingInterval = 5000;  //time in ms, 5 second for example

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
		document.getElementById("display").innerHTML = inputText;
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
