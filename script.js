// JavaScript source code
function clicked() {
	alert("Clicked!");
}

function changeColor() {
	var color = document.getElementById("input1").value;
	document.getElementById("div1").style.backgroundColor = color;
}