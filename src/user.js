import {getCurrentListOfProjects} from "./project"

function populateStorage(){
    const userProjects = getCurrentListOfProjects()
    localStorage.setItem("userProjects", JSON.stringify(userProjects))
 }

 export{
    populateStorage
 }