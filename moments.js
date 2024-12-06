const motivo1 = document.querySelector(".motivo1")
const motivo2 = document.querySelector(".motivo2")
const motivo3 = document.querySelector(".motivo3")
 let contador1=0


motivo1.addEventListener("click", (event) => {
    event.preventDefault(); 
    if (contador1===0) {
    const divFoto = document.querySelector(".foto1")
    //const divP1 = document.querySelector(".p1")
    const img1 = document.createElement("img")
    img1.setAttribute("src", "flor.jpg");
    img1.setAttribute("class","card-img-top img-fluid")
    divFoto.appendChild(img1)
    const p1 = document.createElement("p")
    p1.style.fontSize="17px"
    p1.style.fontWeight="450"
    p1.innerText = "Nem preciso falar muito aqui, apenas a melhor viagem e mais maluca"
    p1.setAttribute("class","card-text")
    p1.setAttribute("id","texto1")
    img1.setAttribute("id","imagem1")
    motivo1.appendChild(p1)
    contador1+=1
    } else {
        const p1=document.querySelector("#texto1")
        p1.remove()
        const img1=document.querySelector("#imagem1")
        img1.remove()
        contador1=0
        
    }      
})
let contador2=0
motivo2.addEventListener("click", (event) => {
    event.preventDefault(); 
    if (contador2===0) {
    const divFoto = document.querySelector(".foto2")
    //const divP2 = document.querySelector(".p2")
    const img2 = document.createElement("img")
    img2.setAttribute("src", "jet.jpg");
    img2.setAttribute("class","card-img-top img-fluid")
    divFoto.appendChild(img2)
    const p2 = document.createElement("p")
    p2.innerText = "Um pouco mais dessa viagem e da melhor experiência que ja tive"
    p2.style.fontSize = "17px"
    p2.style.fontWeight="450"
    p2.setAttribute("class","card-text")
    p2.setAttribute("id","texto2")
    img2.setAttribute("id","imagem2")
    motivo2.appendChild(p2)
    contador2+=2
    } else {
        const p2=document.querySelector("#texto2")
        p2.remove()
        const img2=document.querySelector("#imagem2")
        img2.remove()
        contador2=0
        
    }      
})
let contador3=0
motivo3.addEventListener("click", (event) => {
    event.preventDefault(); 
    if (contador3===0) {
    const divFoto = document.querySelector(".foto3")
   // const divP3 = document.querySelector(".p3")
    const img3 = document.createElement("img")
    img3.setAttribute("src", "rvellion.jpg");
    img3.setAttribute("class","card-img-bottom img-fluid")
    divFoto.appendChild(img3)
    const p3 = document.createElement("p")
    p3.innerText = "Primeiro reveillion juntos de inúmeros, e você tava igual uma deusa"
    p3.style.fontSize = "17px"
    p3.style.fontWeight="450"
    p3.setAttribute("id","texto3")
    img3.setAttribute("id","imagem3")
    p3.setAttribute("class","card-text")
    motivo3.appendChild(p3)
    contador3+=3
    } else {
        const p3=document.querySelector("#texto3")
        p3.remove()
        const img3=document.querySelector("#imagem3")
        img3.remove()
        contador3=0
        
    }      
})