import { createElement } from "../../react/index";


let ul = (li) => {

    let freament = document.createDocumentFragment()
    li.forEach(element => {
        let item = createElement("li", null, element)
        freament.appendChild(item)
    });


    return createElement("ul", { style: "margin:0px;padding:0px;list-style:none" }, freament)
}

let u = ul(["FAQ", "Investor Relations", "Privacy", "Speed Test"])
let u2 = ul(["Help Centert", "Jobs", "Cookie Preference", "legal Notice"])
let u3 = ul(["Account", "Ways to Watch", "Corporate information", "Netflix  Originals"])
let u4 = ul(["Media Center", "Terms of Use", "Contact us"])
console.log(u)



let Footer = () => {
    let footer = createElement("footer", { class: "footer-section" }, createElement("div", { class: "main" },
        createElement("p", { style: "margin-bottom:10px" }, "Questions? Contact us"),
        createElement("div", { class: "flex-container" },
            createElement("div", null, u)
            , createElement("div", null, u2),
            createElement("div", null, u3),
            createElement("div", null, u4))))

    return footer;
}


export default Footer;