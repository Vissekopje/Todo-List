
class ToDoItem{
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
    addToDoItemToProject(){
        // add variables for input from user
        const newToDoItem = new ToDoItem(inputTitle.value, inputDescription.value,
            inputdueDate.value, inputPriority.value)
        // add function that finds active project
        activeProject.push(newToDoItem)
        // function that updates dom
    }
}


export{
    ToDoItem
}