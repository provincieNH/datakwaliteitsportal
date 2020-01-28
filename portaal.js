function validateForm() {
  var x = document.forms["myForm"]["myFile"].value;
  if (x == "") {
    alert("Bestand moet worden bijgevoegd");
    return false;
  }
  else {
	document.getElementById("console").innerHTML = "Hello JavaScript!";
	console.log("Hello JavaScript!");
	return true;
	//to-do: Check wat BetterWetFromSweat doet!
  }
}
function dummyClick() {
	document.getElementById("console").innerHTML = "Hello JavaScript!";
	return false;
}