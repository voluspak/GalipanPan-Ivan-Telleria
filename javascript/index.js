let resultado = 0;
let respuesta;
let opcionMenu = 0;
let cantidad = 0;
const iva = .19;
const rollosCanela = 22;
const panJamon = 15;
const golfeado = 20;
const ponquecitos = 16;
const tortarol= 25;


const calcularPrecio = (cantidad, costoPan) => resultado = costoPan * cantidad + ((costoPan*cantidad) * iva);
const confirmacion = () => respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`);
const salida =() => {
    opcionMenu = 6;
    alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!")
}
alert("¡Bienvenido a Galipan pan!");

while (opcionMenu != 6){
    opcionMenu = parseInt(prompt("¿Que desea Comprar? Escriba el número correspondiente a la opción. 1. Rollos de Canela 2. Pan de Jamon 3. Golfeado 4. Cupcakes 5. Tortarol 6. Salir"));
    switch (opcionMenu) {
        case 1:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 12 roles)"));
            calcularPrecio(cantidad, rollosCanela);
            confirmacion();
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                salida()
                break;
            }
            else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
        case 2:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 2 panes)"));            
            calcularPrecio(cantidad, panJamon);
            confirmacion();
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                salida()
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;            
        case 3:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 4 roles)"));            
            calcularPrecio(cantidad, golfeado);             
            confirmacion();           
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                salida()
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;
        case 4:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 6 cupcakes)"));                
            calcularPrecio(cantidad, ponquecitos);             
            confirmacion();          
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                salida()
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;
        case 5:
            cantidad = parseFloat(prompt("¿Cuantos quieres?"));            
            calcularPrecio(cantidad, tortarol);              
            confirmacion();       
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                salida()
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;
        case 6:
            alert("¡Vuelva pronto!");
            break;

        default:
            alert("¡Debes escribir uno de los numeros indicados anteriormente!");
            break;
    }
}