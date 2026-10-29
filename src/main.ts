import TodoEntry from "./TodoEntry.js";
const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;
type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: TodoEntry[] = [];

if (addButton && inputTextField && todosContainer){
    
    addButton?.addEventListener('click',(e) =>{
        
        arrayOfTodos.push( new TodoEntry( arrayOfTodos.length, inputTextField?.value));
        inputTextField.value='';
        buildList();
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        todosContainer.innerHTML+=element.render();
 
        todosContainer.querySelector(`button[data-id="${element.id}"]`)!.addEventListener("click",(e: any)=>{
            e.preventDefault();
            deleteTodo(element.id);
        })
        
       
    });
}

const deleteTodo = (id:number)=>{
    arrayOfTodos = arrayOfTodos.filter((todo)=>todo.id!=id);
    buildList()

}