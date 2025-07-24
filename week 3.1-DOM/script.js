let tododisplay = document.querySelector('.todo-display');
let addtodobtn = document.querySelector('.todo-btn');
let todoinput = document.querySelector('.task-input');

addtodobtn.addEventListener('click', addTodo);

function addTodo() {
    let taskwrapper = document.createElement('div');

    let task = document.createElement('h3');
    task.innerHTML = todoinput.value;

    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = 'Delete';
    deletebtn.addEventListener('click', () => {
        taskwrapper.remove();
    });

    let editbtn = document.createElement('button');
    editbtn.innerHTML = 'Edit';
    editbtn.addEventListener('click', () => {
        let editInput = document.createElement('input');
        editInput.value = task.innerHTML;

        let confirmBtn = document.createElement('button');
        confirmBtn.innerHTML = 'Confirm Edit';

        confirmBtn.addEventListener('click', () => {
            task.innerHTML = editInput.value;
            // Clean up after editing
            editInput.remove();
            confirmBtn.remove();
        });

        // Add the input and confirm button to the wrapper
        taskwrapper.appendChild(editInput);
        taskwrapper.appendChild(confirmBtn);
    });

    taskwrapper.appendChild(task);
    taskwrapper.appendChild(deletebtn);
    taskwrapper.appendChild(editbtn);

    tododisplay.appendChild(taskwrapper);

    todoinput.value = '';
}
