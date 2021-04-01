// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //load task from storage
  window.addEventListener('DOMContentLoaded', loadStorage);
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', delItem);
  // Clear task
  clearBtn.addEventListener('click', clearTasks);
  // Filter task
  filter.addEventListener('keyup', filterTasks);
}

// Functions

function loadStorage(){
  let allTasks;
  if(localStorage.getItem('allTasks') === null){
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem('allTasks'));

      allTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));    
      
        //create Link
        const link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="far fa-trash-alt"></i>';
        li.appendChild(link);
        // insert li into the UL
        taskList.appendChild(li);
      } );
  }
  
  
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }
  
    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));    
  
    //create Link
    const link = document.createElement('a');
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    li.appendChild(link);
    // insert li into the UL
    taskList.appendChild(li);

    //Save to Storage
    saveToStorage(taskInput.value);

    taskInput.value = "";  
    e.preventDefault();
}


//Save to Storage
function saveToStorage(task){
  let allTasks;
    if(localStorage.getItem('allTasks') === null){
      allTasks = [];
    } else {
      allTasks = JSON.parse(localStorage.getItem('allTasks'));
    }
    allTasks.push(task);
    localStorage.setItem('allTasks',JSON.stringify(allTasks));

}


//Delete item
function delItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')) {
      e.target.parentElement.parentElement.remove();
      
      //remove from storage
      removeInStorage(e.target.parentElement.parentElement);

    }    
  }
}

function removeInStorage (task) {
  let allTasks;
    if(localStorage.getItem('allTasks') === null){
      allTasks = [];
    } else {
      allTasks = JSON.parse(localStorage.getItem('allTasks'));
      
      allTasks.forEach(function(oneTask, index)  {
        if(oneTask === task.innerText){
          allTasks.splice(index,1);          
        }        
      });
            
      localStorage.setItem('allTasks',JSON.stringify(allTasks));
    }
}

//Delete all items
function clearTasks(e){
  taskList.innerHTML = "";
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
