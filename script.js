const input = document.querySelector("#inputTask");
const addToDo = document.querySelector("#addTask");
const containerToDo = document.querySelector("#taskContainer");
// 3eme jour , trouve  comment SUPPRIMER correctement les tâches

addToDo.addEventListener("click", function () {
  if (input.value != "") {
    let taskGroup = document.createElement("div");
    taskGroup.className = "taskGroup";

    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.className = "taskCheckbox";

    let sentence = document.createElement("p");
    sentence.innerText = input.value;

    taskCheckbox.addEventListener("change", function () {
      if (taskCheckbox.checked) {
        sentence.style.textDecoration = "line-through";
      } else {
        sentence.style.textDecoration = "none";
      }
    });

    let taskDelete = document.createElement("button");
    taskDelete.innerText = "-";
    taskDelete.addEventListener("click", function () {
      containerToDo.removeChild(taskGroup);
    });

    taskGroup.appendChild(taskDelete);

    taskGroup.appendChild(sentence);
    taskGroup.appendChild(taskCheckbox);
    containerToDo.appendChild(taskGroup);
    input.value = "";
  }
});
