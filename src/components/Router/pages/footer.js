import { createElement }from '../../../react/index';


let container = document.createDocumentFragment();
console.log(container)

let div = (e)=>{
    e.forEach((a) => {
        let items = createElement("a",{ class: "link"}, a.name);
        container.appendChild(items)
        console.log(items)     
        });
     }

let div2 = div([
    {name: "FAQ"},
    {name: "Help Center"},
    {name: "Terms of Use"},
    {name: "Privacy"}
])


export const footer = ()=>{
    
    return createElement('footer',{class: "footer"},createElement('div',{class: "container-flex"},
    createElement("div",{class: "parent"},container)))
}