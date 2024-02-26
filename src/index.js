import './style.css';
import {ToDoItem, addToDoItemToProject} from './todos'
import {Project} from './project'
import {showToDoForm, showProjectForm} from './domUpdate'

const toDoButton = document.querySelector('.addtodo')
toDoButton.addEventListener('click', showToDoForm)

const projectButton = document.querySelector('.addproject')
projectButton.addEventListener('click', showProjectForm)

console.log('apple juicer')
const apple = new ToDoItem("d", 'd', '2', '346')
const pear = new Project('Cleo', 'purple')

console.log(apple)
console.log(pear)