class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.disponible = true;
    }
    PrecioPorCantidad(cantidad){
        resultado = this.precio * cantidad;
    }
    iva(){
        this.precio = this.precio * 1.19;
    }
    venta(cantidad){
        this.stock -= cantidad;
        if(this.stock < 1){
            this.disponible = false;
        }
    }
}

const productos = [];

productos.push(new Producto("Rollos de canela", 22, 10));
productos.push(new Producto("Pan de jamon", 15, 5));
productos.push(new Producto("Golfeado", 20, 10));
productos.push(new Producto("Cupcake", 26, 5));
productos.push(new Producto("Torta rol", 25, 3));

for (const producto of productos){
    producto.iva();
}

let opcionCompra = prompt("¡Bienvenido a Galipan Pan!, ¿Que producto te gustaria llevar? (Escribe el nombre del producto)  Rollos de canela, Pan de jamon, Golfeado, Cupcake, Torta rol")
let existe = false;
let posicion = -1;
let resultado = 0;
let respuesta;

productos.forEach((item, i)=> {
    if(opcionCompra == item.nombre){
        existe = true;
        posicion = i;
    }
});

if(existe){
    let cantidad = parseInt(prompt("¿Cuantos quieres?"));
    productos[posicion].PrecioPorCantidad(cantidad);
    respuesta = prompt(`Estas llevando ${cantidad} ${productos[posicion].nombre} por COP$${resultado}k, ¿Ok o salir?`);
    if(respuesta == "ok" || respuesta == "Ok"){    
        productos[posicion].venta(cantidad);
        if(!productos[posicion].disponible){
            productos.splice(posicion, 1);
        }
        alert("¡Gracias por su compra!");
    }
}else{
    alert("Lo siento, no tengo eso")
}


// let resultado = 0;
// let respuesta;
// let opcionMenu = 0;
// let cantidad = 0;
// let existe = false;

// const confirmacion = () => respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`);
// const salida =() => {
//     opcionMenu = 6;
//     alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!")
// }


// alert("¡Bienvenido a Galipan pan!");

// while (opcionMenu != 6){
//     opcionMenu = parseInt(prompt("¿Que desea Comprar? Escriba el número correspondiente a la opción. 1. Rollos de Canela 2. Pan de Jamon 3. Golfeado 4. Cupcakes 5. Tortarol 6. Salir"));
//     switch (opcionMenu) {
//         case 1:
//             cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 12 roles)"));
//             calcularPrecio(cantidad, rollosCanela);
//             confirmacion();
//             if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
//                 salida()
//                 break;
//             }
//             else if(respuesta == "inicio" || respuesta == "Inicio"){
//                 break;
//             }
//         case 2:
//             cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 2 panes)"));            
//             calcularPrecio(cantidad, panJamon);
//             confirmacion();
//             if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
//                 salida()
//                 break;
//             }else if(respuesta == "inicio" || respuesta == "Inicio"){
//                 break;
//             }
//             break;            
//         case 3:
//             cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 4 roles)"));            
//             calcularPrecio(cantidad, golfeado);             
//             confirmacion();           
//             if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
//                 salida()
//                 break;
//             }else if(respuesta == "inicio" || respuesta == "Inicio"){
//                 break;
//             }
//             break;
//         case 4:
//             cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 6 cupcakes)"));                
//             calcularPrecio(cantidad, ponquecitos);             
//             confirmacion();          
//             if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
//                 salida()
//                 break;
//             }else if(respuesta == "inicio" || respuesta == "Inicio"){
//                 break;
//             }
//             break;
//         case 5:
//             cantidad = parseFloat(prompt("¿Cuantos quieres?"));            
//             calcularPrecio(cantidad, tortarol);              
//             confirmacion();       
//             if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
//                 salida()
//                 break;
//             }else if(respuesta == "inicio" || respuesta == "Inicio"){
//                 break;
//             }
//             break;
//         case 6:
//             alert("¡Vuelva pronto!");
//             break;

//         default:
//             alert("¡Debes escribir uno de los numeros indicados anteriormente!");
//             break;
//     }
// }