import { createElement } from "../../react/index";

 const Header = () => {
  const listProps = (link) => ({
    onclick: () => {
      window.location.pathname = link;
    },
  });
  const menuItems = [
    {
      link: "/home",
      name: "Home",
      icon: 'fa fa-search',
    },
    {
      link: "/TvShows",
      name: "TV Shows",
      icon: 'fa fa-gift 2x',
    },
    {
      link: "/Movies",
      name: "Movies",
      icon: 'fa fa-bell-o',
    },
    {
      link: "/NewPopular",
      name: "New & Popular",
      icon: '',
    },
    {
      link: "/MyList",
      name: "MyList",
      icon: "icon-search fa-10x",
    },
  ];

  // Here is the Frist list 

  const list1 = [];
  menuItems.forEach((item) => {
    const li = createElement(
      "li",
      { ...item.props, ...listProps(item.link) },
      createElement('i', { class: item.icon }))
    list1.push(li);
  });

  // Here is the list of Icons 

  const list2 = [];
  menuItems.forEach((item) => {
    const icons = createElement(
      "li",
      { ...item.props, ...listProps(item.link) },
      item.name
    );
    list2.push(icons);
  });

  const img = createElement("img", { src: "https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" })
  const menus = createElement("ul", { class: "itemone" }, list2);
  const menus2 = createElement('ul', { class: "itemtwo" }, list1)
  const NavDiv = createElement("div", { class: 'NavDiv' }, img, menus, menus2)
  return createElement("header", { class: 'header' }, NavDiv);
};


export default Header;