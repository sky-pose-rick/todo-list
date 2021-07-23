import { taskFactory, taskFromObject } from "./taskObjModule";

//constructor and helper functions for project objects
const projectFactory = (name, taskList) =>{

    const addTask = ()=>{
        const newTask = taskFactory({
            title: 'New Task', 
            desc: 'A blank task', 
            notes: 'blank notes', 
            dueDate: new Date(), 
            priority: 'none', 
            checklist: [['sample checkbox', false]], 
            resolved: false
        });
        taskList.push(newTask);
    }

    //delete a task from the list
    const deleteTask = (t) =>{
        for(let i = 0; i < taskList.length; i++)
        {
            if(taskList[i] === t){
                taskList.splice(i, 1);
                break;
            }
        }
    }

    return {name, taskList, addTask, deleteTask};
}

//convert a generic object to a project
const projectFromObject = (obj) =>{
    let taskList = obj.taskList.map(elem=>taskFromObject(elem));
    let project = projectFactory(obj.name, taskList);

    return project;
};

export {projectFactory, projectFromObject};