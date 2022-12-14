class Producto {
    constructor(id, img, nombre, precio, unid, cantidad){
        this.id = id,
        this.img = img,
        this.nombre = nombre,
        this.precio = precio,
        this.unid = unid,
        this.cantidad = cantidad
    }
}

//  QUERIES, ARRAYS Y PRODUCTOS

const contenedor = document.querySelector("#contenedor");
const modalBody = document.querySelector(".modal .carrito-contenedor");
const contadorCarrito = document.querySelector("#contadorCarrito");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const comprarCarrito = document.querySelector("#comprarCarrito");
const fragmento = document.createDocumentFragment();
const cardsDiv = document.createElement("div");

cardsDiv.classList.add("row", "text-center", "cards-container");

let productos = [
    new Producto (1,"../assets/rol1.jpg","Rollos de canela",19, "x 4 Rolls", 1),
    new Producto (2,"../assets/rol2.jpg","Rollos de canela", 22, "x 6 Rolls", 1),
    new Producto (3,"../assets/pan-de-jamón.jpg", "Pan de jamon", 15, "x 1 unid", 1),
    new Producto (4,"../assets/golfeado.jpg", "Golfeado", 20, "x 4 unid", 1),
    new Producto (5,"../assets/cupcake.jpg", "Cupcake", 26, "x 6 unid", 1),
    new Producto (6,"../assets/tortarol.jpg", "Torta rol", 25, "1 unid", 1)
];

let carrito = [];


//   FUNCIONES

productos.forEach((prod)=>{
    const{id,img,nombre,precio,unid,cantidad} = prod;
    cardsDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top front" alt="${nombre}">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text"><i>COP$${precio}K ${unid}</i> <br> <b>+ delivery</b></p>
            <p class="card-text"><i>Cantidad:</i> <b>${cantidad}</b></p>
            <button onclick="agregarProducto(${id})">Añadir</i></a>
        </div>
    </div>`
    fragmento.appendChild(cardsDiv);
})

contenedor.appendChild(fragmento)


vaciarCarrito.addEventListener("click", ()=> {
    Swal.fire({
        title: '¿Quieres vaciar el carrito?',
        text: "Se eliminaran todos los productos de tu carrito de compra",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(156, 155, 155)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vaciar',
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = [];
            mostrarCarrito();
        Swal.fire({
            title: 'Carrito vaciado!',
            text: 'Todos los productos han sido eliminados',
            icon: 'success',
            confirmButtonColor: 'rgb(156, 155, 155)',
        })
        }
    })
})


document.addEventListener("DOMContentLoaded", ()=>{
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    mostrarCarrito();
})

const guardarLS = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const mostrarCarrito = () => {
    modalBody.innerHTML = ""

    carrito.forEach((prod)=>{
        const{id,img,nombre,precio,unid,cantidad} = prod;
        modalBody.innerHTML += `
        <div class="modalContenedor bg-lg">
            <div>
                <img class="img-fluid img-carrito" src=${img}>
            </div>
            <div>
                <p><b>Producto:</b> ${nombre}</p>
                <p><b>Precio:</b> COP$${precio}K</p>
                <p><b>Cantidad:</b> ${cantidad}</p>
                <button onclick="eliminarProducto(${id})" onclick="Toastify()" class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `
    })
    if(carrito.length == 0){
        modalBody.innerHTML = `<p class="text-center textoModal">¡Aun no agregaste nada!</p>`
        vaciarCarrito.disabled = true;
        comprarCarrito.disabled = true;
    }else{
        vaciarCarrito.disabled = false;
        comprarCarrito.disabled = false;
    }

    contadorCarrito.textContent = carrito.length;

    precioTotal.innerText = "COP$" + carrito.reduce((acc, prod)=> acc + prod.cantidad * prod.precio, 0) + "K"
    
    guardarLS()
}

const agregarProducto = (id) =>{
    let existe = carrito.some(prod => prod.id == id);

    if(existe){
        let prod = carrito.map(prod=>{
            if(prod.id == id){
                prod.cantidad++
            }
        })
    }else{
        let item = productos.find((prod) => prod.id == id);
        carrito.push(item);
    }
    Toastify({
        text: `Agregado al carrito exitosamente!🎉`,
        gravity: "bottom",
        duration: 3000,
        style: {
          background: "rgba(255, 142, 5, 0.9)",
        }
    }).showToast();
    mostrarCarrito()
}
const eliminarProducto = (id) =>{
    let prodID = id;
    carrito = carrito.filter((prod)=> prod.id !== prodID);
    mostrarCarrito();
}
