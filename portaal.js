var consoleOutput = "Kies een bestand.\n";
//var fileInput = document.getElementById("myFile");
zip.workerScriptsPath = '/datakwaliteitsportal/lib/';

/*deze twee zijn uitgecommentarieerd. Het wordt gebruikt op
http://techslides.com/demos/archive/archive-viewer.html
maar is hier niet nodig.*/

//var filearr = [];
//var tablearr = [];

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

    //to-do: Maak een handzamere unzip?
    unzip(fileInput.files[0]);
    /*dummyZip(fileInput.files[0],function(unzippedBlob) {
    // logs the uncompressed Blob
    console.log(unzippedBlob);
  });*/
	return true;
	//to-do: Check wat BetterWetFromSweat doet?
  }
}

function unzip(zip){
    model.getEntries(zip, function(entries) {
        entries.forEach(function(entry) {
            model.getEntryFile(entry, "Blob");
        });
    });
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
        //zipReader.close();
        callback(data);
      });
      entries[1].getData(new zip.BlobWriter("text/plain"), function(data) {
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

//model van TechSlides.
var model = (function() {

                var URL = window.webkitURL || window.mozURL || window.URL;
                var acount = 0;
                var bcount = 0;

                //compile a list of file extensions and content types
                //http://webdesign.about.com/od/multimedia/a/mime-types-by-content-type.htm
                var mapping = {
                    "pdf":"application/pdf",
                    "zip":"application/zip",
                    "rar":"application/rar",
                    "json":"application/json",
                    "mid":"audio/mid",
                    "mp3":"audio/mpeg",
                    "bmp":"image/bmp",
                    "gif":"image/gif",
                    "png":"image/png",
                    "jpg":"image/jpeg",
                    "jpeg":"image/jpeg",
                    "svg":"image/svg+xml",
                    "xml":"text/xml"
                }


                return {
                    getEntries : function(file, onend) {

                        zip.createReader(new zip.BlobReader(file), function(zipReader) {
                            zipReader.getEntries(onend);
                        }, onerror);
                    },
                    getEntryFile : function(entry, creationMethod, onend, onprogress) {

                        acount++;

                        var writer, zipFileEntry;

                        function getData() {
                            entry.getData(writer, function(blob) {

                                bcount++;


                                //filearr.push(blob);

                                    /*"name":entry.filename,
                                    "type":blob.type,
                                    "size":blob.size,
                                    "view":"<button onclick='goopen("+Number(bcount-1)+")'>open</button>"
                                });


                                /*if(acount == bcount){
                                    show(tablearr);
                                }*/

                            }, onprogress);
                        }

                            console.log(entry);
                            var extension = entry.filename.substring(entry.filename.indexOf(".")+1);
                            var mime = mapping[extension] || 'text/plain';
                            console.log(mime);

                            writer = new zip.BlobWriter(mime);
                            getData();
                    }
                };
            })();