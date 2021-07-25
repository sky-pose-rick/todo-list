//constructor and helper functions for task/todo objects
import * as dateFns from 'date-fns' ;

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

        const cCopy = obj.checklist.map((elem)=>
        {
            return [elem[0], elem[1]];
        })

        const newTask = taskFactory({
            title: obj.title,
            desc: obj.desc,
            notes: obj.notes,
            dueDate: obj.dueDate,
            priority: obj.priority,
            checklist: cCopy,
            resolved: obj.resolved,
        });

        return newTask;
    }

    //day day month year
    const getDateString = (format = 'eeee d MMMM yyyy') =>{
        if(dateFns.isDate(obj.dueDate))
            return dateFns.format(obj.dueDate, format);
        else
            return "Invalid Deadline";
    };

    const getTimeUntilDueDate = () =>{
        if(dateFns.isDate(obj.dueDate))
            return dateFns.formatDistanceToNow(obj.dueDate, {addSuffix: true});
        else
            return "Invalid Deadline";
    };

    const obj = {title, desc, notes, dueDate, priority, checklist, resolved, copy, getDateString, getTimeUntilDueDate};
    return obj;
}

//convert a generic object to a task
const taskFromObject = obj =>{
    obj.dueDate = new Date(obj.dueDate);
    let task = taskFactory(obj);

    return task;
}

export {taskFactory, taskFromObject};