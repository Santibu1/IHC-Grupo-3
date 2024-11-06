const about = document.querySelector("#about")

about.addEventListener("click", (a)=>{
    a.preventDefault();

    const sectionA = document.querySelector(".SobreNosotros-section")
    sectionA.scrollIntoView({behavior: "smooth"})
})

const more = document.querySelector("#more")

more.addEventListener("click", (b)=>{
    b.preventDefault();

    const sectionMore = document.querySelector(".Inicio-Pagina")
    sectionMore.scrollIntoView({behavior: "smooth"})
})
