let todoInputEl = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");

const addBtn = document.querySelector(".add-btn");

let arrTodos = [];

addBtn.addEventListener("click", function(){
  addTodo()
})

function addTodo(){
  let li = document.createElement("li");
  li.textContent = todoInputEl.value[0].toUpperCase() + todoInputEl.value.slice(1);
  li.classList.add("todo-item")
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(deleteBtn)
  todoList.appendChild(li);
  
  todoInputEl.value = "";
}