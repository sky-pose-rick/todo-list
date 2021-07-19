import { storeProjectList } from "./storageModule";
import {loadProject} from "./projectPageModule.js";

const loadTask = (content, project, task, taskCopy) =>{
    content.innerHTML = '';

  //top element container
  const topContainer = document.createElement('div');
  topContainer.setAttribute('id', 'project-info');
  content.appendChild(topContainer);

  //back button
  const backer = document.createElement('button');
  backer.innerText = 'Back to Project';
  backer.classList.add('back-button');
  topContainer.appendChild(backer);
  backer.addEventListener('click', () =>{
    loadProject(content, project);
  })

  //h1
  const h1 = document.createElement('h1');
  h1.innerText = 'Edit Task';
  topContainer.appendChild(h1);
};

export {loadTask};