//constructor and helper functions for task/todo objects
import {format} from 'date-fns';

const taskFactory = () =>{
    const title = 'New Task';
    const desc = 'A default task template';
    const notes = 'blank notes';
    const dueDate = 'set this somehow';
    const priority = 0;
    const checklist = [{name:'edit this task', value:false}];
    const resolved = false;

    return {title, desc, notes, dueDate, priority, checklist, resolved};
}

//convert a generic object to a task
const taskFromObject = obj =>{
    const task = taskFactory();
    for(let prop in obj){
        task[prop] = obj[prop];
    }
    return task;
}

export {taskFactory, taskFromObject};