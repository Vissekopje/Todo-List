import './style.css';
import {ToDoItem} from './todos'
import {Project} from './project'
import {showToDoForm} from './domUpdate'

const toDoButton = document.querySelector('.addtodo')
toDoButton.addEventListener('click', showToDoForm)

console.log('apple juicer')
const apple = new ToDoItem("d", 'd', '2', '346')
const pear = new Project('Cleo', 'purple')

console.log(apple)
console.log(pear)