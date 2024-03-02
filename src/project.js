import {displayProjects, clearContent, displayToDos} from "./domUpdate"

let ProjectList = []

class Project{
    constructor(title, color, list){
        this.title = title
        this.color = color
        this.list = list
    }

}
const startingProject = new Project("Home", "Purple", [])
ProjectList.push(startingProject)
let currentProject = startingProject

const getCurrentListOfProjects = () => ProjectList
const getCurrentProject = () => currentProject

function addProject(event){
    event.preventDefault()
    const content = document.getElementById('content')
    content.classList.remove("visible")
    const projectTitle = document.getElementById("projecttitle")
    const projectColor = document.getElementById("color")
    
    const newProject = new Project(projectTitle.value, projectColor.value, [])
    // add function that updates active project
    currentProject = newProject
    ProjectList.push(newProject)
    // function that updates dom
    displayProjects()
    displayToDos()
    clearContent()
}

function setProjectList(userProjects){
    ProjectList = userProjects
    currentProject = ProjectList[0]
}

export{
    Project,
    addProject,
    getCurrentProject,
    getCurrentListOfProjects,
    currentProject,
    setProjectList
}