//constructor and helper functions for task/todo objects
import {format} from 'date-fns';

const taskFactory = ({title,
    desc,
    notes,
    dueDate,
    priority,
    checkList,
    resolved}) =>{
    /*const title = 'New Task';
    const desc = 'A default task template';
    const notes = 'blank notes';
    const dueDate = 'set this somehow';
    const priority = 0;
    const checklist = null;
    const resolved = false;*/

    return {title, desc, notes, dueDate, priority, checkList, resolved};
}

//convert a generic object to a task
const taskFromObject = obj =>{
    let task = taskFactory(obj);
    return task;
}

export {taskFactory, taskFromObject};