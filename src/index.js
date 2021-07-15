import {loadHome} from "./homePageModule.js";
import {projectFactory} from "./projectObjModule.js";
import {loadProject} from "./projectPageModule.js";
import {taskFactory} from "./taskObjModule";
import {loadProjectList, storeProjectList, resetStorage} from "./storageModule"

//test that webpack works
console.log('webpack compiled to main.js');

const content = document.querySelector('#content');

loadProjectList();

loadHome(content);
console.log('end of index');

