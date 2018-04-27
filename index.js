var grid = document.getElementById("grid");

var buttons = document.getElementsByTagName("button");

var currentTurn = "X";

function gameStart() {
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function (e) {
			e.target.disabled = true; 
			e.target.textContent = currentTurn;
			e.target.style.color = "red";
			nextTurn();
			changeColor();
			gameEnd();
		})
	}
}

function pushedAlready(target){


}

function nextTurn() {
	if (currentTurn === "X") {
		currentTurn = "0";
	} else {
			currentTurn = "X";
	}
}

function changeColor(){
	if (currentTurn === "X"){
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function (e) {
					e.target.style.color = "red";
				})
			}
		} else if (currentTurn === "0"){
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener("click", function (e) {
					e.target.style.color = "blue";
				})
			}
		} 
}

	function gameEnd() {
		if (buttons[0].textContent.length && buttons[0].textContent === buttons[1].textContent && buttons[1].textContent === buttons[2].textContent) {
			alert("Game Won by " + buttons[0].textContent);
		} else if (buttons[3].textContent.length && buttons[3].textContent === buttons[4].textContent && buttons[4].textContent === buttons[5].textContent) {
			alert("Game Won by " + buttons[3].textContent);
		} else if (buttons[6].textContent.length && buttons[6].textContent === buttons[7].textContent && buttons[7].textContent === buttons[8].textContent) {
			alert("Game Won by " + buttons[6].textContent);
		} else if (buttons[0].textContent.length && buttons[0].textContent === buttons[3].textContent && buttons[3].textContent === buttons[6].textContent) {
			alert("Game Won by " + buttons[0].textContent);
		} else if (buttons[1].textContent.length && buttons[1].textContent === buttons[4].textContent && buttons[4].textContent === buttons[7].textContent) {
			alert("Game Won by " + buttons[1].textContent);
		} else if (buttons[2].textContent.length && buttons[2].textContent === buttons[5].textContent && buttons[5].textContent === buttons[8].textContent) {
			alert("Game Won by " + buttons[2].textContent);
		} else if (buttons[0].textContent.length && buttons[0].textContent === buttons[4].textContent && buttons[4].textContent === buttons[8].textContent) {
			alert("Game Won by " + buttons[0].textContent);
		} else if (buttons[2].textContent.length && buttons[2].textContent === buttons[4].textContent && buttons[4].textContent === buttons[6].textContent) {
			alert("Game Won by" + buttons[2].textContent);
		}
	}

	gameStart();