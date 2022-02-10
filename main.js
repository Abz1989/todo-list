//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

//Event Listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event){
    //Prevent from submitting
    event.preventDefault();
	if (todoInput.value == ''){
		confirm('PLEASE DON\'T TYPE ANYTHING!!!');
	} else {
	document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) +
		',' + Math.round(Math.random() * 255 ) + 
		',' + Math.round(Math.random() * 255) + ')';
		//Todo div inside todolist (dynamic)
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Marked Button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check-square"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Delete Button 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //Append to List 
    todoList.appendChild(todoDiv);
    //Clear TodoInput Value
    todoInput.value ="";
	}
    
}

function deleteCheck(e){
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });       

    }

    //Check Mark
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
        }
    });
}