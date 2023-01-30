const list = document.getElementById("list");
const itemInput = document.getElementById("item-input");
const addItemBtn = document.getElementById("add-item-btn");

const shoppingList = [];

addItemBtn.addEventListener("click", function () {
  shoppingList.push(itemInput.value);
  renderList();
  itemInput.value = "";
});

function renderList() {
  let html = "";
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}
