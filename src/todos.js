import {getCurrentProject, getCurrentListOfProjects} from './project'
import {displayToDos} from './domUpdate'

const ToDoList = [{title: "Koning van Katoren", description: "Jan Terlouw", dueDate: "210", priority: "true"}]
class ToDoItem{
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

function addToDoItemToProject(event){
    // add variables for input from user
    event.preventDefault()
    const toDoTitle = document.getElementById("title")
    const toDoDescription = document.getElementById("description")
    const toDodueDate = document.getElementById("dueDate")
    const toDoPriority = document.getElementById("priority")
    
    const newToDoItem = new ToDoItem(toDoTitle.value, toDoDescription.value,
        toDodueDate.value, toDoPriority.value)
    // add function that finds active project
    
    const currentProject = getCurrentProject()
    const currentProjectList = currentProject.list
    currentProjectList.push(newToDoItem)
    const currentListOfProjects = getCurrentListOfProjects()
   
    // function that updates dom
    displayToDos()
};

export{
    ToDoItem,
    addToDoItemToProject,
    ToDoList
}