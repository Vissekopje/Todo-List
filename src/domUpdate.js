import {addToDoItemToProject, updateToDo} from './todos'
import {addProject, getCurrentListOfProjects, getCurrentProject, currentProject} from './project'
import deleteSrc from './images/delete.svg'
const content = document.getElementById('content')
const addToDoItemToProjectHandler = (event) => addToDoItemToProject(event) 

function showToDoForm(){
content.classList.add("visible")
const toDoFormContainer = document.createElement('div')
const form = document.createElement('form')
form.className = 'todoform'

const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'title'

const titleInput = document.createElement('input')
titleInput.type = 'text'
titleInput.id = 'title'
titleInput.name = 'title'
titleInput.required = true
titleInput.placeholder = "Task Title"

const titleRow = document.createElement('div')
titleRow.className = 'form-row'
titleRow.appendChild(titleLabel)
titleRow.appendChild(titleInput)

const descriptionLabel = document.createElement('label');
descriptionLabel.htmlFor = 'description'

const descriptionInput = document.createElement('textarea')
descriptionInput.name = 'description'
descriptionInput.id = 'description'
descriptionInput.required = false
descriptionInput.placeholder = "Description"

const descriptionRow = document.createElement('div')
descriptionRow.className = 'form-row'
descriptionRow.appendChild(descriptionLabel)
descriptionRow.appendChild(descriptionInput)

const dueDateLabel = document.createElement('label');
dueDateLabel.htmlFor = 'dueDate'
dueDateLabel.textContent = 'Due date:'
dueDateLabel.placeholder = 'Due Date'

const dueDateInput = document.createElement('input')
dueDateInput.type = 'date'
dueDateInput.id = 'dueDate'
dueDateInput.name = 'dueDate'
dueDateInput.required = true

const dueDateRow = document.createElement('div')
dueDateRow.className = 'form-row'
dueDateRow.appendChild(dueDateLabel)
dueDateRow.appendChild(dueDateInput)

const priorityLabel = document.createElement('label');
priorityLabel.htmlFor = 'priority'
priorityLabel.textContent = 'Priority:'

const prioritySelect = document.createElement('select')
prioritySelect.id = 'priority'
prioritySelect.name = 'priority'

const lowOption = document.createElement('option')
lowOption.textContent = 'Low'
lowOption.value = 'low'

const mediumOption = document.createElement('option')
mediumOption.textContent = 'Medium'
mediumOption.value = 'medium'

const highOption = document.createElement('option')
highOption.textContent = 'High'
highOption.value = 'high'

prioritySelect.appendChild(lowOption)
prioritySelect.appendChild(mediumOption)
prioritySelect.appendChild(highOption)

const priorityRow = document.createElement('div')
priorityRow.className = 'form-row'
priorityRow.appendChild(priorityLabel)
priorityRow.appendChild(prioritySelect)

const confirmButton = document.createElement('button')
confirmButton.type = 'submit'
confirmButton.classList.add('submit-todo')
confirmButton.textContent = 'Submit'

const cancelButton = document.createElement('button')
cancelButton.classList.add('cancel-todo')
cancelButton.textContent = 'Cancel'

confirmButton.addEventListener('click', addToDoItemToProjectHandler)

const confirmCancelRow = document.createElement('div')
confirmCancelRow.className = 'form-row'
confirmCancelRow.appendChild(confirmButton)
confirmCancelRow.appendChild(cancelButton)

form.appendChild(titleRow)
form.appendChild(descriptionRow)
form.appendChild(dueDateRow)
form.appendChild(priorityRow)
form.appendChild(confirmCancelRow)

toDoFormContainer.appendChild(form)
content.appendChild(toDoFormContainer)
}


function showProjectForm(){
content.classList.add("visible")
const projectContainer = document.createElement('div')
const form = document.createElement('form')
form.className = 'projectform'

const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'title'
titleLabel.textContent = 'Title:'

const titleInput = document.createElement('input')
titleInput.type = 'text'
titleInput.id = 'projecttitle'
titleInput.name = 'title'
titleInput.required = true

const titleRow = document.createElement('div')
titleRow.className = 'form-row'
titleRow.appendChild(titleLabel)
titleRow.appendChild(titleInput)

const colorLabel = document.createElement('label');
colorLabel.htmlFor = 'color'
colorLabel.textContent = 'Color:'

const colorInput = document.createElement('input')
colorInput.type = 'color'
colorInput.id = 'color'
colorInput.name = 'color'
colorInput.required = false

const colorRow = document.createElement('div')
colorRow.className = 'form-row'
colorRow.appendChild(colorLabel)
colorRow.appendChild(colorInput)

const confirmButton = document.createElement('button')
confirmButton.type = 'submit'
confirmButton.class = 'submit-todo'
confirmButton.textContent = 'Submit'

confirmButton.addEventListener('click', (event) => addProject(event))

const cancelButton = document.createElement('button')
cancelButton.class = 'cancel-todo'
cancelButton.textContent = 'Cancel'

const confirmCancelRow = document.createElement('div')
confirmCancelRow.className = 'form-row'
confirmCancelRow.appendChild(confirmButton)
confirmCancelRow.appendChild(cancelButton)

form.appendChild(titleRow)
form.appendChild(colorRow)
form.appendChild(confirmCancelRow)

projectContainer.appendChild(form)
content.appendChild(projectContainer)
}

