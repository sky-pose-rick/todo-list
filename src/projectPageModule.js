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

  //top element container
  const topContainer = document.createElement('div');
  topContainer.setAttribute('id', 'project-info');

  //back button
  const backer = document.createElement('button');
  backer.innerText = 'Back to Home';
  backer.classList.add('back-button');
  topContainer.appendChild(backer);
  backer.addEventListener('click', () =>{
    loadHome(content);
    storeProjectList();
  })

  //h1
  const h1 = document.createElement('h1');
  h1.innerText = project.name;
  topContainer.appendChild(h1);

  //rename button
  const projectNamer = document.createElement('button');
  projectNamer.innerText = 'Rename Project';
  projectNamer.classList.add('project-rename');
  topContainer.appendChild(projectNamer);
  //todo: add event listener to rename project

  content.appendChild(topContainer);

  //create button
  const creater = document.createElement('button');
  creater.innerText = 'Create New Task';
  creater.classList.add('create-button');
  content.appendChild(creater);
  creater.addEventListener('click', ()=>{
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
    const outerItem = document.createElement('li');
    outerItem.appendChild(createMiniTaskPane(t, outerItem));

    //append to list
    uList.appendChild(outerItem);
  });

  //append list to content
  content.appendChild(uList);
}

const createMiniTaskPane = (task, elem)=>{
  const innerItem = document.createElement('div');
  innerItem.classList.add('mini-task');

  //title
  const tTitle = document.createElement('div');
  tTitle.classList.add('mini-task-title');
  tTitle.innerText = task.title;
  innerItem.append(tTitle);

  //due date
  const tDate = document.createElement('div');
  tDate.classList.add('mini-task-date');
  tDate.innerText = task.dueDate;
  innerItem.append(tDate);

  //expand
  const expander = document.createElement('button');
  expander.classList.add('mini-task-expand');
  expander.innerText = '>';
  innerItem.append(expander);
  expander.addEventListener('click', ()=>{
    elem.innerHTML = '';
    elem.appendChild(createFullTaskPane(task, elem));
  });

  //set priority color
  innerItem.classList.add(priorityColor(task.priority));

  return innerItem;
}

const createFullTaskPane = (task, elem)=>{
  const innerItem = document.createElement('div');
  innerItem.classList.add('full-task');

  //title
  const tTitle = document.createElement('div');
  tTitle.classList.add('full-task-title');
  tTitle.innerText = task.title;
  innerItem.append(tTitle);

  //shrink
  const shrinker = document.createElement('button');
  shrinker.classList.add('mini-task-expand');
  shrinker.innerText = '^';
  innerItem.append(shrinker);
  shrinker.addEventListener('click', ()=>{
    elem.innerHTML = '';
    elem.appendChild(createMiniTaskPane(task, elem));
  });
  return innerItem;
}

const priorityColor = (priority)=>{
  switch(priority){
    case 'high': 
      return 'high-priority';
    case 'medium':
      return 'medium-priority';
    case 'low':
      return 'low-priority';
    default:
      return 'no-priority';
  }
}

export {loadProject};