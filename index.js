// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const doneList = document.querySelector("#done-list");
const listArea = document.querySelector(".list-area");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  if (!text.length) return;
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label> 
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

function addDoneItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="done" class='checked'>${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  doneList.appendChild(newItem);
}

// 1.Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();
  addItem(inputValue);
});

//2.enter add todo list
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value.trim();
    addItem(inputValue);
  }
});
//3. Delete and check
listArea.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    target.parentElement.remove();
  } else if (target.tagName === "LABEL") {
    if (!target.classList.contains("checked")) {
      addDoneItem(target.innerText);
      target.parentElement.remove();
    }
  }
});
