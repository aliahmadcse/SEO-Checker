const inputFileBtn = document.querySelector(".inputFile");
const selectBtn = document.querySelector(".selectBtn");
const list = document.querySelector(".warningList");
const selectMessage = document.querySelector(".selectMessage");

selectBtn.addEventListener("click", function() {
  inputFileBtn.click();
});

inputFileBtn.addEventListener("change", readFile);

function readFile() {
  // returns list of selected files
  const file = this.files;
  //validation
  if (file.length == 0) {
    selectMessage.innerHTML = "No file choosen";
    return;
  } else {
    selectMessage.innerHTML = "Click analyze to test the file";
  }
  //FileReader api
  const reader = new FileReader();
  //reading the first file as text
  reader.readAsText(file[0]);
  //event is triggered when reader encounter some error
  reader.onerror = function() {
    console.log("Some Error in Reading file");
    reader.abort();
  };
  //event triggered, when reader finishes reading file
  reader.onload = addScript;
}

//function to concatenate the script string with the read file
function addScript(e) {
  //getting the file text as string
  const fileText = e.target.result;
  //the string to be concatenated with the file text
  const jsStr = '<script src="../js/analyze.js"></script>\n';
  const searchItem = "</body>";
  //finding the index of </body> tag in fileText
  const indexOfBody = fileText.indexOf(searchItem);
  //extraxting the string before </body>
  const strBeforeBody = fileText.slice(0, indexOfBody);
  //extracting the remaining string
  const remainingStr = fileText.slice(indexOfBody);
  //concatenating the three strings
  const finalText = strBeforeBody.concat(jsStr, remainingStr);
  console.log(finalText);
}
