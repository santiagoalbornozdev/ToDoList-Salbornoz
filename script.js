const btnAgregar = document.getElementById('btn-agregar');
const inputAgregar = document.getElementById('input-agregar');
const taskList = document.getElementById('task-list');

btnAgregar.addEventListener('click', addTask);

inputAgregar.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = inputAgregar.value.trim();

    if (taskText == "") {
        alert("por favor, escriba una tarea");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completo');
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    inputAgregar.value = "";
}