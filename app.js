document.addEventListener('DOMContentLoaded', () => {
    const addTodoButton = document.getElementById('addTodo');
    const inputTodoFiled = document.getElementById('input');
    const todoList = document.getElementById('todoList');

    addTodoButton.addEventListener('click', () => {
        //入力されたTodoを取得
        const inputTodo = inputTodoFiled.value;

        //Todoリストに新しいTodoを追加
        addToDoItem(inputTodo);
    });

    //チェックボックスの状態が変更された時のイベントを監視
    todoList.addEventListener('change', (e) => {
        // 変更がチェックボックスに関するものでなければ無視
        if (e.target.type !== 'checkbox') {
            return;
        }

        handleCheckboxChange(e.target)
    })

});

// Todoリストに新しいTodoアイテムを追加する関数
function addToDoItem(todoText) {
    const listItem = document.createElement('li');

    //チェックボックスとTodoのテキストを追加
    listItem.innerHTML = `<input type='checkbox'> ${todoText}`;

    //Todoリストに新しいアイテムを追加
    todoList.appendChild(listItem);
}

// チェックボックスの状態に応じてスタイルを変更する関数
function handleCheckboxChange(checkbox) {
    const parentListitem = checkbox.parentElement;

    if (checkbox.checked) {
        parentListitem.style.textDecoration = 'line-through';
        parentListitem.style.color = '#cccccc';
    } else {
        parentListitem.style.textDecoration = 'none';
        parentListitem.style.color = '#000000'
    }
}