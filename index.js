const form = document.querySelector('form')
const button = document.querySelector('button')
const toDoArray = []
const task = document.querySelector("#task")
const dueDate = document.querySelector("#due")
const status = document.querySelector("#status")
const updatedStatus = document.createElement("h4")
const date = new Date()
const list = document.querySelector("table")
const addNewSec = document.querySelector(".addNew")
const showListSec = document.querySelector(".showListSec")
const addNewBtn = document.querySelector("#addNewBtn")
const showListBtn = document.querySelector('#showListBtn')
const cancel = document.querySelector('#cancel')
const state = {
  taskList: []
}
let theList = ""
let theDate = ''
const hideTask = (event) => {
  if (addNewSec.style.display === "none") {
    addNewSec.style.display = "block";
    task.value = '';
    due.value = '';
  } else {
    addNewSec.style.display = "none";
  }
}

// const hideList = (event) => {
//   if (showListSec.style.display === "block") {
//     showListSec.style.display = "none";

//   } else {
//     showListSec.style.display = "none";
//   }
// }
addNewBtn.addEventListener('click', () => {
  hideTask(); showListSec.style.display = 'none'; addNewBtn.style.display = 'none'
}

)

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let newObj = {}
  newObj.task = task.value
  newObj.due = dueDate.value
  toDoArray.push(newObj)
  console.log(toDoArray);
  hideTask()
  showListSec.style.display = 'block'
  addNewBtn.style.display = 'block'
  state.taskList =
    // if(date.getDate()> dueDate.value.split('-')[2]*1){status.setAttribute("class","red");
    //   status.innerText = "Status: DELAYED"
    // }
    console.log(dueDate.value.split('-')[1] * 1);
})

showListBtn.addEventListener('click', (event) => {
  console.log(toDoArray)
  for (i = 0; i < toDoArray.length; i++) {

    theList += `<td>${toDoArray[i].task}</td>`
    theDate += `<td>${toDoArray[i].due}</td>`

  } list.innerHTML = `
<tr>
<th>Task</th>
${theList}
</tr> 

<tr>
<th> Due</th>
${theDate}</tr>`;
  theList = "";
  theDate = '';
  if (addNewBtn.style.display == 'block') {
     addNewBtn.style.display = 'none'; showListBtn.innerText ='BACK'} else 
     { addNewBtn.style.display = 'block'; showListBtn.innerText ='Show List'
      list.innerHTML =''
     }
})

cancel.addEventListener('click', ()=>{hideTask();
  addNewBtn.style.display = 'block'; showListSec.style.display = 'block'})









// console.log("sweet")
// console.log(form)