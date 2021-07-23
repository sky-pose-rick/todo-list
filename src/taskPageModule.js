import { storeProjectList } from "./storageModule";
import {loadProject} from "./projectPageModule.js";

const loadTask = (content, project, task, taskCopy) =>{
    content.innerHTML = '';

  //top element container
  const topContainer = document.createElement('div');
  topContainer.setAttribute('id', 'task-header');
  content.append(topContainer);

  //back button
  const backer = document.createElement('button');
  backer.innerText = 'Back to Project';
  backer.classList.add('back-button');
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
  title.setValue(taskCopy.title);

  //desc

  //notes

  //date

  //priority



  //save button
  const save = document.createElement('button');
  save.innerText = 'Save Task';
  content.append(save);
  save.addEventListener('click', ()=>{
    //todo: update the copy with all the values from the inputs
    taskCopy.title = title.getValue();

    //replace the original task with the copy
    project.taskList = project.taskList.map((elem)=>{
        if(elem === task)
            return taskCopy;
        else
            return elem;
    });

    //save and go back
    storeProjectList();
    loadProject(content, project);
  });
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

    const inputObj = factory(input, label);
    console.log(inputObj);

    return inputObj;
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
      return elem.innerText;
  };

    return {elem, label, setValue, getValue};
}

export {loadTask};