class Producto{
    constructor(id, img, nombre, precio, unid, cantidad){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.unid = unid
        this.cantidad = cantidad;
        this.disponible = true;
    }
    iva(){
        this.precio = Math.round(this.precio * 1.19);
    }
}

//  QUERIES, ARRAYS Y PRODUCTOS

const contenedor = document.querySelector("#contenedor")
const modalBody = document.querySelector(".modal .carrito-contenedor")
const contadorCarrito = document.querySelector("#contadorCarrito")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal");
let productos = [
    (1,"../assets/rol1.jpg","Rollos de canela",19, "x 4 Rolls", 1),
    (2,"../assets/rol2.jpg","Rollos de canela", 22, "x 6 Rolls", 1),
    (3,"../assets/pan-de-jamón.jpg", "Pan de jamon", 15, "x 1 unid", 1),
    (4,"../assets/golfeado.jpg", "Golfeado", 20, "x 4 unid", 1),
    (5,"../assets/cupcake.jpg", "Cupcake", 26, "x 6 unid", 1),
    (6,"../assets/tortarol.jpg", "Torta rol", 25, "1 unid", 1)
];
let carrito = [];


productos.forEach((prod)=>{
    prod.iva();
    const{id,img,nombre,precio,unid,cantidad} = prod;
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top front" alt="${nombre}">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text"><i>COP$${precio}K ${unid}</i> <br> <b>+ delivery</b></p>
            <p class="card-text"><i>Cantidad:</i> <b>${cantidad}</b></p>
            <button onclick="agregarProducto(${id})">Añadir</i></a>
        </div>
    </div>`
})


//   FUNCIONES



vaciarCarrito.addEventListener("click", ()=> {
    carrito.length = [];
    mostrarCarrito();
})

document.addEventListener("DOMContentLoaded", ()=>{
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    mostrarCarrito();
})

const guardarLS = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const mostrarCarrito = () => {
    modalBody;
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
                <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `
    })
    carrito.length == 0 ? modalBody.innerHTML = `<p class="text-center textoModal">¡Aun no agregaste nada!</p>`:

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


    mostrarCarrito()
}
const eliminarProducto = (id) =>{
    let prodID = id;
    carrito = carrito.filter((prod)=> prod.id !== prodID);
    mostrarCarrito();
}

