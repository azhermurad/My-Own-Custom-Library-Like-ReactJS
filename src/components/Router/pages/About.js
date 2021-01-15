import {createElement} from "../../../react/index"
import logo from "../../../Assests/a.jpg"

let About=()=>{
  // let img=document.createElement("img")
  //  img.setAttribute("src",logo)
  //  img.setAttribute("width","100%")
  //  img.setAttribute("height","400px")
 
  // let a=createElement("div",{:logo})
  let mainDiv=createElement("div",{class:"net-bg", style:`background:url(${logo}); height: 100%; width: 100%;`})
  // let b=createElement("div",null,img)
  return mainDiv;
""
}
export default About;