function validateForm() {
  var x = document.forms["myForm"]["myFile"].value;
  if (x == "") {
    alert("Bestand moet worden bijgevoegd");
    return false;
  }
  else {
	document.getElementById("console").innerHTML = "Hello JavaScript!";
	console.log("Hello JavaScript!");
	//to-do: innerHTML heeft blijkbaar moeite met een veranderende URL. Bij submit verandert de URL, waardoor de pagina als het ware opnieuw wordt geladen en de textarea weer leeg is.
	return true;
  }
}
function dummyClick() {
	document.getElementById("console").innerHTML = "Hello JavaScript!";
	//Bij deze functie blijft de text staan, wat bevestigt dat de veranderende URL de oorzaak is. Wellicht ook iets om rekening mee te houden tijdens de rest van dit proces.
	return false;
}