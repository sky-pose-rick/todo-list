import { taskFactory } from "./taskObjModule";

//constructor and helper functions for project objects
const projectFactory = () =>{
    const taskList = [taskFactory()];
    let name = "New Project";
    return {name, taskList};
}

const projectFromJSON = (obj) =>{
    const p = projectFactory();
    return p;
}

export {projectFactory};