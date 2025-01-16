const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let editTodo = null;

addBtn.addEventListener('click', () => {
    const inputTodo = inputBox.value.trim();
    
    if (inputTodo) {
        if (editTodo) {
            editTodo.querySelector('p').textContent = inputTodo;
            addBtn.textContent = 'Add';
            editTodo = null;
        } else {
            const li = document.createElement('li');
            li.innerHTML = `
                <p>${inputTodo}</p>
                <button class="done">Done</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            todoList.appendChild(li);
        }
        inputBox.value = '';
    } else {
        alert("Todo item can't be blank.");
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('done')) { 
        e.target.parentElement.classList.toggle('completed');
    } else if (e.target.classList.contains('edit')) {
        inputBox.value = e.target.parentElement.querySelector('p').textContent;
        addBtn.textContent = 'Update';
        editTodo = e.target.parentElement;
    }
});
