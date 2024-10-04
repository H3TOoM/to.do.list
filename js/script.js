document.getElementById('btn').addEventListener('click', function() {
    const taskInput = document.getElementById('input');
    const taskValue = taskInput.value;

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('list').appendChild(li);
        taskInput.value = '';
    } else {
        alert('please add a task!')
    }
});


