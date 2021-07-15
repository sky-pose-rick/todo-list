import { taskFactory } from "./taskObjModule";

//constructor and helper functions for project objects
const projectFactory = () =>{
    const taskList = [taskFactory()];
    let name = "New Project";

    const addTask = ()=>{
        taskList.push(taskFactory());
    }

    return {name, taskList, addTask};
}

export {projectFactory};