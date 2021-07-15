import {projectFactory} from "./projectObjModule";


//hold the project list and handle localstorage functions
let projectList;
const storageName = 'Odin-Todo';

//load the project list from local storage
const loadProjectList = () =>{
    const localObj = JSON.parse(localStorage.getItem(storageName));

    console.log(localObj);
    //if no existing list is found, create a default one
    if(!localObj || localObj.length === 0){
        projectList = [projectFactory()];
        storeProjectList();
        console.log(projectList);
    }
    //load an existing lis
    else{
        projectList = [];
        //convert json object to array
        for(let prop in localObj){
            projectList.push(localObj.prop);
        }
    }
}

//store the project list in local storage
const storeProjectList = () =>{
    localStorage.setItem(storageName, JSON.stringify(projectList));
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

export {loadProjectList, storeProjectList, resetStorage, getProjectList};
