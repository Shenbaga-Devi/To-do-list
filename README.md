# To-do-list
# To Do List - JavaScript Project

Welcome to the To Do List project! This project is a simple web application that allows users to add, edit, and remove tasks from a to-do list. The tasks are stored in the browser's local storage so they persist even after the page is reloaded.

## Features

- **Add**: Create new tasks and add them to the list.
- **Edit**: Modify existing tasks.
- **Remove**: Delete tasks from the list.
- **Persistence**: Tasks are saved in the browser's local storage.

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling the application.
- **JavaScript**: For functionality and interactivity

## Usage

1. **Adding Tasks**:
    - Type a task into the input field and click the "Add" button.

2. **Editing Tasks**:
    - Click the "Edit" button next to a task to edit it.

3. **Removing Tasks**:
    - Click the "Remove" button next to a task to delete it.

## File Structure

- `index.html`: The main HTML file for the application.
- `style.css`: Contains styles for the application.
- `script.js`: Contains JavaScript code for functionality.

## Code Explanation

- **HTML**: Provides the structure, including input fields and the task list.
- **CSS**: Styles the application, including input fields, buttons, and task items.
- **JavaScript**:
    - `addTodo()`: Adds new tasks or edits existing tasks.
    - `updateTodo()`: Handles the edit and remove actions.
    - `saveLocalTodos()`: Saves tasks to local storage.
    - `getLocalTodos()`: Retrieves tasks from local storage and displays them.
    - `deleteLocalTodos()`: Deletes tasks from local storage.
    - `editLocalTodos()`: Updates tasks in local storage.

