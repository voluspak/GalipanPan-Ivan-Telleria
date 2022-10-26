let opcionMenu = 0;
let iva = .19;
let cantidad = 0;
let rollosCanela = 22;
let panJamon = 15;
let golfeado = 20;
let ponquecitos = 16;
let tortarol= 25;
let resultado = 0;
let respuesta;

const carritoRoles = (cantidad) => resultado = rollosCanela * cantidad + ((rollosCanela*cantidad) * iva);
const carritoPanJamon = (cantidad) => resultado = panJamon * cantidad + ((panJamon*cantidad) * iva);
const carritoGolfeado = (cantidad) => resultado = golfeado * cantidad + ((golfeado*cantidad) * iva);
const carritoCupcake = (cantidad) => resultado = ponquecitos * cantidad + ((ponquecitos*cantidad) * iva);
const carritoTortarol = (cantidad) => resultado = tortarol * cantidad + ((tortarol*cantidad) * iva);
alert("¡Bienvenido a Galipan pan!");

while (opcionMenu != 6){
    opcionMenu = parseInt(prompt("¿Que desea Comprar? Escriba el número correspondiente a la opción. 1. Rollos de Canela 2. Pan de Jamon 3. Golfeado 4. Cupcakes 5. Tortarol 6. Salir"));
    switch (opcionMenu) {
        case 1:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 12 roles)"));
            carritoRoles(cantidad);
            respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`)
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!")
                break;
            }
            else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
        case 2:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 2 panes)"));            
            carritoPanJamon(cantidad);
            respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`)
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!");
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;            
        case 3:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 4 roles)"));            
            carritoGolfeado(cantidad); 
            respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`)           
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!")
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;
        case 4:
            cantidad = parseFloat(prompt("¿Cuantos quieres? (1und = 6 cupcakes)"));                
            carritoCupcake(cantidad); 
            respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`);           
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!");
                break;
            }else if(respuesta == "inicio" || respuesta == "Inicio"){
                break;
            }
            break;
        case 5:
            cantidad = parseFloat(prompt("¿Cuantos quieres?"));            
            carritoTortarol(cantidad);  
            respuesta = prompt(`Vas a llevar ${cantidad} unidades por COP$ ${resultado}k ¿Ok, volver o inicio?`);       
            if(respuesta == "ok" || respuesta == "OK" || respuesta == "Ok" || respuesta == "oK"){
                alert("Excelente, Gracias por elegirnos ¡Que lo disfrutes!");
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