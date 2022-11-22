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
    PrecioPorCantidad(cantidad){
        resultado = this.precio * cantidad;
    }
    iva(){
        this.precio = Math.round(this.precio * 1.19);
    }
    venta(cantidad){
        this.stock -= cantidad;
        if(this.stock < 1){
            this.disponible = false;
        }
    }
}

//  QUERIES, ARRAYS Y PRODUCTOS

const contenedor = document.querySelector("#contenedor")
let modalBody = document.querySelector(".modal .carrito-contenedor")
let contadorCarrito = document.querySelector("#contadorCarrito")
let productos = [];
let carrito = [];


productos.push(new Producto(1,"../assets/rol1.jpg","Rollos de canela",19, "x 4 Rolls", 1));
productos.push(new Producto(2,"../assets/rol2.jpg","Rollos de canela", 22, "x 6 Rolls", 1));
productos.push(new Producto(3,"../assets/pan-de-jamón.jpg", "Pan de jamon", 15, "x 1 unid", 1));
productos.push(new Producto(4,"../assets/golfeado.jpg", "Golfeado", 20, "x 4 unid", 1));
productos.push(new Producto(5,"../assets/cupcake.jpg", "Cupcake", 26, "x 6 unid", 1));
productos.push(new Producto(6,"../assets/tortarol.jpg", "Torta rol", 25, "1 unid", 1));


productos.forEach((prod)=>{
    
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

    contadorCarrito.textContent = carrito.length

    guardarLS()
}

const agregarProducto = (id) =>{
    let item = productos.find((prod) => prod.id == id);
    carrito.push(item);
    mostrarCarrito()
}
const eliminarProducto = (id) =>{
    let prodID = id;
    carrito = carrito.filter((prod)=> prod.id !== prodID);
    mostrarCarrito();
}








// let opcionCompra = prompt("¡Bienvenido a Galipan Pan!, ¿Que producto te gustaria llevar? (Escribe el nombre del producto)  Rollos de canela, Pan de jamon, Golfeado, Cupcake, Torta rol")
// let existe = false;
// let posicion = -1;
// let resultado = 0;
// let respuesta;

// productos.forEach((item, i)=> {
//     if(opcionCompra == item.nombre){
//         existe = true;
//         posicion = i;
//     }
// });

// if(existe){
//     let cantidad = parseInt(prompt("¿Cuantos quieres?"));
//     productos[posicion].PrecioPorCantidad(cantidad);
//     respuesta = prompt(`Estas llevando ${cantidad} ${productos[posicion].nombre} por COP$${resultado}k, ¿Ok o salir?`);
//     if(respuesta == "ok" || respuesta == "Ok"){    
//         productos[posicion].venta(cantidad);
//         if(!productos[posicion].disponible){
//             productos.splice(posicion, 1);
//         }
//         alert("¡Gracias por su compra!");
//     }
// }else{
//     alert("Lo siento, no tengo eso")
// }

