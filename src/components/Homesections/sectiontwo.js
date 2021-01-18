import { createElement } from "../../react/index";
import {MultielementCreater}   from "../../react/multieElement"
import  tv from "../../../src/Assests/tv.png";

let SectionTwo=()=>{
     let sectiontwo=createElement("section",{class:"Enjoy-section"},
                    createElement("div",{class:"container Enjoy-main",style:"min-height:370px;padding:70px;background-color:#000000"},
                    createElement("div",{class:"itemone  animate__animated  animate__bounceIn", },MultielementCreater("<h1 class='animate__animated  animate__fadeInLeft' >Enjoy on your TV. </h1><h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>")),
                    createElement("div",{class:"itemtwo" },createElement("img",{src:tv})))
     
     
     )

      return   sectiontwo;
}

export  {SectionTwo}