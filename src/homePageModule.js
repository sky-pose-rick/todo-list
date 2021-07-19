import { resetStorage, getProjectList, createNewProject, deleteProject} from "./storageModule";
import { loadProject } from "./projectPageModule";

//module for displaying projects on a main page

//get the current project list and assemble an html page
const loadHome = content =>{
    content.innerHTML = '';

    //h1
    const h1 = document.createElement('h1');
    h1.innerText = 'TODO Lists';
    content.appendChild(h1);

    //button
    const creater = document.createElement('button');
    creater.innerText = 'Create New Project';
    creater.classList.add('create-button');
    content.appendChild(creater);
    creater.addEventListener('click', ()=>{
      createNewProject();
      loadHome(content);
    });

    //ul
    const uList = document.createElement('ul');
    uList.setAttribute('id', 'project-list');
    content.appendChild(uList);

    //li elements
    const projectList = getProjectList();
    //console.log(projectList);
    projectList.forEach(p => {
      //console.log(p);
      //li element
      const item = document.createElement('li');
      item.classList.add('project');

      //title
      const pTitle = document.createElement('div');
      pTitle.classList.add('project-title');
      pTitle.innerText = p.name;
      item.append(pTitle);

      //task count
      const pTasks = document.createElement('div')
      pTasks.classList.add('project-counter');
      pTasks.innerText = `${p.taskList.length} todos`;
      item.append(pTasks);

      //view
      const pView = document.createElement('button')
      pView.classList.add('project-view');
      pView.innerText = 'View';
      item.append(pView);
      pView.addEventListener('click', ()=>{
        loadProject(content, p);
      });

      //delete 
      const pDelete = document.createElement('button')
      pDelete.classList.add('project-delete');
      pDelete.innerText = 'Delete';
      item.append(pDelete);
      pDelete.addEventListener('click', ()=>{
        deleteProject(p);
        loadHome(content);
      });

      //append to list
      uList.appendChild(item);
    });

    //append list to content
    content.appendChild(uList);

    //a reset button
    const reseter = document.createElement('button')
    reseter.classList.add('home-reset');
    reseter.innerText = 'Reset all';
    content.append(reseter);
    reseter.addEventListener('click', ()=>{
      resetStorage();
      createNewProject();
      loadHome(content);
    })
}

export {loadHome};