let todoInputEl = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");

const addBtn = document.querySelector(".add-btn");

let arrTodos = [];

addBtn.addEventListener("click", function(){
  addTodo()
})

function addTodo(){

  // Creating list items
  let li = document.createElement("li");
  li.classList.add("todo-item")
  
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
  })

  // Checkboxes
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  checkBox.addEventListener("change", function(){
    if(checkBox.checked){
      li.classList.add("completed")
    }else{
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