import { createElement } from "../../../react/index"
import header from "../../main-page/header"
import Footer from "../../Homesections/footer";




  
let HomeSectionThree = () => {
    let img1 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/b4/7f/e1/b47fe158326b0ed9c9fc6dc63a2f2dc4.jpg",
    });

    let img2 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/61/ac/8b/61ac8b01e1778869b07ce548df4b0f1b.jpg",
    });

    let img3 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/ca/05/03/ca050301c394ccd761bb3994e01d4e5c.jpg",
    });

    let img4 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/07/56/ed/0756ed6256b663e5028224366ccb420a.jpg",
    });

    let img5 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/a8/04/ea/a804ea02b906d396730a54b73553e512.jpg",
    });

    let img6 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/43/4d/3b/434d3b3816c3cc208547b7e3e7f19602.jpg",
    });

    let img7 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/24/ab/46/24ab46eb8891f0b42b0462470d3f6c6a.jpg",
    });

    let img8 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/5c/78/e1/5c78e157bdce726df94013c4c6ad031a.jpg",
    });

    let img9 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/d0/07/20/d0072029fd2fa9be2eb20ca4c4c94f3f.jpg",
    });

    let img10 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/82/a4/92/82a49246624301221e6787e130ad7e2c.jpg",
    });

    let img11 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/db/f9/19/dbf919c2070413944896d6e071b9e115.jpg",
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
            createElement("h2", { style: "font-family: Times, Times New Roman, Georgia, serif;" }, "My List"),

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
            )
        )
    );
    return sectionThree;
};


export const MyList = () => {


    let fragement = document.createDocumentFragment();
    fragement.appendChild(header())

    fragement.appendChild(createElement("section", { class: "Newpopular" }))

    fragement.appendChild(HomeSectionThree())

    fragement.appendChild(Footer())


    return fragement;
}