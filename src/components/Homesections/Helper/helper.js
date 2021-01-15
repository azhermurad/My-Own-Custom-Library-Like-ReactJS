

import { createElement } from '../../../react/index';


// let a=document.querySelector("li").
export const Header = () => {
    const menuItems = [
        {
           
            name: 'What  is netflix?'
        },
        { 
          
            name: 'How much does Netflix cost?'
        },
        {
           
            name: 'Where can I watch?'
        },
        {
           
            name: 'What can I watch on Netflix?'
        },
       
        {
           
            name: 'How do I cancel?'
        },
    ]

    const list = [];

    menuItems.forEach(item => {
        const liProps = {
            class:"list-itme",
            style: "padding: 15px 15px;margin-top:10px;background-color:#303030;font-size: 1.725rem;"
        }
        let span=createElement("span",{style:"float:right", onclick: (e) => {
                  if(e.target.parentNode.nextElementSibling.style.display==="none"){
                    e.target.style.transform="rotate(120deg)"

                    e.target.parentNode.nextElementSibling.style.display="block"
                    //   alert("dfkjl")
                      return ;
                  }
                  e.target.parentNode.nextElementSibling.style.display="none"
                  e.target.style.transform="rotate(0deg)"

                  
                 
         
           },   },"+")

        // let span=document.createDocumentFragment()
        let div=createElement("div",{class:"toggle-container"},createElement("div",{style:"display:inline-block;"},item.name),span)

        const li = createElement('li', liProps,div,createElement("p",{style:"margin-top:5px;display:none"},"this is an toogle section "));
        list.push(li);
    })

    const menus = createElement('ul', {style: "padding: 5px;color:white;margin:0px;list-style:none"}, list);
    return createElement('div', null, menus,createElement("form",{style:"margin-top:50px"},
    createElement("h3",{style:"color:white;text-align:center"},"Ready to watch? Enter your email to create or restart your membership."),
    createElement("div",{style:"text-align:center"},createElement("input",{style:"width:70%;padding:20px",placeholder:"Email address"}),createElement("button",{style:"color:white;padding:21px;background-color:red;border:none;letter-spacing:1.3px;font-family:bolder"},"Get STARTED"))));
};


export default Header;