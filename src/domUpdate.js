import {addToDoItemToProject} from './todos'
import {addProject, getCurrentListOfProjects, getCurrentProject, currentProject} from './project'

const content = document.getElementById('content')

function showToDoForm(){
content.classList.add("visible")
const toDoFormContainer = document.createElement('div')
const form = document.createElement('form')
form.className = 'todoform'

const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'title'
titleLabel.textContent = 'Title:'

const titleInput = document.createElement('input')
titleInput.type = 'text'
titleInput.id = 'title'
titleInput.name = 'title'
titleInput.required = true

const titleRow = document.createElement('div')
titleRow.className = 'form-row'
titleRow.appendChild(titleLabel)
titleRow.appendChild(titleInput)

const descriptionLabel = document.createElement('label');
descriptionLabel.htmlFor = 'description'
descriptionLabel.textContent = 'Description:'

const descriptionInput = document.createElement('input')
descriptionInput.type = 'text'
descriptionInput.id = 'description'
descriptionInput.name = 'description'
descriptionInput.required = false

const descriptionRow = document.createElement('div')
descriptionRow.className = 'form-row'
descriptionRow.appendChild(descriptionLabel)
descriptionRow.appendChild(descriptionInput)

const dueDateLabel = document.createElement('label');
dueDateLabel.htmlFor = 'dueDate'
dueDateLabel.textContent = 'Due date:'

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
confirmButton.class = 'submit-todo'
confirmButton.textContent = 'Submit'

const cancelButton = document.createElement('button')
cancelButton.class = 'cancel-todo'
cancelButton.textContent = 'Cancel'

confirmButton.addEventListener('click', (event) => addToDoItemToProject(event))

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
    const colorProject = document.createElement('div')
    
    titleProject.textContent = `${project.title}`

    projectWrapper.appendChild(titleProject)
    projectWrapper.appendChild(colorProject)
    projectContainer.appendChild(projectWrapper)
    indexNumber++
    console.log(currentListOfProjects)
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

        const titleTodo = document.createElement('div')
        titleTodo.textContent = `${todo.title}`

        const descriptionToDo = document.createElement('div')
        descriptionToDo.textContent = `${todo.description}`

        const dueDateToDo = document.createElement('div')
        dueDateToDo.textContent = `${todo.dueDate}`


        toDoCard.appendChild(titleTodo)
        toDoCard.appendChild(descriptionToDo)
        toDoCard.appendChild(dueDateToDo)

        todoContainer.appendChild(toDoCard)

        setPriority(toDoCard, `${todo.priority}`)

        indexNumber++
    })
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
    clearContent,
    setPriority
}