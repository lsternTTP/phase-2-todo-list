// get todo list ul element
const todoList = document.getElementById("todo-list");

// get "Add" button and add click listener to create a new list item
const addItem = document.getElementById("add-item");
addItem.addEventListener("click", addItemToList);


// add a new todo list item
function addItemToList() {
  event.preventDefault();
  const newItemText = document.getElementById("new-item").value;

  newItem = document.createElement("li");
  newItem.innerHTML = newItemText;
  newItem.className = "todo-list-item";

  todoList.appendChild(newItem);
  createCheckmarkButton(newItem);

  document.getElementById("new-item").value = "";
};


// create a checkmark button for each list item
function createCheckmarkButton(item) {
  newButton = document.createElement("button");
  newButton.className = "checkmark-button";
  newButton.innerHTML = "✓";

  // remove the list item when checkmark clicked
  newButton.addEventListener("click",
    () => todoList.removeChild(item));

  item.appendChild(newButton);
};
