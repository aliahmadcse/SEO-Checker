const chooseButton = document.querySelector(".selectBtn");
const list = document.querySelector(".warningList");
chooseButton.addEventListener("click", render);

function render() {
  for (let i = 0; i < 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Hello Earth";
    list.appendChild(listItem);
  }
}
