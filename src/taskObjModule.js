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

    const copy = () =>{

        const cCopy = checkList.map(elem, ()=>
        {
            return [elem[0], elem[1]];
        })

        const newTask = taskFactory({
            title: title,
            desc: desc,
            notes: notes,
            dueDate: 'bad for now',
            priority: priority,
            checkList: cCopy,
            resolved: resolved,
        });

        return newTask;
    }

    return {title, desc, notes, dueDate, priority, checkList, resolved};
}

//convert a generic object to a task
const taskFromObject = obj =>{
    let task = taskFactory(obj);
    return task;
}

export {taskFactory, taskFromObject};