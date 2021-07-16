import { taskFactory, taskFromObject } from "./taskObjModule";

//constructor and helper functions for project objects
const projectFactory = () =>{
    const taskList = [taskFactory()];
    let name = "New Project";

    const addTask = ()=>{
        taskList.push(taskFactory());
    }

    return {name, taskList, addTask};
}

//convert a generic object to a project
const projectFromObject = (obj) =>{
    const project = projectFactory();
    project.name = obj.name;
    //remove the default task
    project.taskList = [];
    obj.taskList.forEach(element => {
        project.taskList.push(taskFromObject(element));
    });

    return project;
};

export {projectFactory, projectFromObject};