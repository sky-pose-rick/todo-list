import { loadHome } from "./homePageModule";
import { storeProjectList } from "./storageModule";
import { loadTask } from "./taskPageModule";

//module for displaying tasks within a project

//use the current project to assemble an html page
const loadProject = (content, project) =>{
  content.innerHTML = '';

  //top element container
  const topContainer = document.createElement('div');
  topContainer.setAttribute('id', 'project-info');
  content.appendChild(topContainer);

  //back button
  const backer = document.createElement('button');
  backer.innerText = 'Back to Home';
  backer.classList.add('back-button');
  topContainer.appendChild(backer);
  backer.addEventListener('click', () =>{
    loadHome(content);
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
  
  projectNamer.addEventListener('click', ()=>{
    const input = prompt('New project name?');
    if(input){
      project.name = input;
      h1.innerText = input;
      storeProjectList();
    }
  });


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
  const parentInfo = {content, project};
  //console.log(projectList);
  taskList.forEach(t => {
    //li element
    const row = document.createElement('li');
    uList.appendChild(row);

    //mini-pane
    createMiniTaskPane(t, row, parentInfo);
  });

  //append list to content
  content.appendChild(uList);
}

const createMiniTaskPane = (task, elem, parentInfo)=>{
  const innerItem = miniTaskContent(task, elem);

  //expand
  const expander = document.createElement('button');
  expander.classList.add('mini-task-expand');
  expander.innerText = '>';
  innerItem.append(expander);
  expander.addEventListener('click', ()=>{
    elem.innerHTML = '';
    createFullTaskPane(task, elem, parentInfo);
  });

  return innerItem;
};

const miniTaskContent = (task, elem) => {
  const innerItem = document.createElement('div');
  innerItem.classList.add('mini-task');
  elem.append(innerItem);

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

  //set priority color
  if(task.resolved)
    innerItem.classList.add(priorityColor('none'));
  else
    innerItem.classList.add(priorityColor(task.priority));

  return innerItem;
};

const createFullTaskPane = (task, elem, parentInfo)=>{
  const innerItem = document.createElement('div');
  innerItem.classList.add('full-task');
  elem.append(innerItem);

  //copy the content of the mini-task bar
  const mini = miniTaskContent(task, innerItem);

  //shrink
  const shrinker = document.createElement('button');
  shrinker.classList.add('mini-task-expand');
  shrinker.innerText = '^';
  mini.append(shrinker);
  shrinker.addEventListener('click', ()=>{
    elem.innerHTML = '';
    createMiniTaskPane(task, elem, parentInfo);
  });

  //expanded details
  const details = document.createElement('div');
  details.classList.add('full-task-details');
  elem.append(details);

  //description
  const desc = document.createElement('div');
  desc.classList.add('full-task-text');
  desc.innerText = task.desc;
  details.append(desc);

  //notes
  const notes = document.createElement('div');
  notes.classList.add('full-task-text');
  notes.innerText = task.notes;
  details.append(notes);

  //priority
  const prio = document.createElement('div');
  prio.classList.add('full-task-text');
  if(task.resolved)
    prio.innerText = `Priority: none (resolved)`;
  else
    prio.innerText = `Priority: ${task.priority}`;
  details.append(prio);

  //checklist
  const cList = document.createElement('ul');
  cList.classList.add('full-task-list');
  details.append(cList);

  task.checklist.forEach(c=>{
    //outer container
    const check = document.createElement('li');
    check.classList.add('full-task-list-item');
    cList.append(check);

    //checkbox
    const cBox = document.createElement('input');
    cBox.setAttribute('type', 'checkbox');
    check.append(cBox);
    if(c[1])
      cBox.toggleAttribute('checked');
    check.addEventListener('click', ()=>{
      c[1] = !c[1];
      storeProjectList();
    });

    //text for checkbox
    const cText = document.createElement('p');
    cText.innerText = c[0];
    check.append(cText);
  });

  //buttons
  const buttonRow = document.createElement('div');
  buttonRow.classList.add('full-task-button-row');
  details.append(buttonRow);

  //edit button
  const edit = document.createElement('button');
  edit.classList.add('full-task-edit');
  edit.innerText = 'Edit Task';
  buttonRow.append(edit);

  edit.addEventListener('click', () =>{
    console.log(parentInfo);
    loadTask(parentInfo.content, parentInfo.project, task);
  });

  //delete button
  const delButton = document.createElement('button');
  delButton.classList.add('full-task-delete');
  delButton.innerText = 'Delete Task';
  buttonRow.append(delButton);
  delButton.addEventListener('click', () =>{
    //cannot refresh because no reference to the project here
    elem.remove();
    parentInfo.project.deleteTask(task);
    storeProjectList();
  });

  //resolve button
  const resolve = document.createElement('button');
  resolve.classList.add('full-task-resolve');
  resolve.innerText = 'Toggle Resolved';
  buttonRow.append(resolve);
  resolve.addEventListener('click', () =>{
    //cannot refresh because no reference to the project here
    task.resolved = !task.resolved;
    elem.innerHTML = '';
    createFullTaskPane(task, elem, parentInfo);
    storeProjectList();
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