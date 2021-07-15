import {loadHome} from "./homePageModule.js";
import {loadProject} from "./projectPageModule.js";
import {taskFactory} from "./taskObjModule";

//test that webpack works
console.log('webpack compiled to main.js');

const content = document.querySelector('#content');
loadHome(content);
console.log(taskFactory());

