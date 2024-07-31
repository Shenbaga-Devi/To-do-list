// Accessing DOM elements
const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Variable to keep track of which todo item is being edited
let editTodo = null;

// Function to add a new todo or update an existing one
const addTodo = () => {
    const inputText = inputBox.value.trim();
    
    // Check if input is empty
    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }

    if (addBtn.value === "Edit") {
        // Update the todo item if in edit mode
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    } else {
        // Creating new list item (li) for the todo
        const li = document.createElement("li");

        // Creating checkbox for the todo item
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        li.appendChild(checkbox);

        // Creating paragraph (p) to hold the todo text
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        // Creating Edit button for the todo item
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        // Creating Delete button for the todo item
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        // Appending the new todo item to the todo list
        todoList.appendChild(li);
        inputBox.value = "";

        // Save the new todo item to local storage
        saveLocalTodos(inputText);
    }
}

// Function to handle updates like Edit or Delete
const updateTodo = (e) => {
    // Handle Delete button click
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }

    // Handle Edit button click
    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}

// Function to save todo items to local storage
const saveLocalTodos = (todo) => {
    let todos;
    // Check if there are already todos in local storage
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to load and display todos from local storage
const getLocalTodos = () => {
    let todos;
    // Check if there are todos in local storage
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            // Creating and displaying each todo item
            const li = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            li.appendChild(checkbox);

            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
        });
    }
}

// Function to delete a todo item from local storage
const deleteLocalTodos = (todo) => {
    let todos;
    // Check if there are todos in local storage
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // Find and remove the deleted todo from the array
    let todoText = todo.children[1].innerHTML; // Adjusted to target the correct element
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to update the edited todo item in local storage
const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Event listeners for loading todos, adding todos, and updating todos
document.addEventListener('DOMContentLoaded', getLocalTodos);
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
