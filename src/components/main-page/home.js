
import { createElement } from "../../react/index";
import Footer from "../main-page/footer"
// import lo from "../../Assests/.png"



let Model=createElement("div",{class:"model ",onclick:()=>{closeModel()}},createElement("div",{class:"model-content animate__animated animate__zoomIn"},
createElement("iframe",{src:"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"})))



let model = ()=>{

    let m=document.querySelector(".model")
   m.style.display = "block";
  

   
    
}
let closeModel=()=>{
    let m=document.querySelector(".model")
    m.style.display = "none";
}


let HomeSectionTwo = () => {

    let im = createElement("img", { src: "https://i.pinimg.com/236x/c9/7d/1e/c97d1e269e67651a072b15b39e078dce.jpg" });

    let im2 = createElement("img", { src: "https://i.pinimg.com/236x/28/b8/c6/28b8c6fc85dcf0c2990bf3f2757871e3.jpg" });

    let im3 = createElement("img", { src: "https://i.pinimg.com/236x/03/30/39/0330391ab7d61785509998af719152e4.jpg" })

    let im4 = createElement("img", { src: "https://i.pinimg.com/236x/ec/c9/d8/ecc9d8239060607331cc062710222d13.jpg" })

    let im5 = createElement("img", { src: "https://i.pinimg.com/564x/01/49/24/014924096a91a3bf280ff615573b850a.jpg" })

    let im6 = createElement("img", { src: "https://i.pinimg.com/originals/c4/f3/33/c4f333f28dacf140f3a1a45a6570f849.jpg" })

    let sectiontwo = createElement("section", { style: "background-color: #1d1d1d;", class: "movies-section" },
        createElement("div", { class: "images-flex" },
            createElement("div", {onclick:()=>{model()}}, im),
            createElement("div", {onclick:()=>{model()}}, im2),
            createElement("div", {onclick:()=>{model()}}, im3),
            createElement("div",{onclick:()=>{model()}}, im4),
            createElement("div", {onclick:()=>{model()}}, im5),
            createElement("div",{onclick:()=>{model()}}, im6)

        ))

    return sectiontwo;
}

let HomeSectionThree = () => {


    let img1 = createElement("img", {src: "https://i.pinimg.com/236x/f6/b7/70/f6b77075a99c780f52ac340ca4b29da0.jpg" });

    let img2= createElement("img", { src: "https://i.pinimg.com/236x/a2/d0/9c/a2d09cde274f2a766096b7c8e6af7c3d.jpg" });

    let img3= createElement("img", { src: "https://i.pinimg.com/236x/1c/39/4c/1c394c61b9a992029c0af72b3ac5b753.jpg" })

    let img4 = createElement("img", { src: "https://i.pinimg.com/236x/fa/cb/3c/facb3c7f511b384164f30008c1787838.jpg" })

    let img5= createElement("img", { src: "https://i.pinimg.com/236x/51/52/94/5152944272edbeec69a2607b2ab94a80.jpg" })

    let img6 = createElement("img", { src: "https://i.pinimg.com/236x/52/62/9f/52629f659b25810c351ef95303066464.jpg" })

    let img7 = createElement("img", {src: "https://i.pinimg.com/236x/39/c9/bf/39c9bfadd12375ce3c670608e6fc88be.jpg" });

    let img8= createElement("img", { src: "https://i.pinimg.com/236x/55/73/8a/55738afac01971b4c3f34d5a7c14b334.jpg" });

    let img9= createElement("img", { src: "https://i.pinimg.com/236x/63/27/93/632793325c2ab2f8a790390bc41362b0.jpg" })

    let img10 = createElement("img", { src: "https://i.pinimg.com/236x/03/40/3d/03403d638067be569ee1e597b4cae0f9.jpg" })

    let img11= createElement("img", { src: "https://i.pinimg.com/236x/e6/a9/20/e6a920b23154c7920d4dd1731ae90905.jpg" })

    let img12 = createElement("img", { src: "https://i.pinimg.com/236x/f0/65/fa/f065fad2d26e1d0a0176ff8a3ac73a44.jpg" })

    let img13 = createElement("img", {src: "https://i.pinimg.com/236x/0f/c7/b1/0fc7b1edeb6ed3873ede5b56adc67d50.jpg" });

    let img14 = createElement("img", { src: "https://i.pinimg.com/236x/45/67/ee/4567ee929b52dad5ad39f3c40f604ff9.jpg" });

    let img15= createElement("img", { src: "https://i.pinimg.com/236x/f6/8b/d9/f68bd907f1d84c58ca27997a4d433913.jpg" })

    let img16 = createElement("img", { src: "https://i.pinimg.com/236x/b1/3e/8d/b13e8d77c09e3c5642ab66ff6e638df0.jpg" })

    let img17= createElement("img", { src: "https://i.pinimg.com/236x/0e/60/c6/0e60c6435b4e4017e589030ae6b94b66.jpg" })

    let img18= createElement("img", { src: "https://i.pinimg.com/236x/bc/22/d4/bc22d44ebf1c0efcdd1c49c54a7ca55b.jpg" })


    const sectionThree = createElement("section", { style: "background-color: #1d1d1d;padding:50px 0px", class: "movies-section" },

        createElement("div",{style:"width:95%;margin:auto",class:"movies-list"},
            createElement("h2", null,"Continue Watching For Free Riders"),
            
            createElement("div",{class:"box-grid"},

                createElement("div",null,img1),
                createElement("div",null,img2),
                createElement("div",null,img3),
                createElement("div",null,img4),
                createElement("div",null,img5),
                createElement("div",null,img6),
                createElement("div",null,img7),
                createElement("div",null,img8),
                createElement("div",null,img9),
                createElement("div",null,img10),
                createElement("div",null,img11),
                createElement("div",null,img12),
                createElement("div",null,img13),
                createElement("div",null,img14),
                createElement("div",null,img15),
                createElement("div",null,img16),
                createElement("div",null,img17),
                createElement("div",null,img18),        
            )
        )
    )
    return sectionThree;
}



 const home = () => {


    // Here is section 1

    const icon2 = createElement("i", { class: "fa fa-info-circle", style: "font-size:22px; margin-right:7px;" })
    const ic2 = createElement("span", { style: "font-size:28px" }, "More Info")
    const button2 = createElement("button", null, icon2, ic2)

    const icon = createElement("i", { class: "fa fa-play", style: "font-size:22px; margin-right:7px" })
    const ic = createElement("span", { style: "font-size:28px" }, "play")
    const button = createElement("button", null, icon, ic)

    const para = createElement("p", null, "She went undercover — and found a strength she never knew she had. From shy to seductive, this femme fatale now has full control.")
    const img = createElement("img", { src: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWLKXkLH6KZyM-z4xevQmJsNsl-Vm4lou_8xUJWJ9aGMOh-Y24_XMGbTIV5FdOP-PY4CG2BxO0YK2001CmB8-jyGXAWEfNS5tVEQifW5_Eo_J7T_9gYEmvD7WEiqPrqdtH0QtU1oKjBOx8PyhN-swNJ9OWt_EfcBqjNNbuTRw1v0pg.webp?r=912", style: "width: 33%;" })


    const homeDiv = createElement("div", { class: "homeDiv" }, img, para, button, button2)
    let fragement = document.createDocumentFragment();

    fragement.appendChild(createElement("section", { class: "Home" }, homeDiv))


    fragement.appendChild(HomeSectionTwo())
    fragement.appendChild(HomeSectionThree())
    
    fragement.appendChild(Footer())
    fragement.appendChild(Model)


    return fragement;
}

export default home;