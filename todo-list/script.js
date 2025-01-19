function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach(todo => {
    let listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    let taskSpan = document.createElement('span');
    taskSpan.textContent = todo.task;
    if (todo.completed) {
      taskSpan.style.textDecoration = 'line-through'; //خط میکشه روش که نشون به کار انجام شده
    }
    
    let badge = document.createElement('span');
    badge.className = 'badge bg-primary rounded-pill'; 
    
    //ساخت دکمه کامپلیتد

    let completeButton = document.createElement('i');
    completeButton.className = 'fa fa-check';
    completeButton.onclick = function() {
      todo.completed = !todo.completed; 
      populateTodoList(todos);
    };

    //ساخت دکمه دیلیت
    let deleteButton = document.createElement('i');
    deleteButton.className = 'fa fa-trash';
    deleteButton.onclick = function() {
      todos.splice(todos.indexOf(todo), 1); 
      populateTodoList(todos); 
    };
    
    //همه رو اضافه میکنیم 
    badge.appendChild(completeButton);
    badge.appendChild(deleteButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(badge);
    list.appendChild(listItem);
  });
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputField = document.getElementById('todoInput');
  let newTask = inputField.value.trim();
  
  if (newTask) {
    todos.push({ task: newTask, completed: false }); 
    populateTodoList(todos); 
    inputField.value = ''; 
  }
}


let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: true }, // Marked as completed for demonstration
];


populateTodoList(todos);


// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }
