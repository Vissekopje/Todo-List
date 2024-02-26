
class Project{
    constructor(name, color){
        this.name = name
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

export{
    Project
}