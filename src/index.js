import { createElement, reactDOM } from './react';
import { Header } from './components/header';
import Route from "./components/Router/pages/Route"
import  "./style.css";

const App = () => {
    
    let mainDiv=createElement("div",null, Route())
    // let mainDiv=createElement("div",null, Header(), layout)
     
    // mainDiv.appendChild(Header())
    // mainDiv.appendChild(Route())
  

  //  createElement('div', null, mainDiv)np
    return mainDiv;
}
reactDOM.render(App(), document.getElementById('root'));