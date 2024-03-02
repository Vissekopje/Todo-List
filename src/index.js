import './style.css';
import {ToDoItem} from './todos'
import {currentProject, getCurrentProject, setProjectList} from './project'
import {showToDoForm, showProjectForm, displayProjects, displayToDos} from './domUpdate'
import { populateStorage } from './user';

const toDoButton = document.querySelector('.addtodo')
toDoButton.addEventListener('click', showToDoForm)

const projectButton = document.querySelector('.addproject')
projectButton.addEventListener('click', showProjectForm)

if(!localStorage.getItem("userProjects")){
    populateStorage()
}
else{
    setProjectList(JSON.parse(localStorage.getItem("userProjects")))
    displayToDos()
    displayProjects()
}

