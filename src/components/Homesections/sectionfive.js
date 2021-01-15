import { createElement } from "../../react/index";
import { MultielementCreater } from "../../react/multieElement";
import header from "../../../src/components/Homesections/Helper/helper";






let sectionfive=()=>{
     let container=createElement("section",{class:"asked__question"},
                          createElement("div",null,
                                  createElement("h1",null,"Frequently Asked Questions"),
                                  createElement("div",{style:"width:70%;margin:auto"},header())
                                        )  
                                )
          return container;
                    }



export default sectionfive;