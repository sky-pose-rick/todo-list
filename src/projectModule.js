//module for displaying tasks within a project
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

const loadProject = content =>{
    content.innerHTML = htmlContent;
}

export {loadProject};