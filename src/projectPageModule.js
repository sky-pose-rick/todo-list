import { loadHome } from "./homePageModule";
import { storeProjectList } from "./storageModule";

//module for displaying tasks within a project

//sample html structure for page
const htmlContent=`<div id="header">
<div>Back</div>
<h1>Project Name</h1>
<div>Rename</div>
</div>
<div class="create-button">Create New Task</div>
<ul id="task-list">
<li class="task">
  <div class ="task-minimize">^</div>
  <div>update</div>
  <div class ="task-title">Task 1</div>
  <div class ="task-desc">One task description</div>
  <div>edit details</div>
  <div>additional notes</div>
  <div>delete</div>
  <div>priority</div>
  <div>deadline</div>
  <div>add to checklist</div>
  <li class ="check-list">
    <ul>check1</ul>
    <ul>check2</ul>
  </li>
</li>
</ul>`;

//use the current project to assemble an html page
const loadProject = (content, project) =>{
  content.innerHTML = '';

  //back button
  const backer = document.createElement('button');
  backer.innerText = 'Back to Home';
  backer.classList.add('back-button');
  content.appendChild(backer);
  backer.addEventListener('click', () =>{
    loadHome(content);
    storeProjectList();
  })

  //h1
  const h1 = document.createElement('h1');
  h1.innerText = project.name;
  content.appendChild(h1);

  //rename button
  const projectNamer = document.createElement('button');
  projectNamer.innerText = 'Rename Project';
  projectNamer.classList.add('project-rename');
  content.appendChild(projectNamer);
  //todo: add event listener to rename project

  //create button
  const creater = document.createElement('button');
  creater.innerText = 'Create New Task';
  creater.classList.add('create-button');
  content.appendChild(creater);
  creater.addEventListener('click', ()=>{
    console.log(project.taskList);
    project.addTask();
    storeProjectList();
    loadProject(content, project);
  });

  //ul
  const uList = document.createElement('ul');
  uList.setAttribute('id', 'task-list');
  content.appendChild(uList);

  //li elements
  const taskList = project.taskList;
  //console.log(projectList);
  taskList.forEach(t => {
    //li element
    const item = createMiniTaskPane(t);

    //append to list
    uList.appendChild(item);
  });

  //append list to content
  content.appendChild(uList);
}

const createMiniTaskPane = (t)=>{
  const item = document.createElement('li');
  item.classList.add('mini-task');

  //title
  const pTitle = document.createElement('div');
  pTitle.classList.add('mini-task-title');
  pTitle.innerText = t.title;
  item.append(pTitle);

  return item;
}

const createFullTaskPane = (t)=>{
  return null;
}

export {loadProject};