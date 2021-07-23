//constructor and helper functions for task/todo objects
import {format, parse as dateParse, formatDistanceToNow, parseJSON as dateParseJSON} from 'date-fns';

const taskFactory = ({title,
    desc,
    notes,
    dueDate,
    priority,
    checklist,
    resolved}) =>{
    /*const title = 'New Task';
    const desc = 'A default task template';
    const notes = 'blank notes';
    const dueDate = 'set this somehow';
    const priority = 0;
    const checklist = null;
    const resolved = false;*/

    const copy = () =>{

        const cCopy = checklist.map((elem)=>
        {
            return [elem[0], elem[1]];
        })

        const newTask = taskFactory({
            title: title,
            desc: desc,
            notes: notes,
            dueDate: 'bad for now',
            priority: priority,
            checklist: cCopy,
            resolved: resolved,
        });

        return newTask;
    }

    //day day month year
    const getDateString = () =>{
        return format(dueDate, 'eeee d MMMM yyyy');
    };

    const getTimeUntilDueDate = () =>{
        return formatDistanceToNow(dueDate);
    };

    return {title, desc, notes, dueDate, priority, checklist, resolved, copy, getDateString, getTimeUntilDueDate};
}

//convert a generic object to a task
const taskFromObject = obj =>{
    obj.dueDate = new Date(obj.dueDate);
    let task = taskFactory(obj);

    return task;
}

export {taskFactory, taskFromObject};