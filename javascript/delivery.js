class Producto{
    constructor(id, img, nombre, precio, stock){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
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

const productos = [];

let contenedor = document.getElementById("contenedor-productos");


productos.push(new Producto(1,"../assets/rol1.jpg","Rollos de canela", 19, 10));
productos.push(new Producto(2,"../assets/rol2.jpg","Rollos de canela", 22, 10));
productos.push(new Producto(3,"../assets/pan-de-jamón.jpg", "Pan de jamon", 15, 5));
productos.push(new Producto(4,"../assets/golfeado.jpg", "Golfeado", 20, 10));
productos.push(new Producto(5,"../assets/cupcake.jpg", "Cupcake", 26, 5));
productos.push(new Producto(6,"../assets/tortarol.jpg", "Torta rol", 25, 3));


productos.forEach((prod)=>{
    
    prod.iva();
    const{id,img,nombre,precio,stock} = prod;
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top front" alt="Rol de Canela">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text"><i>COP$${precio}K x 4 Rolls</i> <br> <b>+ delivery</b></p>
            <button id="agregarProducto${id}">Añadir <i clas="fas-fa-shopping-cart"></i></a>
        </div>
    </div>`
})

function agregarProducto(id){
    console.log(id);
}

let boton = document.getElementById("agregarProducto${id}")

if(boton){
    console.log("Si existe compa")
}else{
    console.log("Seguimos en problemas compa")
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

