const baseDeImagenes = async () =>{
    const resp = await fetch("../datos/data.json")
    const fotos = await resp.json()

    const galeria = document.querySelector("#galeriaContenedor")
    
    fotos.forEach((fot)=>{
        const {img,nombre} = fot;
        galeria.innerHTML += `  
        <div class="col-lg-4">   
            <img src="${img}" alt="${nombre}" title="${nombre}">
        </div>`
    })
}