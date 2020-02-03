var consoleOutput = "Kies een bestand.\n";
//var fileInput = document.getElementById("myFile");
zip.workerScriptsPath = '/lib/';

//console.log(fileInput);

function validateForm() {
  var x = document.forms["myForm"]["myFile"].value;
  if (x == "") {
    alert("Bestand moet worden bijgevoegd");
    return false;
  }
  else {
    var fileInput = document.getElementById("myFile");
    console.log(fileInput);
    toConsole("Bestand gekozen.\n");
    dummyZip(fileInput.files[0],function(unzippedBlob) {
    // logs the uncompressed Blob
    console.log(unzippedBlob);
  });
	return true;
	//to-do: Check wat BetterWetFromSweat doet!
  }
}

function dummyZip(blob, callback) {
console.log(blob);
// use a zip.BlobReader object to read zipped data stored into blob variable
  zip.createReader(new zip.BlobReader(blob), function(zipReader) {
    // get entries from the zip file
    zipReader.getEntries(function(entries) {
      // get data from the first file
      entries[0].getData(new zip.BlobWriter("text/plain"), function(data) {
        // close the reader and calls callback function with uncompressed data as parameter
        zipReader.close();
        callback(data);
      });
    });
  }, onerror);
}

function onerror(message) {
  console.error(message);
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