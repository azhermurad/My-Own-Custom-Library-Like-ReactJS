import { createElement } from "../../../react/index"
import Footer from "../../Homesections/footer";
import header from "../../main-page/header"




let HomeSectionThree = () => {
    let img1 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/36/35/2c/36352c39b987e3a19900aad0b0c2e84a.jpg",
    });

    let img2 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/39/22/bd/3922bd08e1e9be4e44a50b84ccdbe32c.jpg",
    });

    let img3 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/b3/ac/ff/b3acffb491b2bdca344ed4b08337016d.jpg",
    });

    let img4 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/4e/f2/1e/4ef21ed6a801bbabadbe4450132e4075.jpg",
    });

    let img5 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/4a/3c/20/4a3c2013074100091d71ffd5a9419bb7.jpg",
    });

    let img6 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/39/2f/ab/392faba2ac993d0985225b93758a2174.jpg",
    });

    let img7 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/44/78/5c/44785cfe7d3939077814927b25eed472.jpg",
    });

    let img8 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/84/c7/95/84c795831244f19005453adc948fd2cb.jpg",
    });

    let img9 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/80/b4/c0/80b4c046186d7a8f832d2c7bfcb34538.jpg",
    });

    let img10 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/17/5c/07/175c07ab3e08de9d4c2cdf3df69adb4f.jpg",
    });

    let img11 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/18/52/c2/1852c2917c889739dcaece17555d677c.jpg",
    });

    let img12 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/bb/25/7c/bb257c2f2d91ffbbc55871804ba45f07.jpg",
    });

    let img13 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/35/0a/40/350a40011bcb70889fc0374e65004a48.jpg",
    });

    let img14 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/d6/69/68/d66968f28738963406870592643afbf2.jpg",
    });

    let img15 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/5f/d6/63/5fd663580095e042c4526437e6ae8a8f.jpg",
    });

    let img16 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/df/1c/42/df1c4219b7455c0e35099b7acd4133db.jpg",
    });

    let img17 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/aa/31/10/aa3110e7d2a384d2230623c561da302b.jpg",
    });

    let img18 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/cb/54/54/cb5454df30a5aff0db1c5a97a36da78d.jpg",
    });

    const sectionThree = createElement(
        "section",
        {
            style: "background-color: #1d1d1d;padding:50px 0px",
            class: "movies-section",
        },

        createElement(
            "div",
            { style: "width:95%;margin:auto", class: "movies-list" },
            createElement("h2",{style:"font-family: Times, Times New Roman, Georgia, serif;"}, "Top Ten In Pakistan Today"),

            createElement(
                "div",
                { class: "box-grid" },

                createElement("div", null, img1),
                createElement("div", null, img2),
                createElement("div", null, img3),
                createElement("div", null, img4),
                createElement("div", null, img5),
                createElement("div", null, img6),
                createElement("div", null, img7),
                createElement("div", null, img8),
                createElement("div", null, img9),
                createElement("div", null, img10),
                createElement("div", null, img11),
                createElement("div", null, img12),
                createElement("div", null, img13),
                createElement("div", null, img14),
                createElement("div", null, img15),
                createElement("div", null, img16),
                createElement("div", null, img17),
                createElement("div", null, img18)
            )
        )
    );
    return sectionThree;
};


export const NewPopular = () => {








    let fragement = document.createDocumentFragment();
    fragement.appendChild(header())

    fragement.appendChild(createElement("section", { class: "Newpopular" }))


    fragement.appendChild(HomeSectionThree())

    fragement.appendChild(Footer())


    return fragement;
}