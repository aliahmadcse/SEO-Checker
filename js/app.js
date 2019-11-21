const inputFileButton = document.querySelector(".inputFile");
const chooseButton = document.querySelector(".selectBtn");
const list = document.querySelector(".warningList");
const choosenMessage = document.querySelector(".choosenMessage");
chooseButton.addEventListener("click", chooseFile);
inputFileButton.addEventListener("change", getName);

function chooseFile() {
  inputFileButton.click();
}

function getName() {
  // returns list of selected files
  const file = this.files;
  // console.log(file);
  if (file.length == 0) {
    choosenMessage.innerHTML = "No file choosen";
  } else {
    choosenMessage.innerHTML = "Click analyze to test the file";
  }
}
