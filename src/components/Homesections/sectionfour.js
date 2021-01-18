import { createElement } from "../../react/index";
import  {MultielementCreater}  from "../../react/multieElement"
import  tv from "../../../src/Assests/2.png";

let Sectionfour=()=>{
     let sectionfour=createElement("section",{class:"Enjoy-section"},
                    createElement("div",{class:"container Enjoy-main",style:"min-height:370px;padding:70px;background-color:#000000"},
                    createElement("div",{class:"itemone" },MultielementCreater("<h1 >Watch everywhere. </h1><h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>")),
                    createElement("div",{class:"itemtwo" },createElement("img",{src:tv})))
     
     
     )

      return   sectionfour;
}

export  {Sectionfour}