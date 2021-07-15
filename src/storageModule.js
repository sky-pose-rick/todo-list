import {projectFactory} from "./projectObjModule";


//hold the project list and handle localstorage functions
let projectList;
const storageName = 'Odin-Todo';

//load the project list from local storage
const loadProjectList = () =>{
    const localObj = JSON.parse(localStorage.getItem(storageName));
    console.log(localObj);

    //try to load from storage
    projectList = localObj;

    //if no results found, create a default one
    if(projectList.length === 0){
        console.log('initialize project list');
        createNewProject();
    }

}

//store the project list in local storage
const storeProjectList = () =>{
    localStorage.setItem(storageName, JSON.stringify(projectList));
    console.log(projectList);
}

//reset the local storage
const resetStorage = () =>{
    projectList = [];
    localStorage.setItem(storageName, JSON.stringify(null));
    //todo: update UI or let caller do it
}

//let the project have access to project list
const getProjectList = () =>{
    return projectList;
}

//add a blank project to the list
const createNewProject = () =>{
    const p = projectFactory();
    projectList.push(p);
    storeProjectList();
}

export {loadProjectList, storeProjectList, resetStorage, getProjectList, createNewProject};
