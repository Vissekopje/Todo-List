import './style.css';
import {ToDoItem} from './todos'
import {Project} from './project'
import {showToDoForm, showProjectForm, displayProjects} from './domUpdate'

const toDoButton = document.querySelector('.addtodo')
toDoButton.addEventListener('click', showToDoForm)

const projectButton = document.querySelector('.addproject')
projectButton.addEventListener('click', showProjectForm)

console.log('apple juicer')
const apple = new ToDoItem("d", 'd', '2', '346')
const pear = new Project('Cleo', 'purple')

let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur suscipit veritatis dolorum?"
console.log(text.length)
console.log(apple)
console.log(pear)

displayProjects()