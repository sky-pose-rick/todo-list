import {projectFactory, projectFromObject} from "./projectObjModule";

//hold the project list and handle localstorage functions
let projectList;
const storageName = 'Odin-Todo';

//load the project list from local storage
const loadProjectList = () =>{
    //try to load from storage
    const localObj = JSON.parse(localStorage.getItem(storageName));
    //console.table(localObj);

    //if no results found, create a default one
    if(!localObj || localObj.length === 0){
        console.log('initialize project list');
        projectList = [];
        createNewProject();
    }
    //load existing project, convert generic objects to projects/tasks/checklists
    else{
        projectList = localObj.map(elem => projectFromObject(elem));
    }
    console.table(projectList);
}

//store the project list in local storage
const storeProjectList = () =>{
    localStorage.setItem(storageName, JSON.stringify(projectList));
    //console.log(projectList);
}

//reset the local storage
const resetStorage = () =>{
    projectList = [];
    localStorage.setItem(storageName, JSON.stringify(null));
}

//let the project have access to project list
const getProjectList = () =>{
    return projectList;
}

//add a blank project to the list
const createNewProject = () =>{
    const p = projectFactory("New Project", []);
    p.addTask();
    projectList.push(p);
    storeProjectList();
}

//delete a project from the list
const deleteProject = (p) =>{
    projectList = projectList.filter((elem)=> elem !== p);
    storeProjectList();
}

export {loadProjectList, storeProjectList, resetStorage, getProjectList, createNewProject, deleteProject};
