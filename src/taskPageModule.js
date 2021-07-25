import { storeProjectList } from "./storageModule";
import {loadProject} from "./projectPageModule.js";
import * as dateFns from 'date-fns' ;

const loadTask = (content, project, task) =>{
    content.innerHTML = '';

    //header bar
    const bar = document.createElement('div');
    bar.setAttribute('id', 'header-bar');
    content.append(bar);

    //top element container
    const topContainer = document.createElement('div');
    topContainer.setAttribute('id', 'task-header');
    bar.append(topContainer);

    //back button
    const backer = document.createElement('button');
    backer.innerText = 'Back to Project';
    backer.setAttribute('id','back-button');
    topContainer.append(backer);
    backer.addEventListener('click', () =>{
        loadProject(content, project);
    })

    //h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Edit Task';
    topContainer.appendChild(h1);

    //container
    const container = document.createElement('div');
    container.setAttribute('id', 'task-container');
    content.append(container);

    //todo: all task elements as inputs

    //title
    const title = inputMaker(container, 'Title', 'input', textInputFactory);
    title.setValue(task.title);

    //desc
    const desc = inputMaker(container, 'Description', 'textarea', textAreaFactory);
    desc.setValue(task.desc);

    //notes
    const notes = inputMaker(container, 'Notes', 'textarea', textAreaFactory);
    notes.setValue(task.notes);

    //date
    //todo: learn the date system
    //todo: date selector and time selector along with parsing
    const calendar = inputMaker(container, 'Deadline', 'input', textInputFactory);
    calendar.elem.setAttribute('type', 'date');
    calendar.setValue(task.getDateString('yyyy-MM-dd'));

    //priority
    const optionMaker = (parent, str, value)=>{
        const opt = document.createElement('option');
        opt.innerText = str;
        opt.setAttribute('value', value);
        parent.append(opt);
    };
    const priority = inputMaker(container, 'Priority', 'select', selectFactory);
    optionMaker(priority.elem, 'None', 'none');
    optionMaker(priority.elem, 'Low', 'low');
    optionMaker(priority.elem, 'Medium', 'medium');
    optionMaker(priority.elem, 'High', 'high');
    priority.setValue(task.priority);

    //checklist
    const checklist = createChecklist(container, task);

    //save button
    const save = document.createElement('button');
    save.innerText = 'Save Task';
    content.append(save);
    save.addEventListener('click', ()=>{
        //todo: update the task with all the values from the inputs
        task.title = title.getValue();
        task.desc = desc.getValue();
        task.notes = notes.getValue();
        task.priority = priority.getValue();
        if(calendar.getValue());
            task.dueDate = dateFns.parse(calendar.getValue(),'yyyy-MM-dd', new Date(2020, 1, 1, 1, 1, 1));

        task.checklist = [];
        [... checklist.querySelectorAll('input')].forEach(elem=>{
            const checked = elem.getAttribute('data-checked') === 'true';
            task.checklist.push([elem.value, checked]);
        });

        //save and go back
        storeProjectList();
        loadProject(content, project);
    });
};

const createChecklist = (parent, task)=>{
    const cDiv = document.createElement('div');
    parent.append(cDiv);
    const cLabel = document.createElement('div');
    cDiv.append(cLabel);
    cLabel.innerText = 'Checklist';
    const cButton = document.createElement('button');
    cDiv.append(cButton);
    cButton.innerText = 'Add to Checklist';
    const checklist = document.createElement('ul');
    cDiv.append(checklist);

    cButton.addEventListener('click', ()=>{
        checklist.append(createChecklistElem('New Todo', 0));
    });

    task.checklist.forEach(elem=>{
        checklist.append(createChecklistElem(elem[0], elem[1]));        
    });

    return checklist;
};

const createChecklistElem = (name, checked)=>{
    const li = document.createElement('li');
    const text = document.createElement('input');
    li.append(text);
    text.setAttribute('value', name);
    text.setAttribute('data-checked', checked);
    const button = document.createElement('button');
    li.append(button);
    button.innerText = 'Remove';
    button.addEventListener('click', ()=>{
        li.remove();
    })

    return li;
};

const inputMaker = (elem, title, elemType, factory) =>
{
    const box = document.createElement('div');
    elem.append(box);

    const label = document.createElement('label');
    label.innerText = title;
    box.append(label);

    const input = document.createElement(elemType);
    box.append(input);

    return factory(input, label);
}

//factory to create an object to manage an input element
//todo: learn factory abstracts/interfaces to make objects more uniform
//also learn static variables for factories
const textInputFactory = (elem, label) =>{
    const setValue = (value) => {
        elem.setAttribute('value',value);
    };
    const getValue = () => 
    {
        return elem.value;
    };

    return {elem, label, setValue, getValue};
}

const textAreaFactory = (elem, label) =>{
    const setValue = (value) => {
        elem.innerText = value;
    };
    const getValue = () => 
    {
        return elem.value;
    };

    return {elem, label, setValue, getValue};
}

const selectFactory = (elem, label) =>{
    const setValue = (value) => {
        const selected = [... elem.children].find(c=>{
            return c.value === value;
        });

        selected.toggleAttribute('selected');
    };
    const getValue = () => 
    {
        return elem.value;
    };

    return {elem, label, setValue, getValue};
};

export {loadTask};