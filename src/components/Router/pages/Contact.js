import {createElement} from "../../../react/index"
import header  from "../../main-page/header";
import home from "../../main-page/home"



let Contact=()=>{

  let fragement=document.createDocumentFragment();
  fragement.appendChild(header())
  fragement.appendChild(home())
  let a=createElement("div",null,fragement,)
  return a;

}
export default Contact;