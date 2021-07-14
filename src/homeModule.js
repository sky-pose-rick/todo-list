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

const loadHome = content =>{
    content.innerHTML = htmlContent;
}

export {loadHome};