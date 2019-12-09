const analyzeBtn = document.querySelector(".analyzeBtn");
const list = document.querySelector(".warningList");
const iframe = document.getElementById("iframe");
const pageMessage = document.querySelector(".pageMessage");
iframe.style.display = "none";
const warningList = ["Warning", "warning", "warning"];

analyzeBtn.addEventListener("click", analyzeFile);

function analyzeFile() {
  iframe.src = "test/test.html";
  //   iframe.style.display = "block";
  pageMessage.innerHTML = "The warning List for your page!";
  const y = iframe.contentWindow || iframe.contentDocument;
  console.log(y.document.all);

  displayList();
}

function displayList() {
  warningList.forEach(element => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    list.appendChild(listItem);
  });
}
