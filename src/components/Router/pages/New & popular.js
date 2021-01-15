import { createElement } from "../../../react/index"
import Footer from "../../Homesections/footer";
import header from "../../main-page/header"




let HomeSectionThree = () => {
    let img1 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/30/7f/60/307f60acfa1b2eaf696e88bbb89b459e.jpg",
    });

    let img2 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/a2/d0/9c/a2d09cde274f2a766096b7c8e6af7c3d.jpg",
    });

    let img3 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg",
    });

    let img4 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/f3/bd/5c/f3bd5c54882102e663d50ca4b66a209d.jpg",
    });

    let img5 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/51/52/94/5152944272edbeec69a2607b2ab94a80.jpg",
    });

    let img6 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg",
    });

    let img7 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/30/7f/60/307f60acfa1b2eaf696e88bbb89b459e.jpg",
    });

    let img8 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/55/73/8a/55738afac01971b4c3f34d5a7c14b334.jpg",
    });

    let img9 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg",
    });

    let img10 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/56/db/f8/56dbf823f641f898a0f0e1320d6b585e.jpg",
    });

    let img11 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg",
    });

    let img12 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg",
    });

    let img13 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/30/7f/60/307f60acfa1b2eaf696e88bbb89b459e.jpg",
    });

    let img14 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/a2/d0/9c/a2d09cde274f2a766096b7c8e6af7c3d.jpg",
    });

    let img15 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg",
    });

    let img16 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/f3/bd/5c/f3bd5c54882102e663d50ca4b66a209d.jpg",
    });

    let img17 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/51/52/94/5152944272edbeec69a2607b2ab94a80.jpg",
    });

    let img18 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg",
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