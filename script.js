const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function createTodo(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if(task) {
        createTodo(task);
        input.value = '';
    }
});

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addBtn.click();
});
