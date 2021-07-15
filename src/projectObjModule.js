import { taskFactory } from "./taskObjModule";

//constructor and helper functions for project objects
const projectFactory = () =>{
    const taskList = [taskFactory()];
    return {taskList};
}

export {projectFactory};