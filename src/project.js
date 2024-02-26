const ProjectList = []
class Project{
    constructor(title, color){
        this.title = title
        this.color = color
    }
    addProjectToMyProjects(){
        // add variables for input from user
        const newProject = new Project(inputName.value, inputColor.value)
        // add empty array or object for all projects
        myProjects.push(newProject)
        // function that updates dom
    }
}

function addProject(event){
    event.preventDefault()
    const projectTitle = document.getElementById("title")
    const projectColor = document.getElementById("color")
    
    const newProject = new Project(projectTitle.value, projectColor.value)
    // add function that finds active project
    ProjectList.push(newProject)
    // function that updates dom
    console.log(ProjectList)
}
export{
    Project,
    addProject
}