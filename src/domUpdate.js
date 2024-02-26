const content = document.getElementById('content')

function showToDoForm(){
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
highOption.value = 'High'

prioritySelect.appendChild(lowOption)
prioritySelect.appendChild(mediumOption)
prioritySelect.appendChild(highOption)

const priorityRow = document.createElement('div')
priorityRow.className = 'form-row'
priorityRow.appendChild(priorityLabel)
priorityRow.appendChild(prioritySelect)

form.appendChild(titleRow)
form.appendChild(descriptionRow)
form.appendChild(dueDateRow)
form.appendChild(priorityRow)

toDoFormContainer.appendChild(form)
content.appendChild(toDoFormContainer)
}
// function that is called when new project is added

// function that is called when new to do item is added

// function that is called when to do item is checked on/off

// function that is called when a project is clicked

// function that is called when to do item is clicked

// function that is called when an item is deleted

// function that is called when a project is deleted (might add pop-up)

export{
    showToDoForm
}