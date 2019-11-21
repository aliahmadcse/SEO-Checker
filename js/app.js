const inputFileButton = document.querySelector(".inputFile");
const chooseButton = document.querySelector(".selectBtn");
const list = document.querySelector(".warningList");
chooseButton.addEventListener("click", chooseFile);
inputFileButton.addEventListener("change", getName);

function chooseFile() {
  inputFileButton.click();
}

function getName() {
  if (inputFileButton.value) {
    console.log(inputFileButton.value);
  }
}
