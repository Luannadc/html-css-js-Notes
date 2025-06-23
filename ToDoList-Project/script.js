const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// we used the document object and its getElementById() method to select our input box and list container elements. Then we assigned them to the inputBox and listContainer variables.
// create our addTask function
function addTask() {
    const task = inputBox.value.trim();
    // we used the trim() method to remove any leading or trailing whitespace from the input value.
    if(!task){
        alert("You must write something!");
        // if the task is empty, we show an alert message.
        return;
    }
   const li = document.createElement("li");
   // we create a new list item element using the createElement() method and assign it to the li variable.
   li.innerHTML = ` 
   <label>
         <input type="checkbox">
         <span class="task">${task}</span>
         </label>
         <span class="edit-btn">Edit</span>
            <span class="delete-btn">Delete</span>
            `;
    // we set the innerHTML property of the li element to a string that contains the HTML structure for our task item, including a checkbox, task text, edit button, and delete button.
    listContainer.appendChild(li);
    // we append the li element to the listContainer element using the appendChild() method.
    inputBox.value = "";
    // we clear the input box by setting its value to an empty string.
}
const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");
// we use the querySelector() method to select the checkbox, edit button, task text span, and delete button from the li element.
checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
}); // we add an event listener to the checkbox that toggles the "completed" class on the li element based on whether the checkbox is checked or not.
editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent); //prompt the user to edit the task text
  if (update !== null) {
    taskSpan.textContent = update;
    li.classList.remove("completed");
  }
});
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");
function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = 
    document.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}
updateCounters();
checkbox.addEventListner("click", function()){
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
}
editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent);
  if (update !== null) {
    taskSpan.textContent = update;
    li.classList.remove("completed");
    //add the code below
    checkbox.checked = false;
    updateCounters();
  }
});
deleteBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    updateCounters();
  }
});
