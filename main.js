(()=>{"use strict";const e=({title:t,desc:n,notes:c,dueDate:s,priority:a,checkList:d,resolved:i})=>({title:t,desc:n,notes:c,dueDate:s,priority:a,checkList:d,resolved:i,copy:()=>{const s=d.map((e=>[e[0],e[1]]));return e({title:t,desc:n,notes:c,dueDate:"bad for now",priority:a,checkList:s,resolved:i})}}),t=(t,n)=>({name:t,taskList:n,addTask:()=>{const t=e({title:"New Task",desc:"A blank task",notes:"blank notes",dueDate:"set this somehow",priority:"none",checkList:[["sample checkbox",!1]],resolved:!1});n.push(t)},deleteTask:e=>{for(let t=0;t<n.length;t++)if(n[t]===e){n.splice(t,1);break}}});let n;const c="Odin-Todo",s=()=>{localStorage.setItem(c,JSON.stringify(n))},a=()=>{const e=t("New Project",[]);e.addTask(),n.push(e),s()},d=(e,t)=>{e.innerHTML="";const n=document.createElement("div");n.setAttribute("id","project-info"),e.appendChild(n);const c=document.createElement("button");c.innerText="Back to Home",c.classList.add("back-button"),n.appendChild(c),c.addEventListener("click",(()=>{p(e)}));const a=document.createElement("h1");a.innerText=t.name,n.appendChild(a);const o=document.createElement("button");o.innerText="Rename Project",o.classList.add("project-rename"),n.appendChild(o),o.addEventListener("click",(()=>{const e=prompt("New project name?");e&&(t.name=e,a.innerText=e,s())}));const l=document.createElement("button");l.innerText="Create New Task",l.classList.add("create-button"),e.appendChild(l),l.addEventListener("click",(()=>{t.addTask(),s(),d(e,t)}));const r=document.createElement("ul");r.setAttribute("id","task-list"),e.appendChild(r);const m=t.taskList,u={content:e,project:t};m.forEach((e=>{const t=document.createElement("li");r.appendChild(t),i(e,t,u)})),e.appendChild(r)},i=(e,t,n)=>{const c=o(e,t),s=document.createElement("button");return s.classList.add("mini-task-expand"),s.innerText=">",c.append(s),s.addEventListener("click",(()=>{t.innerHTML="",l(e,t,n)})),c},o=(e,t,n)=>{const c=document.createElement("div");c.classList.add("mini-task"),t.append(c);const s=document.createElement("div");s.classList.add("mini-task-title"),s.innerText=e.title,c.append(s);const a=document.createElement("div");return a.classList.add("mini-task-date"),a.innerText=e.dueDate,c.append(a),e.resolved?c.classList.add(r("none")):c.classList.add(r(e.priority)),c},l=(e,t,n)=>{const c=document.createElement("div");c.classList.add("full-task"),t.append(c);const a=o(e,c),r=document.createElement("button");r.classList.add("mini-task-expand"),r.innerText="^",a.append(r),r.addEventListener("click",(()=>{t.innerHTML="",i(e,t)}));const p=document.createElement("div");p.classList.add("full-task-details"),t.append(p);const m=document.createElement("div");m.classList.add("full-task-text"),m.innerText=e.desc,p.append(m);const u=document.createElement("div");u.classList.add("full-task-text"),u.innerText=e.notes,p.append(u);const k=document.createElement("div");k.classList.add("full-task-text"),e.resolved?k.innerText="Priority: none (resolved)":k.innerText=`Priority: ${e.priority}`,p.append(k);const E=document.createElement("ul");E.classList.add("full-task-list"),p.append(E),e.checkList.forEach((e=>{const t=document.createElement("li");t.classList.add("full-task-list-item"),E.append(t);const n=document.createElement("input");n.setAttribute("type","checkbox"),t.append(n),e[1]&&n.toggleAttribute("checked"),t.addEventListener("click",(()=>{e[1]=!e[1],s()}));const c=document.createElement("p");c.innerText=e[0],t.append(c)}));const L=document.createElement("div");L.classList.add("full-task-button-row"),p.append(L);const T=document.createElement("button");T.classList.add("full-task-edit"),T.innerText="Edit Task",L.append(T),T.addEventListener("click",(()=>{const t=e.copy();((e,t,n,c)=>{e.innerHTML="";const a=document.createElement("div");a.setAttribute("id","task-header"),e.append(a);const i=document.createElement("button");i.innerText="Back to Project",i.classList.add("back-button"),a.append(i),i.addEventListener("click",(()=>{d(e,t)}));const o=document.createElement("h1");o.innerText="Edit Task",a.appendChild(o);const l=document.createElement("div");l.setAttribute("id","task-container"),e.append(l);const r=((e,t)=>{const n=document.createElement("div");e.append(n);const c=document.createElement("label");c.innerText=t,n.append(c);const s=document.createElement("input");return n.append(s),{label:c,input:s}})(l,"Title");r.input.setAttribute("value",c.title);const p=document.createElement("button");p.innerText="Save Task",e.append(p),p.addEventListener("click",(()=>{c.title=r.input.value,console.log(c.title),t.taskList=t.taskList.map((e=>e===n?c:e)),s(),d(e,t)}))})(n.content,n.project,e,t)}));const v=document.createElement("button");v.classList.add("full-task-delete"),v.innerText="Delete Task",L.append(v),v.addEventListener("click",(()=>{t.remove(),n.project.deleteTask(e),s()}));const h=document.createElement("button");return h.classList.add("full-task-resolve"),h.innerText="Toggle Resolved",L.append(h),h.addEventListener("click",(()=>{e.resolved=!e.resolved,t.innerHTML="",l(e,t,n),s()})),c},r=e=>{switch(e){case"high":return"high-priority";case"medium":return"medium-priority";case"low":return"low-priority";default:return"no-priority"}},p=e=>{e.innerHTML="";const t=document.createElement("h1");t.innerText="TODO Lists",e.appendChild(t);const i=document.createElement("button");i.innerText="Create New Project",i.classList.add("create-button"),e.appendChild(i),i.addEventListener("click",(()=>{a(),p(e)}));const o=document.createElement("ul");o.setAttribute("id","project-list"),e.appendChild(o),n.forEach((t=>{const c=document.createElement("li");c.classList.add("project");const a=document.createElement("div");a.classList.add("project-title"),a.innerText=t.name,c.append(a);const i=document.createElement("div");i.classList.add("project-counter"),i.innerText=`${t.taskList.length} todos`,c.append(i);const l=document.createElement("button");l.classList.add("project-view"),l.innerText="View",c.append(l),l.addEventListener("click",(()=>{d(e,t)}));const r=document.createElement("button");r.classList.add("project-delete"),r.innerText="Delete",c.append(r),r.addEventListener("click",(()=>{(e=>{n=n.filter((t=>t!==e)),s()})(t),p(e)})),o.appendChild(c)})),e.appendChild(o);const l=document.createElement("button");l.classList.add("home-reset"),l.innerText="Reset all",e.append(l),l.addEventListener("click",(()=>{n=[],localStorage.setItem(c,JSON.stringify(null)),a(),p(e)}))};console.log("webpack compiled to main.js");const m=document.querySelector("#content");(()=>{const s=JSON.parse(localStorage.getItem(c));s&&0!==s.length?n=s.map((n=>(n=>{let c=n.taskList.map((t=>(t=>e(t))(t)));return t(n.name,c)})(n))):(console.log("initialize project list"),n=[],a()),console.table(n)})(),p(m),console.log("end of index")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza09iak1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdE9iak1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFBhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tQYWdlTW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lUGFnZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGFza0ZhY3RvcnkiLCJ0aXRsZSIsImRlc2MiLCJub3RlcyIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNoZWNrTGlzdCIsInJlc29sdmVkIiwiY29weSIsImNDb3B5IiwibWFwIiwiZWxlbSIsInByb2plY3RGYWN0b3J5IiwibmFtZSIsInRhc2tMaXN0IiwiYWRkVGFzayIsIm5ld1Rhc2siLCJwdXNoIiwiZGVsZXRlVGFzayIsInQiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicHJvamVjdExpc3QiLCJzdG9yYWdlTmFtZSIsInN0b3JlUHJvamVjdExpc3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZU5ld1Byb2plY3QiLCJwIiwibG9hZFByb2plY3QiLCJjb250ZW50IiwicHJvamVjdCIsImlubmVySFRNTCIsInRvcENvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiYmFja2VyIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRIb21lIiwiaDEiLCJwcm9qZWN0TmFtZXIiLCJpbnB1dCIsInByb21wdCIsImNyZWF0ZXIiLCJ1TGlzdCIsInBhcmVudEluZm8iLCJmb3JFYWNoIiwicm93IiwiY3JlYXRlTWluaVRhc2tQYW5lIiwidGFzayIsImlubmVySXRlbSIsIm1pbmlUYXNrQ29udGVudCIsImV4cGFuZGVyIiwiYXBwZW5kIiwiY3JlYXRlRnVsbFRhc2tQYW5lIiwidFRpdGxlIiwidERhdGUiLCJwcmlvcml0eUNvbG9yIiwibWluaSIsInNocmlua2VyIiwiZGV0YWlscyIsInByaW8iLCJjTGlzdCIsImMiLCJjaGVjayIsImNCb3giLCJ0b2dnbGVBdHRyaWJ1dGUiLCJjVGV4dCIsImJ1dHRvblJvdyIsImVkaXQiLCJ0YXNrQ29weSIsImNvbnRhaW5lciIsImJveCIsImxhYmVsIiwibGFiZWxNYWtlciIsInNhdmUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVGFzayIsImRlbEJ1dHRvbiIsInJlbW92ZSIsInJlc29sdmUiLCJpdGVtIiwicFRpdGxlIiwicFRhc2tzIiwicFZpZXciLCJwRGVsZXRlIiwiZmlsdGVyIiwiZGVsZXRlUHJvamVjdCIsInJlc2V0ZXIiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxPYmoiLCJwYXJzZSIsImdldEl0ZW0iLCJvYmoiLCJ0YXNrRnJvbU9iamVjdCIsInByb2plY3RGcm9tT2JqZWN0IiwidGFibGUiLCJsb2FkUHJvamVjdExpc3QiXSwibWFwcGluZ3MiOiJtQkFHQSxNQUFNQSxFQUFjLEVBQUVDLFFBQ2xCQyxPQUNBQyxRQUNBQyxVQUNBQyxXQUNBQyxZQUNBQyxlQTZCTyxDQUFDTixRQUFPQyxPQUFNQyxRQUFPQyxVQUFTQyxXQUFVQyxZQUFXQyxXQUFVQyxLQXBCdkQsS0FFVCxNQUFNQyxFQUFRSCxFQUFVSSxLQUFLQyxHQUVsQixDQUFDQSxFQUFLLEdBQUlBLEVBQUssTUFhMUIsT0FWZ0JYLEVBQVksQ0FDeEJDLE1BQU9BLEVBQ1BDLEtBQU1BLEVBQ05DLE1BQU9BLEVBQ1BDLFFBQVMsY0FDVEMsU0FBVUEsRUFDVkMsVUFBV0csRUFDWEYsU0FBVUEsT0M3QmhCSyxF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R0RRYjRGLElBQ1J2RyxFQUFZdUcsR0NUZUMsQ0FBZTdGLEtBR3JELE9BRmNDLEVBQWUyRixFQUFJMUYsS0FBTUMsSUNmQTJGLENBQWtCOUYsTUFOckQwRSxRQUFRQyxJQUFJLDJCQUNaL0QsRUFBYyxHQUNkTyxLQU1KdUQsUUFBUXFCLE1BQU1uRixJSVZsQm9GLEdBRUE3RCxFQUFTYixHQUNUb0QsUUFBUUMsSUFBSSxpQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdHJ1Y3RvciBhbmQgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGFzay90b2RvIG9iamVjdHNcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHt0aXRsZSxcbiAgICBkZXNjLFxuICAgIG5vdGVzLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tMaXN0LFxuICAgIHJlc29sdmVkfSkgPT57XG4gICAgLypjb25zdCB0aXRsZSA9ICdOZXcgVGFzayc7XG4gICAgY29uc3QgZGVzYyA9ICdBIGRlZmF1bHQgdGFzayB0ZW1wbGF0ZSc7XG4gICAgY29uc3Qgbm90ZXMgPSAnYmxhbmsgbm90ZXMnO1xuICAgIGNvbnN0IGR1ZURhdGUgPSAnc2V0IHRoaXMgc29tZWhvdyc7XG4gICAgY29uc3QgcHJpb3JpdHkgPSAwO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IG51bGw7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBmYWxzZTsqL1xuXG4gICAgY29uc3QgY29weSA9ICgpID0+e1xuXG4gICAgICAgIGNvbnN0IGNDb3B5ID0gY2hlY2tMaXN0Lm1hcCgoZWxlbSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gW2VsZW1bMF0sIGVsZW1bMV1dO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXNjOiBkZXNjLFxuICAgICAgICAgICAgbm90ZXM6IG5vdGVzLFxuICAgICAgICAgICAgZHVlRGF0ZTogJ2JhZCBmb3Igbm93JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgIGNoZWNrTGlzdDogY0NvcHksXG4gICAgICAgICAgICByZXNvbHZlZDogcmVzb2x2ZWQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH1cblxuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIG5vdGVzLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0LCByZXNvbHZlZCwgY29weX07XG59XG5cbi8vY29udmVydCBhIGdlbmVyaWMgb2JqZWN0IHRvIGEgdGFza1xuY29uc3QgdGFza0Zyb21PYmplY3QgPSBvYmogPT57XG4gICAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeShvYmopO1xuICAgIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQge3Rhc2tGYWN0b3J5LCB0YXNrRnJvbU9iamVjdH07IiwiaW1wb3J0IHsgdGFza0ZhY3RvcnksIHRhc2tGcm9tT2JqZWN0IH0gZnJvbSBcIi4vdGFza09iak1vZHVsZVwiO1xuXG4vL2NvbnN0cnVjdG9yIGFuZCBoZWxwZXIgZnVuY3Rpb25zIGZvciBwcm9qZWN0IG9iamVjdHNcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUsIHRhc2tMaXN0KSA9PntcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKT0+e1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3Rvcnkoe1xuICAgICAgICAgICAgdGl0bGU6ICdOZXcgVGFzaycsIFxuICAgICAgICAgICAgZGVzYzogJ0EgYmxhbmsgdGFzaycsIFxuICAgICAgICAgICAgbm90ZXM6ICdibGFuayBub3RlcycsIFxuICAgICAgICAgICAgZHVlRGF0ZTogJ3NldCB0aGlzIHNvbWVob3cnLCBcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbm9uZScsIFxuICAgICAgICAgICAgY2hlY2tMaXN0OiBbWydzYW1wbGUgY2hlY2tib3gnLCBmYWxzZV1dLCBcbiAgICAgICAgICAgIHJlc29sdmVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBhIHByb2plY3QgZnJvbSB0aGUgbGlzdFxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodCkgPT57XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGFza0xpc3RbaV0gPT09IHQpe1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgdGFza0xpc3QsIGFkZFRhc2ssIGRlbGV0ZVRhc2t9O1xufVxuXG4vL2NvbnZlcnQgYSBnZW5lcmljIG9iamVjdCB0byBhIHByb2plY3RcbmNvbnN0IHByb2plY3RGcm9tT2JqZWN0ID0gKG9iaikgPT57XG4gICAgbGV0IHRhc2tMaXN0ID0gb2JqLnRhc2tMaXN0Lm1hcChlbGVtPT50YXNrRnJvbU9iamVjdChlbGVtKSk7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShvYmoubmFtZSwgdGFza0xpc3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59O1xuXG5leHBvcnQge3Byb2plY3RGYWN0b3J5LCBwcm9qZWN0RnJvbU9iamVjdH07IiwiaW1wb3J0IHtwcm9qZWN0RmFjdG9yeSwgcHJvamVjdEZyb21PYmplY3R9IGZyb20gXCIuL3Byb2plY3RPYmpNb2R1bGVcIjtcblxuLy9ob2xkIHRoZSBwcm9qZWN0IGxpc3QgYW5kIGhhbmRsZSBsb2NhbHN0b3JhZ2UgZnVuY3Rpb25zXG5sZXQgcHJvamVjdExpc3Q7XG5jb25zdCBzdG9yYWdlTmFtZSA9ICdPZGluLVRvZG8nO1xuXG4vL2xvYWQgdGhlIHByb2plY3QgbGlzdCBmcm9tIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IGxvYWRQcm9qZWN0TGlzdCA9ICgpID0+e1xuICAgIC8vdHJ5IHRvIGxvYWQgZnJvbSBzdG9yYWdlXG4gICAgY29uc3QgbG9jYWxPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VOYW1lKSk7XG4gICAgLy9jb25zb2xlLnRhYmxlKGxvY2FsT2JqKTtcblxuICAgIC8vaWYgbm8gcmVzdWx0cyBmb3VuZCwgY3JlYXRlIGEgZGVmYXVsdCBvbmVcbiAgICBpZighbG9jYWxPYmogfHwgbG9jYWxPYmoubGVuZ3RoID09PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXRpYWxpemUgcHJvamVjdCBsaXN0Jyk7XG4gICAgICAgIHByb2plY3RMaXN0ID0gW107XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICB9XG4gICAgLy9sb2FkIGV4aXN0aW5nIHByb2plY3QsIGNvbnZlcnQgZ2VuZXJpYyBvYmplY3RzIHRvIHByb2plY3RzL3Rhc2tzL2NoZWNrbGlzdHNcbiAgICBlbHNle1xuICAgICAgICBwcm9qZWN0TGlzdCA9IGxvY2FsT2JqLm1hcChlbGVtID0+IHByb2plY3RGcm9tT2JqZWN0KGVsZW0pKTtcbiAgICB9XG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdCk7XG59XG5cbi8vc3RvcmUgdGhlIHByb2plY3QgbGlzdCBpbiBsb2NhbCBzdG9yYWdlXG5jb25zdCBzdG9yZVByb2plY3RMaXN0ID0gKCkgPT57XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG59XG5cbi8vcmVzZXQgdGhlIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IHJlc2V0U3RvcmFnZSA9ICgpID0+e1xuICAgIHByb2plY3RMaXN0ID0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KG51bGwpKTtcbn1cblxuLy9sZXQgdGhlIHByb2plY3QgaGF2ZSBhY2Nlc3MgdG8gcHJvamVjdCBsaXN0XG5jb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+e1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuLy9hZGQgYSBibGFuayBwcm9qZWN0IHRvIHRoZSBsaXN0XG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT57XG4gICAgY29uc3QgcCA9IHByb2plY3RGYWN0b3J5KFwiTmV3IFByb2plY3RcIiwgW10pO1xuICAgIHAuYWRkVGFzaygpO1xuICAgIHByb2plY3RMaXN0LnB1c2gocCk7XG4gICAgc3RvcmVQcm9qZWN0TGlzdCgpO1xufVxuXG4vL2RlbGV0ZSBhIHByb2plY3QgZnJvbSB0aGUgbGlzdFxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwKSA9PntcbiAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LmZpbHRlcigoZWxlbSk9PiBlbGVtICE9PSBwKTtcbiAgICBzdG9yZVByb2plY3RMaXN0KCk7XG59XG5cbmV4cG9ydCB7bG9hZFByb2plY3RMaXN0LCBzdG9yZVByb2plY3RMaXN0LCByZXNldFN0b3JhZ2UsIGdldFByb2plY3RMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBkZWxldGVQcm9qZWN0fTtcbiIsImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZVBhZ2VNb2R1bGVcIjtcbmltcG9ydCB7IHN0b3JlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdlTW9kdWxlXCI7XG5pbXBvcnQgeyBsb2FkVGFzayB9IGZyb20gXCIuL3Rhc2tQYWdlTW9kdWxlXCI7XG5cbi8vbW9kdWxlIGZvciBkaXNwbGF5aW5nIHRhc2tzIHdpdGhpbiBhIHByb2plY3RcblxuLy91c2UgdGhlIGN1cnJlbnQgcHJvamVjdCB0byBhc3NlbWJsZSBhbiBodG1sIHBhZ2VcbmNvbnN0IGxvYWRQcm9qZWN0ID0gKGNvbnRlbnQsIHByb2plY3QpID0+e1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIC8vdG9wIGVsZW1lbnQgY29udGFpbmVyXG4gIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWluZm8nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuXG4gIC8vYmFjayBidXR0b25cbiAgY29uc3QgYmFja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJhY2tlci5pbm5lclRleHQgPSAnQmFjayB0byBIb21lJztcbiAgYmFja2VyLmNsYXNzTGlzdC5hZGQoJ2JhY2stYnV0dG9uJyk7XG4gIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZXIpO1xuICBiYWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBsb2FkSG9tZShjb250ZW50KTtcbiAgfSlcblxuICAvL2gxXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIC8vcmVuYW1lIGJ1dHRvblxuICBjb25zdCBwcm9qZWN0TmFtZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdE5hbWVyLmlubmVyVGV4dCA9ICdSZW5hbWUgUHJvamVjdCc7XG4gIHByb2plY3ROYW1lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXJlbmFtZScpO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVyKTtcbiAgXG4gIHByb2plY3ROYW1lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY29uc3QgaW5wdXQgPSBwcm9tcHQoJ05ldyBwcm9qZWN0IG5hbWU/Jyk7XG4gICAgaWYoaW5wdXQpe1xuICAgICAgcHJvamVjdC5uYW1lID0gaW5wdXQ7XG4gICAgICBoMS5pbm5lclRleHQgPSBpbnB1dDtcbiAgICAgIHN0b3JlUHJvamVjdExpc3QoKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgLy9jcmVhdGUgYnV0dG9uXG4gIGNvbnN0IGNyZWF0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY3JlYXRlci5pbm5lclRleHQgPSAnQ3JlYXRlIE5ldyBUYXNrJztcbiAgY3JlYXRlci5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtYnV0dG9uJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlcik7XG4gIGNyZWF0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHByb2plY3QuYWRkVGFzaygpO1xuICAgIHN0b3JlUHJvamVjdExpc3QoKTtcbiAgICBsb2FkUHJvamVjdChjb250ZW50LCBwcm9qZWN0KTtcbiAgfSk7XG5cbiAgLy91bFxuICBjb25zdCB1TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1saXN0Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodUxpc3QpO1xuXG4gIC8vbGkgZWxlbWVudHNcbiAgY29uc3QgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xuICBjb25zdCBwYXJlbnRJbmZvID0ge2NvbnRlbnQsIHByb2plY3R9O1xuICAvL2NvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgdGFza0xpc3QuZm9yRWFjaCh0ID0+IHtcbiAgICAvL2xpIGVsZW1lbnRcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHVMaXN0LmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAvL21pbmktcGFuZVxuICAgIGNyZWF0ZU1pbmlUYXNrUGFuZSh0LCByb3csIHBhcmVudEluZm8pO1xuICB9KTtcblxuICAvL2FwcGVuZCBsaXN0IHRvIGNvbnRlbnRcbiAgY29udGVudC5hcHBlbmRDaGlsZCh1TGlzdCk7XG59XG5cbmNvbnN0IGNyZWF0ZU1pbmlUYXNrUGFuZSA9ICh0YXNrLCBlbGVtLCBwYXJlbnRJbmZvKT0+e1xuICBjb25zdCBpbm5lckl0ZW0gPSBtaW5pVGFza0NvbnRlbnQodGFzaywgZWxlbSk7XG5cbiAgLy9leHBhbmRcbiAgY29uc3QgZXhwYW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZXhwYW5kZXIuY2xhc3NMaXN0LmFkZCgnbWluaS10YXNrLWV4cGFuZCcpO1xuICBleHBhbmRlci5pbm5lclRleHQgPSAnPic7XG4gIGlubmVySXRlbS5hcHBlbmQoZXhwYW5kZXIpO1xuICBleHBhbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZWxlbS5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVGdWxsVGFza1BhbmUodGFzaywgZWxlbSwgcGFyZW50SW5mbyk7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckl0ZW07XG59O1xuXG5jb25zdCBtaW5pVGFza0NvbnRlbnQgPSAodGFzaywgZWxlbSwgcGFyZW50SW5mbykgPT4ge1xuICBjb25zdCBpbm5lckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ21pbmktdGFzaycpO1xuICBlbGVtLmFwcGVuZChpbm5lckl0ZW0pO1xuXG4gIC8vdGl0bGVcbiAgY29uc3QgdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRUaXRsZS5jbGFzc0xpc3QuYWRkKCdtaW5pLXRhc2stdGl0bGUnKTtcbiAgdFRpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gIGlubmVySXRlbS5hcHBlbmQodFRpdGxlKTtcblxuICAvL2R1ZSBkYXRlXG4gIGNvbnN0IHREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHREYXRlLmNsYXNzTGlzdC5hZGQoJ21pbmktdGFzay1kYXRlJyk7XG4gIHREYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgaW5uZXJJdGVtLmFwcGVuZCh0RGF0ZSk7XG5cbiAgLy9zZXQgcHJpb3JpdHkgY29sb3JcbiAgaWYodGFzay5yZXNvbHZlZClcbiAgICBpbm5lckl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eUNvbG9yKCdub25lJykpO1xuICBlbHNlXG4gICAgaW5uZXJJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDb2xvcih0YXNrLnByaW9yaXR5KSk7XG5cbiAgcmV0dXJuIGlubmVySXRlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZ1bGxUYXNrUGFuZSA9ICh0YXNrLCBlbGVtLCBwYXJlbnRJbmZvKT0+e1xuICBjb25zdCBpbm5lckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtdGFzaycpO1xuICBlbGVtLmFwcGVuZChpbm5lckl0ZW0pO1xuXG4gIC8vY29weSB0aGUgY29udGVudCBvZiB0aGUgbWluaS10YXNrIGJhclxuICBjb25zdCBtaW5pID0gbWluaVRhc2tDb250ZW50KHRhc2ssIGlubmVySXRlbSk7XG5cbiAgLy9zaHJpbmtcbiAgY29uc3Qgc2hyaW5rZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2hyaW5rZXIuY2xhc3NMaXN0LmFkZCgnbWluaS10YXNrLWV4cGFuZCcpO1xuICBzaHJpbmtlci5pbm5lclRleHQgPSAnXic7XG4gIG1pbmkuYXBwZW5kKHNocmlua2VyKTtcbiAgc2hyaW5rZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgY3JlYXRlTWluaVRhc2tQYW5lKHRhc2ssIGVsZW0pO1xuICB9KTtcblxuICAvL2V4cGFuZGVkIGRldGFpbHNcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtdGFzay1kZXRhaWxzJyk7XG4gIGVsZW0uYXBwZW5kKGRldGFpbHMpO1xuXG4gIC8vZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtdGFzay10ZXh0Jyk7XG4gIGRlc2MuaW5uZXJUZXh0ID0gdGFzay5kZXNjO1xuICBkZXRhaWxzLmFwcGVuZChkZXNjKTtcblxuICAvL25vdGVzXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVzLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtdGFzay10ZXh0Jyk7XG4gIG5vdGVzLmlubmVyVGV4dCA9IHRhc2subm90ZXM7XG4gIGRldGFpbHMuYXBwZW5kKG5vdGVzKTtcblxuICAvL3ByaW9yaXR5XG4gIGNvbnN0IHByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpby5jbGFzc0xpc3QuYWRkKCdmdWxsLXRhc2stdGV4dCcpO1xuICBpZih0YXNrLnJlc29sdmVkKVxuICAgIHByaW8uaW5uZXJUZXh0ID0gYFByaW9yaXR5OiBub25lIChyZXNvbHZlZClgO1xuICBlbHNlXG4gICAgcHJpby5pbm5lclRleHQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICBkZXRhaWxzLmFwcGVuZChwcmlvKTtcblxuICAvL2NoZWNrbGlzdFxuICBjb25zdCBjTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNMaXN0LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtdGFzay1saXN0Jyk7XG4gIGRldGFpbHMuYXBwZW5kKGNMaXN0KTtcblxuICB0YXNrLmNoZWNrTGlzdC5mb3JFYWNoKGM9PntcbiAgICAvL291dGVyIGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdmdWxsLXRhc2stbGlzdC1pdGVtJyk7XG4gICAgY0xpc3QuYXBwZW5kKGNoZWNrKTtcblxuICAgIC8vY2hlY2tib3hcbiAgICBjb25zdCBjQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrLmFwcGVuZChjQm94KTtcbiAgICBpZihjWzFdKVxuICAgICAgY0JveC50b2dnbGVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICBjWzFdID0gIWNbMV07XG4gICAgICBzdG9yZVByb2plY3RMaXN0KCk7XG4gICAgfSk7XG5cbiAgICAvL3RleHQgZm9yIGNoZWNrYm94XG4gICAgY29uc3QgY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY1RleHQuaW5uZXJUZXh0ID0gY1swXTtcbiAgICBjaGVjay5hcHBlbmQoY1RleHQpO1xuICB9KTtcblxuICAvL2J1dHRvbnNcbiAgY29uc3QgYnV0dG9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvblJvdy5jbGFzc0xpc3QuYWRkKCdmdWxsLXRhc2stYnV0dG9uLXJvdycpO1xuICBkZXRhaWxzLmFwcGVuZChidXR0b25Sb3cpO1xuXG4gIC8vZWRpdCBidXR0b25cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtdGFzay1lZGl0Jyk7XG4gIGVkaXQuaW5uZXJUZXh0ID0gJ0VkaXQgVGFzayc7XG4gIGJ1dHRvblJvdy5hcHBlbmQoZWRpdCk7XG5cbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIC8vY29weSB0aGUgdGFza1xuICAgIGNvbnN0IHRhc2tDb3B5ID0gdGFzay5jb3B5KCk7XG4gICAgbG9hZFRhc2socGFyZW50SW5mby5jb250ZW50LCBwYXJlbnRJbmZvLnByb2plY3QsIHRhc2ssIHRhc2tDb3B5KTtcbiAgfSk7XG5cbiAgLy9kZWxldGUgYnV0dG9uXG4gIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZnVsbC10YXNrLWRlbGV0ZScpO1xuICBkZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBUYXNrJztcbiAgYnV0dG9uUm93LmFwcGVuZChkZWxCdXR0b24pO1xuICBkZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAvL2Nhbm5vdCByZWZyZXNoIGJlY2F1c2Ugbm8gcmVmZXJlbmNlIHRvIHRoZSBwcm9qZWN0IGhlcmVcbiAgICBlbGVtLnJlbW92ZSgpO1xuICAgIHBhcmVudEluZm8ucHJvamVjdC5kZWxldGVUYXNrKHRhc2spO1xuICAgIHN0b3JlUHJvamVjdExpc3QoKTtcbiAgfSk7XG5cbiAgLy9yZXNvbHZlIGJ1dHRvblxuICBjb25zdCByZXNvbHZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc29sdmUuY2xhc3NMaXN0LmFkZCgnZnVsbC10YXNrLXJlc29sdmUnKTtcbiAgcmVzb2x2ZS5pbm5lclRleHQgPSAnVG9nZ2xlIFJlc29sdmVkJztcbiAgYnV0dG9uUm93LmFwcGVuZChyZXNvbHZlKTtcbiAgcmVzb2x2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIC8vY2Fubm90IHJlZnJlc2ggYmVjYXVzZSBubyByZWZlcmVuY2UgdG8gdGhlIHByb2plY3QgaGVyZVxuICAgIHRhc2sucmVzb2x2ZWQgPSAhdGFzay5yZXNvbHZlZDtcbiAgICBlbGVtLmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZUZ1bGxUYXNrUGFuZSh0YXNrLCBlbGVtLCBwYXJlbnRJbmZvKTtcbiAgICBzdG9yZVByb2plY3RMaXN0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckl0ZW07XG59XG5cbmNvbnN0IHByaW9yaXR5Q29sb3IgPSAocHJpb3JpdHkpPT57XG4gIHN3aXRjaChwcmlvcml0eSl7XG4gICAgY2FzZSAnaGlnaCc6IFxuICAgICAgcmV0dXJuICdoaWdoLXByaW9yaXR5JztcbiAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgcmV0dXJuICdtZWRpdW0tcHJpb3JpdHknO1xuICAgIGNhc2UgJ2xvdyc6XG4gICAgICByZXR1cm4gJ2xvdy1wcmlvcml0eSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnbm8tcHJpb3JpdHknO1xuICB9XG59XG5cbmV4cG9ydCB7bG9hZFByb2plY3R9OyIsImltcG9ydCB7IHN0b3JlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdlTW9kdWxlXCI7XG5pbXBvcnQge2xvYWRQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0UGFnZU1vZHVsZS5qc1wiO1xuXG5jb25zdCBsb2FkVGFzayA9IChjb250ZW50LCBwcm9qZWN0LCB0YXNrLCB0YXNrQ29weSkgPT57XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAvL3RvcCBlbGVtZW50IGNvbnRhaW5lclxuICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9wQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1oZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmQodG9wQ29udGFpbmVyKTtcblxuICAvL2JhY2sgYnV0dG9uXG4gIGNvbnN0IGJhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBiYWNrZXIuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gUHJvamVjdCc7XG4gIGJhY2tlci5jbGFzc0xpc3QuYWRkKCdiYWNrLWJ1dHRvbicpO1xuICB0b3BDb250YWluZXIuYXBwZW5kKGJhY2tlcik7XG4gIGJhY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIGxvYWRQcm9qZWN0KGNvbnRlbnQsIHByb2plY3QpO1xuICB9KVxuXG4gIC8vaDFcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lclRleHQgPSAnRWRpdCBUYXNrJztcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAvL3RvZG86IGFsbCB0YXNrIGVsZW1lbnRzIGFzIGlucHV0c1xuXG4gIC8vY29udGFpbmVyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZChjb250YWluZXIpO1xuXG4gIC8vdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBsYWJlbE1ha2VyKGNvbnRhaW5lciwgJ1RpdGxlJyk7XG4gIHRpdGxlLmlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLHRhc2tDb3B5LnRpdGxlKTtcblxuICAvL3NhdmUgYnV0dG9uXG4gIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2F2ZS5pbm5lclRleHQgPSAnU2F2ZSBUYXNrJztcbiAgY29udGVudC5hcHBlbmQoc2F2ZSk7XG4gIHNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIC8vdG9kbzogdXBkYXRlIHRoZSBjb3B5IHdpdGggYWxsIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRzXG4gICAgdGFza0NvcHkudGl0bGUgPSB0aXRsZS5pbnB1dC52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQ29weS50aXRsZSk7XG5cbiAgICAvL3JlcGxhY2UgdGhlIG9yaWdpbmFsIHRhc2sgd2l0aCB0aGUgY29weVxuICAgIHByb2plY3QudGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0Lm1hcCgoZWxlbSk9PntcbiAgICAgICAgaWYoZWxlbSA9PT0gdGFzaylcbiAgICAgICAgICAgIHJldHVybiB0YXNrQ29weTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSk7XG5cbiAgICAvL3NhdmUgYW5kIGdvIGJhY2tcbiAgICBzdG9yZVByb2plY3RMaXN0KCk7XG4gICAgbG9hZFByb2plY3QoY29udGVudCwgcHJvamVjdCk7XG4gIH0pO1xufTtcblxuY29uc3QgbGFiZWxNYWtlciA9IChlbGVtLCB0aXRsZSkgPT5cbntcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmFwcGVuZChib3gpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIGJveC5hcHBlbmQobGFiZWwpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJveC5hcHBlbmQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHtsYWJlbCwgaW5wdXR9O1xufVxuXG5leHBvcnQge2xvYWRUYXNrfTsiLCJpbXBvcnQgeyByZXNldFN0b3JhZ2UsIGdldFByb2plY3RMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBkZWxldGVQcm9qZWN0fSBmcm9tIFwiLi9zdG9yYWdlTW9kdWxlXCI7XG5pbXBvcnQgeyBsb2FkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RQYWdlTW9kdWxlXCI7XG5cbi8vbW9kdWxlIGZvciBkaXNwbGF5aW5nIHByb2plY3RzIG9uIGEgbWFpbiBwYWdlXG5cbi8vZ2V0IHRoZSBjdXJyZW50IHByb2plY3QgbGlzdCBhbmQgYXNzZW1ibGUgYW4gaHRtbCBwYWdlXG5jb25zdCBsb2FkSG9tZSA9IGNvbnRlbnQgPT57XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vaDFcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gJ1RPRE8gTGlzdHMnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgLy9idXR0b25cbiAgICBjb25zdCBjcmVhdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlci5pbm5lclRleHQgPSAnQ3JlYXRlIE5ldyBQcm9qZWN0JztcbiAgICBjcmVhdGVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1idXR0b24nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZXIpO1xuICAgIGNyZWF0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgbG9hZEhvbWUoY29udGVudCk7XG4gICAgfSk7XG5cbiAgICAvL3VsXG4gICAgY29uc3QgdUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1saXN0Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh1TGlzdCk7XG5cbiAgICAvL2xpIGVsZW1lbnRzXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIC8vY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2gocCA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgICAgLy9saSBlbGVtZW50XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgICAvL3RpdGxlXG4gICAgICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICBwVGl0bGUuaW5uZXJUZXh0ID0gcC5uYW1lO1xuICAgICAgaXRlbS5hcHBlbmQocFRpdGxlKTtcblxuICAgICAgLy90YXNrIGNvdW50XG4gICAgICBjb25zdCBwVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcFRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY291bnRlcicpO1xuICAgICAgcFRhc2tzLmlubmVyVGV4dCA9IGAke3AudGFza0xpc3QubGVuZ3RofSB0b2Rvc2A7XG4gICAgICBpdGVtLmFwcGVuZChwVGFza3MpO1xuXG4gICAgICAvL3ZpZXdcbiAgICAgIGNvbnN0IHBWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHBWaWV3LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdmlldycpO1xuICAgICAgcFZpZXcuaW5uZXJUZXh0ID0gJ1ZpZXcnO1xuICAgICAgaXRlbS5hcHBlbmQocFZpZXcpO1xuICAgICAgcFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBsb2FkUHJvamVjdChjb250ZW50LCBwKTtcbiAgICAgIH0pO1xuXG4gICAgICAvL2RlbGV0ZSBcbiAgICAgIGNvbnN0IHBEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgcERlbGV0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuICAgICAgcERlbGV0ZS5pbm5lclRleHQgPSAnRGVsZXRlJztcbiAgICAgIGl0ZW0uYXBwZW5kKHBEZWxldGUpO1xuICAgICAgcERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGRlbGV0ZVByb2plY3QocCk7XG4gICAgICAgIGxvYWRIb21lKGNvbnRlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vYXBwZW5kIHRvIGxpc3RcbiAgICAgIHVMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy9hcHBlbmQgbGlzdCB0byBjb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh1TGlzdCk7XG5cbiAgICAvL2EgcmVzZXQgYnV0dG9uXG4gICAgY29uc3QgcmVzZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVzZXRlci5jbGFzc0xpc3QuYWRkKCdob21lLXJlc2V0Jyk7XG4gICAgcmVzZXRlci5pbm5lclRleHQgPSAnUmVzZXQgYWxsJztcbiAgICBjb250ZW50LmFwcGVuZChyZXNldGVyKTtcbiAgICByZXNldGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgIHJlc2V0U3RvcmFnZSgpO1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgbG9hZEhvbWUoY29udGVudCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHtsb2FkSG9tZX07IiwiaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSBcIi4vaG9tZVBhZ2VNb2R1bGUuanNcIjtcbmltcG9ydCB7cHJvamVjdEZhY3Rvcnl9IGZyb20gXCIuL3Byb2plY3RPYmpNb2R1bGUuanNcIjtcbmltcG9ydCB7bG9hZFByb2plY3R9IGZyb20gXCIuL3Byb2plY3RQYWdlTW9kdWxlLmpzXCI7XG5pbXBvcnQge3Rhc2tGYWN0b3J5fSBmcm9tIFwiLi90YXNrT2JqTW9kdWxlXCI7XG5pbXBvcnQge2xvYWRQcm9qZWN0TGlzdCwgc3RvcmVQcm9qZWN0TGlzdCwgcmVzZXRTdG9yYWdlfSBmcm9tIFwiLi9zdG9yYWdlTW9kdWxlXCJcblxuLy90ZXN0IHRoYXQgd2VicGFjayB3b3Jrc1xuY29uc29sZS5sb2coJ3dlYnBhY2sgY29tcGlsZWQgdG8gbWFpbi5qcycpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy9yZXNldFN0b3JhZ2UoKTsgLy90b2RvOiByZW1vdmUgdGhpcyByZXNldFxubG9hZFByb2plY3RMaXN0KCk7XG5cbmxvYWRIb21lKGNvbnRlbnQpO1xuY29uc29sZS5sb2coJ2VuZCBvZiBpbmRleCcpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9