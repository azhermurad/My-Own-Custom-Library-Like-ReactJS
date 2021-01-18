import {createElement} from  "../../../react/index";
import logo from "../../../Assests/netflix-bg.jpg";
import brand from "../../../Assests/logo.png"
import fbPic from "../../../Assests/fb-logo.png";
import home from "../../Router/pages/Home"
import {footer} from "./footer"
import FormSubmit from "../../Homesections/Helper/formvalidation"
 



let Login = ()=> {



  let loginContainer=createElement("div", {class: "container-wrapper"}, createElement("div", {class: "img-container",style:`background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${logo});min-height:100vh`},
  createElement("img", {src:brand, class: "brand"}),
  createElement("div",{class: "login-outer"},createElement("div", {class: "login-inner"},createElement("h1", {class: "main-heading"},"Sign In"),
  createElement("form",{class: "form",onsubmit:(e)=>{FormSubmit(e)}},createElement("div",{class: "input-wrape"},createElement("input",{type: "email",placeholder: "Email or phone Number",name:"email"})),
  createElement("div",{class: "input-wrape"},createElement("input",{type: "password",placeholder: "password",name:"password"})),
  createElement("div",{class: "input-wrape"},createElement("button",{class: "btn-form"},"Sign In")),
  createElement("div",{class: "remember-help"},createElement("div",{class: "remember"},createElement("span",null,
  createElement("input",{type: "checkbox"})),createElement("span",null,"Remember Me")), createElement("div", {class: "need-help"},"Need Help?")),
  createElement("div",{class: "login-with-fb"},createElement("span",null,createElement("img",{src:fbPic})),
  createElement("span",null,"Login With facebook")),createElement("div",{class: "signNow"}, createElement("span",null,"New to Netflix?"), createElement("a",{class:"white-color",href: "/"},"Sign up Now") ),
  createElement("p", {class: "last-p"}, "This page is protected by Google reCAPTCHA to ensure you're not a bot.")))),
  footer())
 
  )                               


return loginContainer;
}




export default Login;




