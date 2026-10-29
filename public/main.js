import TodoEntry from "./TodoEntry.js";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        arrayOfTodos.push(new TodoEntry(arrayOfTodos.length, inputTextField?.value));
        inputTextField.value = '';
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        todosContainer.innerHTML += element.render();
        todosContainer.querySelector(`button[data-id="${element.id}"]`).addEventListener("click", (e) => {
            e.preventDefault();
            deleteTodo(element.id);
        });
    });
}
const deleteTodo = (id) => {
    arrayOfTodos = arrayOfTodos.filter((todo) => todo.id != id);
    buildList();
};
