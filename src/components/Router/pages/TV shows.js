import { createElement } from "../../../react/index"
import Footer from "../../Homesections/footer"
import header from "../../main-page/header"



let HomeSectionTwo = () => {

    let im = createElement("img", { src: "https://i.pinimg.com/236x/3e/a1/19/3ea119c4317a47d9212b4ddab4efed9b.jpg"});

    let im2 = createElement("img", { src: "https://i.pinimg.com/236x/0e/78/41/0e784170cc7a7b8edf0f52cf9d358283.jpg" });

    let im3 = createElement("img", { src: "https://i.pinimg.com/236x/91/05/89/910589071f42af93cb2c98e9b0ecc0de.jpg" })

    let im4 = createElement("img", { src: "https://i.pinimg.com/236x/70/ea/ca/70eaca4c869feecd686aaa9ae6657d22.jpg" })

    let im5 = createElement("img", { src: "https://i.pinimg.com/236x/c4/b1/35/c4b135dcfae292f1c9349f3e5c6d683c.jpg" })

    let im6 = createElement("img", { src: "https://i.pinimg.com/236x/c5/7e/4f/c57e4f7fd1c3922ed5bc46a73de9c3ca.jpg" })

    let sectiontwo = createElement("section", { style: "background-color: #1d1d1d;", class: "movies-section" },
        createElement("div", { class: "images-flex" },
            createElement("div", null, im),
            createElement("div", null, im2),
            createElement("div", null, im3),
            createElement("div", null, im4),
            createElement("div", null, im5),
            createElement("div", null, im6)

        ))

    return sectiontwo;
}

let HomeSectionThree = () => {


    let img1 = createElement("img", { src: "https://i.pinimg.com/236x/30/7f/60/307f60acfa1b2eaf696e88bbb89b459e.jpg" });

    let img2 = createElement("img", { src: "https://i.pinimg.com/236x/a2/d0/9c/a2d09cde274f2a766096b7c8e6af7c3d.jpg" });

    let img3 = createElement("img", { src: "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg" })

    let img4 = createElement("img", { src: "https://i.pinimg.com/236x/f3/bd/5c/f3bd5c54882102e663d50ca4b66a209d.jpg" })

    let img5 = createElement("img", { src: "https://i.pinimg.com/236x/51/52/94/5152944272edbeec69a2607b2ab94a80.jpg" })

    let img6 = createElement("img", { src: "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg" })

    let img7 = createElement("img", { src: "https://i.pinimg.com/236x/30/7f/60/307f60acfa1b2eaf696e88bbb89b459e.jpg" });

    let img8 = createElement("img", { src: "https://i.pinimg.com/236x/55/73/8a/55738afac01971b4c3f34d5a7c14b334.jpg" });

    let img9 = createElement("img", { src: "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg" })

    let img10 = createElement("img", { src: "https://i.pinimg.com/236x/56/db/f8/56dbf823f641f898a0f0e1320d6b585e.jpg" })

    let img11 = createElement("img", { src: "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg" })

    let img12 = createElement("img", { src: "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg" })

    let img13 = createElement("img", { src: "https://i.pinimg.com/236x/30/7f/60/307f60acfa1b2eaf696e88bbb89b459e.jpg" });

    let img14 = createElement("img", { src: "https://i.pinimg.com/236x/a2/d0/9c/a2d09cde274f2a766096b7c8e6af7c3d.jpg" });

    let img15 = createElement("img", { src: "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg" })

    let img16 = createElement("img", { src: "https://i.pinimg.com/236x/f3/bd/5c/f3bd5c54882102e663d50ca4b66a209d.jpg" })

    let img17 = createElement("img", { src: "https://i.pinimg.com/236x/51/52/94/5152944272edbeec69a2607b2ab94a80.jpg" })

    let img18 = createElement("img", { src: "https://i.pinimg.com/236x/0d/0c/4d/0d0c4d8517f226a2ce0a866882ba6fe5.jpg" })


    const sectionThree = createElement("section", { style: "background-color: #1d1d1d;padding:50px 0px", class: "movies-section" },

        createElement("div", { style: "width:95%;margin:auto", class: "movies-list" },
            createElement("h2", null, "Continue Watching For Free Riders"),

            createElement("div", { class: "box-grid" },

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
                createElement("div", null, img18),
            )
        )
    )
    return sectionThree;
}

 const TvShows = () => {


    const para = createElement("p", null, "Sex. It's on teenage minds. It's messing with their heads. And this kid is the least likely sexpert in the schoolyard.")
    const img = createElement("img", { src: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYsrgS1ynYaj6RIimjzqn39SLsdHT2Ptgk5G497fw_PkRFqLMfdhuDy0BhIbczC12_RnPfCzScCd0DCyxgTwlbdyVUFXNWfNWpYgymqYol9iFvoiiuEYH3Q2EryQU2yve8fCxWzCMyAG0tsUzYYMZq2ulNAq1YhMcbTx_YMb-ugr3g.webp?r=6e9", style: "width: 33%;" })


    const icon2 = createElement("i", { class: "fa fa-info-circle", style: "font-size:22px; margin-right:7px;" })
    const ic2 = createElement("span", { style: "font-size:28px" }, "More Info")
    const button2 = createElement("button", null, icon2, ic2)

    const icon = createElement("i", { class: "fa fa-play", style: "font-size:22px; margin-right:7px" })
    const ic = createElement("span", { style: "font-size:28px" }, "play")
    const button = createElement("button", null, icon, ic)


    const homeDiv = createElement("div", { class: "homeDiv" }, img, para, button, button2)
    let fragement = document.createDocumentFragment();
    fragement.appendChild(header())

    fragement.appendChild(createElement("section", { class: "Tvshows" }, homeDiv))


    fragement.appendChild(HomeSectionTwo())
    fragement.appendChild(HomeSectionThree())
    fragement.appendChild(Footer())




    return fragement;





}

export default TvShows;