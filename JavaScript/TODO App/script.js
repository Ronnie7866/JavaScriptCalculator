let todoList = [
    {
        item : 'Buy Milk', 
        dueDate: '4/10/2023'
    },
    {
        item: 'Go to College', 
        dueDate: '4/10/2023'
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item : todoItem, dueDate : todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let displayElement = document.querySelector('.todo-container');
    let newHTML = '';
    for(let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHTML += `
        <div>
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onClick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        </div>
        `;
    }
    displayElement.innerHTML = newHTML;
}