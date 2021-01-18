import { createElement } from "../../react/index";
import{  MultielementCreater }  from "../../react/multieElement"
import tv  from "../../../src/Assests/1.jpg";


let SectionThree=()=>{

    let sectionthree=createElement("section",{class:"Enjoy-section"},
                    createElement("div",{class:"container Enjoy-main",style:"min-height:370px;padding:70px;background-color:#000000"},
                    createElement("div",{class:"itemtwo" },createElement("img",{src:tv})),
                    createElement("div",{class:"itemone" },MultielementCreater("<h1>Download your shows to watch offline.</h1><h2>Save your favorites easily and always have something to watch.</h2>")))
     
     
     )
  
return sectionthree;
    
}

export  {SectionThree}

let b=document.createRange().createContextualFragment("<div>dfg</div>")
