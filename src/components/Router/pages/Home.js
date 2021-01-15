import {createElement} from "../../../react/index";
import bg from "../../../Assests/a.jpg"
import logo from "../../../Assests/logo.png"
import {SectionTwo} from "../../Homesections/sectiontwo"
import {SectionThree} from "../../Homesections/sectionthree"
import {Sectionfour} from "../../Homesections/sectionfour"
import Sectionfive from "../../Homesections/sectionfive"
import  hrline from "../../Homesections/hrline";
import  footer from "../../Homesections/footer"
// import { a } from "../../Homesections/Helper/helper";



let Home=()=>{
 
  // let a=createElement("h1",null,"home page ")
 let Fragment=document.createDocumentFragment();
 





  let mainDiv=createElement("section",{class:"net-bg", style:`background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)) ,url(${bg});`},
    createElement("div",{class:"container"},
  createElement("div",{class:"header-container"},
  createElement("div",{class:"header-items1"},createElement("img",{src:logo,class:"logo-img"})),
  createElement("div",{class:"header-items2"},
  createElement("button",{class:"signup-btn"},createElement("a",{href:"/login"},"SIGN IN")))),createElement("div",{class:"main-body"},
  createElement("div",{class:"card-body"},createElement("h1",{class:"animate__animated animate__bounce animate__delay-2s"},"Unlimited movies, TV shows, and more."),
  createElement("h2",{class:" animate__animated animate__fadeInLeft "},"Watch anywhere. Cancel anytime."),
  createElement("form",null,createElement("h3",null,"Ready to watch? Enter your email to create or restart your membership."),
  createElement("div",null,createElement("input",{style:"padding:20px;width:60%",placeholder:"Email address"}),createElement("button",{class:"btn-get"},"GET STARTED>")))
  ))))
 
  Fragment.appendChild(mainDiv)
  Fragment.appendChild(hrline())
  Fragment.appendChild(SectionTwo())
  Fragment.appendChild(hrline())
  Fragment.appendChild(SectionThree())
  Fragment.appendChild(hrline())
  Fragment.appendChild(Sectionfour())
  Fragment.appendChild(hrline())
  Fragment.appendChild(Sectionfive())
  Fragment.appendChild(hrline())
  Fragment.appendChild(footer())
  
 
  return Fragment;

}
export default Home;

 





