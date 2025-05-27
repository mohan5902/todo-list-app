
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  li.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      li.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
      li.remove();
    }
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
