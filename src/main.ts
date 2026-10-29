const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer){
    
    addButton?.addEventListener('click',(e) =>{
        
        arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextField?.value});
        inputTextField.value='';
        buildList();
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card", "card-body", "mt-1", "shadow")
        let title = document.createElement('h3');
        let id = document.createElement('p');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn-solid", "theme-danger", "w-100")
        deleteBtn.textContent="Delete"
        id.classList.add("small")
        id.textContent = "ID: " + element.id;

        title.textContent = "Tytuł: " + element.title;
        container.appendChild(id);

        container.appendChild(title);
        container.appendChild(deleteBtn);
        deleteBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            deleteTodo(element.id);
        })
        todosContainer?.appendChild(container);
        
    });
}

const deleteTodo = (id:number)=>{
    arrayOfTodos = arrayOfTodos.filter((todo)=>todo.id!=id);
    buildList()

}