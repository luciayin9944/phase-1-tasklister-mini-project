

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const input = document.querySelector("#new-task-description")
    const newTaskName = input.value

    buildToDo(newTaskName);
    event.target.reset()
  }

  function buildToDo(taskName) {
    const toDoList = document.createElement("li");
    toDoList.textContent = taskName;

    document.getElementById("tasks").appendChild(toDoList);
  }
});

















// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const form = document.querySelector("#create-task-form")


    //并没有把处理逻辑写在函数体内，而是把任务输入获取等操作写在了函数外面，结构上错误。
//   function handleSubmit(event) {
//     event.preventDefault()
//   } 

//   //WRONG: 你是从表单中获取输入内容，实际上我们只需要抓取 input 的 .value，
//   // 而你使用了 .name 和 .placeholder，这是获取 HTML 属性，不是用户输入的值。
//   // const newTaskName = task.target.name.value
//   // const newTaskDescription = task.target.placeholder.value

//   const newTaskName = event.target["new-task-description"].value;

//   const newTask = {
//     name:newTaskName,
//     descriprion: newTaskDescription
//   }

//   // need to call buildToDo
//   buildToDo(newTask)

//   function buildToDo(task) {
//     const toDoList = document.createElement("li")
//     const taskName = document.createElement("p")
//     const taskDescription = document.createElement("p")
  
//     taskName.textContent = task.name
//     //WRONG: taskDescription.textContent = task.taskDescription
//     taskDescription.textContent = task.description
//     //你创建了 li，但没把它加入 <ul id="tasks"> 中。
//     toDoList.append(taskName, taskDescription)
//   }
  
  
//   form.addEventListener("submit", handleSubmit)

// });





















