import { createElement } from "../../../react/index";

import header from "../../main-page/header";
import Footer from "../..//Homesections/footer";

let HomeSectionTwo = () => {
    let im = createElement("img", {
        src:
            "https://i.pinimg.com/236x/c9/7d/1e/c97d1e269e67651a072b15b39e078dce.jpg",
    });

    let im2 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/28/b8/c6/28b8c6fc85dcf0c2990bf3f2757871e3.jpg",
    });

    let im3 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/03/30/39/0330391ab7d61785509998af719152e4.jpg",
    });

    let im4 = createElement("img", {
        src:
            "https://i.pinimg.com/236x/ec/c9/d8/ecc9d8239060607331cc062710222d13.jpg",
    });

    let im5 = createElement("img", {
        src:
            "https://i.pinimg.com/564x/01/49/24/014924096a91a3bf280ff615573b850a.jpg",
    });

    let im6 = createElement("img", {
        src:
            "https://i.pinimg.com/originals/c4/f3/33/c4f333f28dacf140f3a1a45a6570f849.jpg",
    });

    let sectiontwo = createElement(
        "section",
        { style: "background-color: #1d1d1d;", class: "movies-section" },
        createElement(
            "div",
            { class: "images-flex" },
            createElement("div", null, im),
            createElement("div", null, im2),
            createElement("div", null, im3),
            createElement("div", null, im4),
            createElement("div", null, im5),
            createElement("div", null, im6)
        )
    );

    return sectiontwo;
};

let HomeSectionThree = () => {
    let img1 = createElement("img", {
        src: "https://i.pinimg.com/236x/ed/99/e0/ed99e03a2dfd07ab614a9be2bfa26a1a.jpg",
    });

    let img2 = createElement("img", {
        src: "https://i.pinimg.com/236x/09/40/dd/0940ddd6aba8c6c9b36473a9b577903c.jpg",
    });

    let img3 = createElement("img", {
        src: "https://i.pinimg.com/236x/74/fb/ad/74fbad183a7a92adec170ee087df00fe.jpg",
    });

    let img4 = createElement("img", {
        src: "https://i.pinimg.com/236x/34/b2/b3/34b2b34be5c916906b3444a1a2f42abb.jpg",
    });

    let img5 = createElement("img", {
        src: "https://i.pinimg.com/236x/f1/9f/4e/f19f4e66c975e7dff2946de1fa07066c.jpg",
    });

    let img6 = createElement("img", {
        src: "https://i.pinimg.com/236x/1d/d1/f2/1dd1f2d4381c61e30dd5398216203b04.jpg",
    });

    let img7 = createElement("img", {
        src: "https://i.pinimg.com/236x/8c/48/bc/8c48bcb431a8a566dd9d0e67caa27f0d.jpg",
    });

    let img8 = createElement("img", {
        src: "https://i.pinimg.com/236x/92/bb/55/92bb5594d75e2254a2c11cac6ef70854.jpg",
    });

    let img9 = createElement("img", {
        src: "https://i.pinimg.com/236x/cf/73/61/cf73616c340918e440546048fa3b798c.jpg",
    });

    let img10 = createElement("img", {
        src: "https://i.pinimg.com/236x/95/bd/28/95bd28e1ea5ea2820cbd172ee878fb63.jpg",
    });

    let img11 = createElement("img", {
        src: "https://i.pinimg.com/236x/f5/b5/a7/f5b5a77d8089a427d42bcafdd244b58a.jpg",
    });

    let img12 = createElement("img", {
        src: "https://i.pinimg.com/236x/b8/d5/44/b8d54405121d0fc1ae15ba526c1d5a24.jpg",
    });

    let img13 = createElement("img", {
        src: "https://i.pinimg.com/236x/8f/02/69/8f0269a160db47734b3e74e89322debb.jpg",
    });

    let img14 = createElement("img", {
        src: "https://i.pinimg.com/236x/83/61/68/8361682badbbf43068dcc88c97d04389.jpg",
    });

    let img15 = createElement("img", {
        src: "https://i.pinimg.com/236x/b9/36/cd/b936cd4b23e6d9188b8d6dd7002c8f9a.jpg",
    });

    let img16 = createElement("img", {
        src: "https://i.pinimg.com/236x/a5/b9/92/a5b9928e410e3e83a2790f7c67e598ba.jpg",
    });

    let img17 = createElement("img", {
        src: "https://i.pinimg.com/236x/d9/34/88/d934883417a601b7e9fa4b9613b813db.jpg",
    });

    let img18 = createElement("img", {
        src: "https://i.pinimg.com/236x/77/c6/f3/77c6f3dfc60791b6635aea49b246234f.jpg",
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
            createElement("h2", null, "Continue Watching For Free Riders"),

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

export const Movies = () => {
    const para = createElement(
        "p",
        null,
        "Deadly enemies. Hidden traitors. Secrets from the past. He’s back in a world he was trying to forget. This time, he trusts no one."
    );

    const img = createElement("img", {
        src:
            "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdTmoUZB5rC4ll1baYl843yLwKqtUHqxYoJSZAi-7uuMADeo5GTibu7X-YTzA6LTrwPYFkNZOv1StIEIyTcPLVIR6gZK24JIc7L7NnJifkRZCjr2vWc7qSrgArR7o2SRDoLvhpfnOg2om3uGvtmasbjyywwsa2QTd7Sq_4JcudnYjw.webp?r=34b",
        style: "width: 33%;",
    });

    const icon2 = createElement("i", {
        class: "fa fa-info-circle",
        style: "font-size:22px; margin-right:7px;",
    });
    const ic2 = createElement("span", { style: "font-size:28px" }, "More Info");
    const button2 = createElement("button", null, icon2, ic2);

    const icon = createElement("i", {
        class: "fa fa-play",
        style: "font-size:22px; margin-right:7px",
    });
    const ic = createElement("span", { style: "font-size:28px" }, "play");
    const button = createElement("button", null, icon, ic);

    const homeDiv = createElement(
        "div",
        { class: "homeDiv" },
        img,
        para,
        button,
        button2
    );
    let fragement = document.createDocumentFragment();
    fragement.appendChild(header());

    fragement.appendChild(createElement("section", { class: "Movies" }, homeDiv));

    fragement.appendChild(HomeSectionTwo());
    fragement.appendChild(HomeSectionThree());

    fragement.appendChild(Footer());

    return fragement;
};
