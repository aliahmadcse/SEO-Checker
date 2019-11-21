const inputFileButton = document.querySelector(".inputFile");
const chooseButton = document.querySelector(".selectBtn");
const list = document.querySelector(".warningList");
const choosenMessage = document.querySelector(".choosenMessage");
chooseButton.addEventListener("click", chooseFile);
inputFileButton.addEventListener("change", readFile);

function chooseFile() {
  inputFileButton.click();
}

function readFile() {
  // returns list of selected files
  const file = this.files;
  // console.log(file[0]);
  if (file.length == 0) {
    choosenMessage.innerHTML = "No file choosen";
    return;
  } else {
    choosenMessage.innerHTML = "Click analyze to test the file";
  }
  const reader = new FileReader();
  reader.readAsText(file[0]);
  reader.addEventListener("loadstart", function() {
    console.log("Reading started");
  });
  reader.addEventListener("load", analyzeFile);
  reader.readAsText(file);
}

function analyzeFile(e) {
  const text = e.target.result;
  console.log(text);
}
