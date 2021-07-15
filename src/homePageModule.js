import {loadProjectList, storeProjectList, resetStorage, getProjectList} from "./storageModule";

//module for displaying projects on a main page
const htmlContent=`<h1>TODO Lists</h1>
<div class="create-button">Create New Project</div>
<ul id="project-list">
  <li class="project">
    <div class ="project-title">Project 1</div>
    <div class ="project-counter">22 todos</div>
    <div class ="project-view">View</div>
    <div class ="project-delete">Delete</div>
  </li>
  <li class="project">
    <div class ="project-title">Project 1</div>
    <div class ="project-counter">22 todos</div>
    <div class ="project-view">View</div>
    <div class ="project-delete">Delete</div>
  </li>
  <li class="project">
    <div class ="project-title">Project 1</div>
    <div class ="project-counter">22 todos</div>
    <div class ="project-view">View</div>
    <div class ="project-delete">Delete</div>
  </li>
  <li class="project">
    <div class ="project-title">Project 1</div>
    <div class ="project-counter">22 todos</div>
    <div class ="project-view">View</div>
    <div class ="project-delete">Delete</div>
  </li>
</ul>`;

const header = `<h1>TODO Lists</h1>
<div class="create-button">Create New Project</div>`;


//get the current project list and assemble an html page
const loadHome = content =>{
    content.innerHTML = '';

    //h1
    const h1 = document.createElement('h1');
    h1.innerText = 'TODOLists';
    content.appendChild(h1);

    //button
    const creater = document.createElement('button');
    creater.innerText = 'Create New Project';
    creater.classList.add('create-button');
    content.appendChild(creater);
    //todo: add event listener to create new project

    //ul
    const uList = document.createElement('ul');
    uList.setAttribute('id', 'project-list');
    content.appendChild(uList);

    //li elements
    const projectList = getProjectList();
    console.log('project list for homepage: ' + projectList);
    projectList.forEach(p => {
      console.log(p);
      //li element
      const item = document.createElement('li');
      item.classList.add('project');

      //title
      const pTitle = document.createElement('div');
      pTitle.classList.add('project-title');
      pTitle.innerText = p.name;
      item.append(pTitle);
      //todo: add a way to change the title (within the project, not here)

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
      //todo: add an event listener to the button to load the project

      //todo: determine if this button should exist
      //delete 
      const pDelete = document.createElement('button')
      pDelete.classList.add('project-delete');
      pDelete.innerText = 'Delete';
      item.append(pDelete);
      //todo: add event listener to delete the project

      //append to list
      uList.appendChild(item);
    });

    //append list to content
    content.appendChild(uList);

}

export {loadHome};