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
    console.log(inputElement);
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
        <span>${todoItem}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onClick="todoList.splice(${i}, 1); // delete button
        displayItems();">Delete</button>
        `;
    }
    displayElement.innerHTML = newHTML;
}