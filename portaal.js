var consoleOutput = "Kies een bestand.\n";

function validateForm() {
  var x = document.forms["myForm"]["myFile"].value;
  if (x == "") {
    alert("Bestand moet worden bijgevoegd");
    return false;
  }
  else {
    toConsole("Bestand gekozen.\n");
	return true;
	//to-do: Check wat BetterWetFromSweat doet!
  }
}

function dummyClick() {
    toConsole("Hello Javascript!\n");
	return false;
}

function toConsole(string)
{
    //Voeg de string toe aan de output en verander de HTML in de nieuwe output
    consoleOutput = consoleOutput.concat(string);
	document.getElementById("console").innerHTML = consoleOutput;
}
//De console gaat waarschijnlijk veranderen, waardoor het minder weg heeft van een log.
//Deze methode verandert dan ook!