function displayProjects(){
const projectContainer = document.getElementById('myprojects')
while (projectContainer.firstChild){
    projectContainer.removeChild(projectContainer.lastChild)
}
projectContainer.textContent = "My Projects"
let indexNumber = 0
const currentListOfProjects = getCurrentListOfProjects()
 currentListOfProjects.forEach((project) => {
    const projectWrapper = document.createElement("a")
    projectWrapper.href = "#"
    projectWrapper.classList.add('projectwrapper')
    projectWrapper.dataset.index = indexNumber
    projectWrapper.style.color = `${project.color}`

    const titleProject = document.createElement('div')

    titleProject.textContent = `${project.title}`

    projectWrapper.appendChild(titleProject)
    projectContainer.appendChild(projectWrapper)
    indexNumber++
 })

 document.querySelectorAll('.projectwrapper').forEach(project => 
        project.addEventListener('click', () => clickDisplayToDos(project.dataset.index)))
}

function displayToDos(){
    const  todoContainer = document.getElementById('todos')
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.lastChild)
    }
    todoContainer.textContent = "To-do"
    let indexNumber = 0
    const currentProject = getCurrentProject()
    const currentProjectList = currentProject.list
    currentProjectList.forEach((todo) => {
        const toDoCard = document.createElement('div')
        toDoCard.classList.add('todocard')
        toDoCard.dataset.index = indexNumber

        const checkBoxToDoContainer = document.createElement('label')
        checkBoxToDoContainer.classList.add('checkboxcontainer')

        const checkBoxToDoInput = document.createElement('input')
        checkBoxToDoInput.type = 'checkbox'

        const checkBoxToDoSpan = document.createElement('span')
        checkBoxToDoSpan.classList.add('checkmark')

        checkBoxToDoContainer.appendChild(checkBoxToDoInput)
        checkBoxToDoContainer.appendChild(checkBoxToDoSpan)

        const informationContainer = document.createElement('div')
        informationContainer.classList.add('informationcontainer')

        const titleTodo = document.createElement('div')
        titleTodo.textContent = `${todo.title}`

        const descriptionToDo = document.createElement('p')
        const descriptionText = setDiscription(`${todo.description}`)
        descriptionToDo.textContent = descriptionText

        const dueDateToDo = document.createElement('div')
        dueDateToDo.textContent = `${todo.dueDate}`

        informationContainer.appendChild(titleTodo)
        informationContainer.appendChild(descriptionToDo)
        informationContainer.appendChild(dueDateToDo)

        const deleteContainer = document.createElement('div')
        deleteContainer.classList.add('deletecontainer')

        const deleteA = document.createElement('a')
        deleteA.href = "#"
        const deleteIcon = document.createElement('img')
        deleteIcon.src = `${deleteSrc}`
        deleteIcon.alt = "Delete button"
        deleteIcon.height = "25"
        
        
        deleteA.appendChild(deleteIcon)
        deleteContainer.appendChild(deleteA)

        toDoCard.appendChild(checkBoxToDoContainer)
        toDoCard.appendChild(informationContainer)
        toDoCard.appendChild(deleteContainer)

        todoContainer.appendChild(toDoCard)

        setPriority(toDoCard, `${todo.priority}`)

        indexNumber++
    })
    document.querySelectorAll('.informationcontainer').forEach(todo => 
        todo.addEventListener('click', () => editToDo(todo.parentElement.dataset.index)))
    document.querySelectorAll('.deletecontainer').forEach(todo =>
        todo.addEventListener("click", () => deleteToDo(todo.parentElement.dataset.index)))
}
// function that is called when a project is clicked
function clickDisplayToDos(index){
    const clickedProject = getCurrentListOfProjects()[index]    
    currentProject = clickedProject
    displayToDos()
}

function clearContent(){
    while (content.firstChild){
        content.removeChild(content.lastChild)
    }
    content.classList.remove("visible")
}

function setPriority(toDoCard, priority){
    if(priority === "high"){
        toDoCard.classList.add("high")
        return
    }
    else if(priority === "medium"){
        toDoCard.classList.add("medium")
        return
    }
    else if(priority === "low"){
        toDoCard.classList.add("low")
        return
    }
}

function setDiscription(description){
    if (description.length < 120){
        return description
    }
    else if (description.length >= 120){
        return `${description.slice(0, 120)}` + "..."
    }
    else {
        return "Error"
    }
 }

 function editToDo(index){
    showToDoForm()

    const confirmButton = document.querySelector('.submit-todo')
    confirmButton.removeEventListener('click', addToDoItemToProjectHandler)

    const titleForm = document.getElementById("title")
    const descriptionForm = document.getElementById("description")
    const dueDateForm = document.getElementById("dueDate")
    const priorityForm = document.getElementById("priority")

    const currentProject = getCurrentProject()
    const currentProjectToDoList = currentProject.list
    const clickedToDo = currentProjectToDoList[index]

    titleForm.value = `${clickedToDo.title}`
    descriptionForm.textContent = `${clickedToDo.description}`
    dueDateForm.value = `${clickedToDo.dueDate}`
    priorityForm.value = `${clickedToDo.priority}`

    confirmButton.addEventListener('click', (event) => updateToDo(event, index))
 
 }

 function deleteToDo(index){
    const currentProject = getCurrentProject()
    const currentProjectToDoList = currentProject.list
    currentProjectToDoList.splice(index, 1)
    console.log(currentProjectToDoList)
    displayToDos()
 }
// function that is called when new project is added

// function that is called when new to do item is added

// function that is called when to do item is checked on/off

// function that is called when a project is clicked

// function that is called when to do item is clicked

// function that is called when an item is deleted

// function that is called when a project is deleted (might add pop-up)

export{
    showToDoForm,
    showProjectForm,
    displayProjects,
    displayToDos,
    clearContent
}