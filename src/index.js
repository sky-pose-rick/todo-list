import {loadHome} from "./homeModule.js";
import {loadProject} from "./projectModule.js";

//test that webpack works
console.log('webpack compiled to main.js');

const content = document.querySelector('#content');
loadProject(content);

