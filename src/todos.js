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
    ToDoList.push(newToDoItem)
    // function that updates dom
    console.log(ToDoList)
};

export{
    ToDoItem,
    addToDoItemToProject,
    ToDoList
}