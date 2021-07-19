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

  //todo: all task elements as inputs

  //container
  const container = document.createElement('div');
  container.setAttribute('id', 'task-container');
  content.append(container);

  //title
  const title = labelMaker(container, 'Title');
  title.input.setAttribute('value',taskCopy.title);

  //save button
  const save = document.createElement('button');
  save.innerText = 'Save Task';
  content.append(save);
  save.addEventListener('click', ()=>{
    //todo: update the copy with all the values from the inputs
    taskCopy.title = title.input.value;
    console.log(taskCopy.title);

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

const labelMaker = (elem, title) =>
{
    const box = document.createElement('div');
    elem.append(box);

    const label = document.createElement('label');
    label.innerText = title;
    box.append(label);

    const input = document.createElement('input');
    box.append(input);

    return {label, input};
}

export {loadTask};