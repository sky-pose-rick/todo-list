import { taskFactory, taskFromObject } from "./taskObjModule";

//constructor and helper functions for project objects
const projectFactory = (name, taskList) =>{

    const addTask = ()=>{
        const newTask = taskFactory({
            title: 'New Task', 
            desc: 'A blank task', 
            notes: 'blank notes', 
            dueDate: 'set this somehow', 
            priority: 'none', 
            checkList: null, 
            resolved: false
        });
        taskList.push(newTask);
    }

    return {name, taskList, addTask};
}

//convert a generic object to a project
const projectFromObject = (obj) =>{
    let taskList = obj.taskList.map(elem=>taskFromObject(elem));
    let project = projectFactory(obj.name, taskList);

    return project;
};

export {projectFactory, projectFromObject};