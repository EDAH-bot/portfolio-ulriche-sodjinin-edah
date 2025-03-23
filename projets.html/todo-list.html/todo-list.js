const taskForm = document.getElementById('task-form') ;
const taskInput = document.getElementById('task-input') ;
const taskList = document.getElementById('task-list') ;

// Charger les tâches depuis le Local Storage
function loadTasks() {
 const tasks = 
JSON.parse(localStorage.getItem('tasks')) || [] ;
 tasks.forEach(task => addTaskToDOM(task)) ;
}
// Ajouter une tâche
function addTask(e) {
    e.preventDefault() ;
    const taskText = taskInput.value.trim() ;
    if (taskText !== '') {
      addTaskToDOM(taskText) ;
      saveTaskToLocalStorage(taskText) ;
      taskInput.value = '' ;
 }
}
// Ajouter une tâche à la liste DOM
function addTaskToDOM(taskText) {
 const li = document.createElement('li') ;
 li.textContent = taskText ;
 const deleteBtn = 
document.createElement('button') ;
 deleteBtn.textContent = 'Supprimer' ;
 deleteBtn.addEventListener('click', () => {
 li.remove() ;
 removeTaskFromLocalStorage(taskText) ;
 }) ;
 li.appendChild(deleteBtn) ;
 taskList.appendChild(li) ;
}
// Sauvegarder une tâche dans le Local Storage
function saveTaskToLocalStorage(taskText) {
 const tasks = 
JSON.parse(localStorage.getItem('tasks')) || [] ;
 tasks.push(taskText) ;
 localStorage.setItem('tasks', 
JSON.stringify(tasks)) ;
}
// Supprimer une tâche du Local Storage
function removeTaskFromLocalStorage(taskText) {
 const tasks = 
JSON.parse(localStorage.getItem('tasks')) || [] ;
 const updatedTasks = tasks.filter(task => task !== 
taskText) ;
 localStorage.setItem('tasks', 
JSON.stringify(updatedTasks)) ;
}
// Événements
taskForm.addEventListener('submit', addTask) ;
loadTasks() ;