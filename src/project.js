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
    const projectTitle = document.getElementById("projecttitle")
    const projectColor = document.getElementById("color")
    
    const newProject = new Project(projectTitle.value, projectColor.value, [])
    // add function that finds active project
    currentProject = newProject
    ProjectList.push(newProject)
    // function that updates dom
    console.log(ProjectList)
    console.log(currentProject)
}


export{
    Project,
    addProject,
    getCurrentProject,
    getCurrentListOfProjects
}