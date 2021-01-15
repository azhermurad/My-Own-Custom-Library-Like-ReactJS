import { createElement } from '../react';

export const Header = () => {
    const menuItems = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/about',
            name: 'About'
        },
        {
            link: '/contacts',
            name: 'Contacts'
        },
    ]
    const list = [];

    menuItems.forEach(item => {
        const liProps = {
            onclick: () => {
                window.location.pathname = item.link;
            },
            style: "padding: 5px 15px; display: inline-block"
        }
        const li = createElement('li', liProps, item.name);
        list.push(li);
    })

    const menus = createElement('ul', {style: "padding: 5px;background-color:#1e1e1e;color:white;margin:0px"}, list);
    return createElement('header', null, menus);
};