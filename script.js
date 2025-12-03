let todoInputEl = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");

const addBtn = document.querySelector(".add-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
let currentFilter = "all";
let arrTodos = [];

let taskRemaining = document.querySelector("#todo-count");
let count = 0;

addBtn.addEventListener("click", function(){
  addTodo()
  filterToDos();
})

function addTodo(){

  // Creating list items
  let li = document.createElement("li");
  li.classList.add("todo-item")
  filterToDos()
  // Create span for text
  if (todoInputEl.value.trim() === "") {
    return;
  }
  let text = document.createElement("span");
  text.classList.add("todo-text");
  text.textContent = todoInputEl.value[0].toUpperCase() + todoInputEl.value.slice(1);

  // Delete btns
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function(){
    li.remove();
    count--;
    taskRemaining.textContent = `${count} task/s done!`;
  })

  // Checkboxes
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  checkBox.addEventListener("change", function(){
    if(checkBox.checked){
      count++;
      if (count === 1) {
        taskRemaining.textContent = `${count} task done!`;
      }else{
        taskRemaining.textContent = `${count} tasks done!`;
      }
      li.classList.add("completed")
    }else{
      count--;
      if (count <= 1) {
        taskRemaining.textContent = `${count} task done!`;
      }else{
        taskRemaining.textContent = `${count} rasks done!`
      }
      li.classList.remove("completed")
    }
  })

  // Appending li and delete btns
  li.appendChild(checkBox);
  li.appendChild(text);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInputEl.value = "";
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    filterBtns.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    filterToDos();
  })
})

function filterToDos(){
  let allTodos = document.querySelectorAll(".todo-item");

  allTodos.forEach(todo => {
    let isCompleted = todo.classList.contains("completed");

    if (currentFilter === 'all') {
      todo.style.display = "flex";
    }else if (currentFilter === 'active') {
      todo.style.display = isCompleted ? 'none':'flex';
    }else if (currentFilter === 'completed') {
      todo.style.display = isCompleted ? 'flex':'none';
    }
  })
}