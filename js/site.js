

/*
    cuotas(cantCuotas, precio){
        const precioEnCuotas =  precio / cantCuotas;    
        switch (cantCuotas) {
            case 3:
                alert("El precio en 3 cuotas es de $" + precioEnCuotas.toFixed(2));
                break;
    
            case 6:
                alert("El precio en 6 cuotas es de $" + precioEnCuotas.toFixed(2));
                break;
    
            case 9:
                alert("El precio en 9 cuotas es de $" + (precioEnCuotas + interes).toFixed(2));
                break;
    
      
            case 12:
                alert("El precio en 12 cuotas es de $" + (precioEnCuotas + interes).toFixed(2));
                break;
    
         }
    }
*/
 
/*
const facturas = [];
facturas.push(new Factura(0, "MEDIALUNA DE MANTECA", 60));
facturas.push(new Factura(1, "MEDIALUNA DE GRASA", 60));
facturas.push(new Factura(2, "VIGILANTE", 75));
facturas.push(new Factura(3, "TORTITA NEGRA", 75));
facturas.push(new Factura(4, "PAN DE LECHE", 75));
facturas.push(new Factura(5, "CAÑONCITO", 75));
facturas.push(new Factura(6, "HOJALDRE CON DDL", 75));
facturas.push(new Factura(7, "SACRAMENTO", 75));
facturas.push(new Factura(8, "LENGUITA", 75));
facturas.push(new Factura(9, "BOLA DE FRAILE", 80));
facturas.push(new Factura(10, "CHURRO", 70));
console.log(facturas);
*/


//Creacion array compra
const compra = [];

//Funcion final de precio y carrito
const precioTotal = () => {
    const precioTotalArr = compra.reduce((acc, el) => acc + el.precio, 0);
    console.log(compra);
    console.log("El precio total es: $" + precioTotalArr);
    alert("En pantalla esta el precio total de tu compra. Muchas gracias.")
            //let precioPantallaInner = `El precio de tu compra es: ${precioTotalArr}`;
    let carritoCompra = document.getElementById("carritoCompra");
    for(const facturasCompra of compra){
        let listaCompra = document.createElement("p");
        listaCompra.innerHTML = ` ${facturasCompra.nombre}`;
        carritoCompra.appendChild(listaCompra);
    }   
    let precioPantalla = document.createElement("p");
    precioPantalla.innerHTML = `El precio de tu compra es: $${precioTotalArr}`;
    document.body.append(precioPantalla);
    
}

//Funcion para sumar facturas y creacion de objetos en el array compra
const compraFunc = (eleccion, eleccionFacturas) => {
if (eleccion == 1){
        if(eleccionFacturas == 1){
            compra.push(new Compra("MEDIALUNA DE MANTECA", 60));
        } else if (eleccionFacturas == 2){
            compra.push(new Compra("MEDIALUNA DE GRASA", 60)); 
        }else if (isNaN(eleccionFacturas)){
            alert("Tenes que ingresar un numero.");
        }else if(eleccionFacturas != 1 || eleccionFacturas != 2){
            alert("Tenes que ingresar un numero valido.")
        }


    }

    else if (eleccion == 2){
        switch(eleccionFacturas){

            case 1:
                compra.push(new Compra("MEDIALUNA DE MANTECA", 60));
                break;
            case 2:
                compra.push(new Compra("MEDIALUNA DE GRASA", 60));
                break;
            case 3:
                compra.push(new Compra("VIGILANTE", 75));
                break;
            case 4:
                compra.push(new Compra("TORTITA NEGRA", 75));
                break;
            case 5:
                compra.push(new Compra("PAN DE LECHE", 75));
                break;
            case 6:
                compra.push(new Compra("CAÑONCITO", 75));
                break;
            case 7:
                compra.push(new Compra("HOJALDRE CON DDL", 75));
                break;
            case 8:
                compra.push(new Compra("SACRAMENTO", 75));
                break;
            case 9:
                compra.push(new Compra("LENGUITA", 75));
                break;
            case 10:
                compra.push(new Compra("BOLA DE FRAILE", 80));
                break;
            case 11:
                compra.push(new Compra("CHURRO", 70));
                break;           
        }
    }

}


//funcion para eleccion de docena
const switchEleccion = (eleccion) => {
    //let loop2 = 1;
    switch(eleccion) {
        case 1:
            //const medialunas = facturas.filter(el => el.precio == 60);
            for(let i = 0; i<=11; i++){
                        let eleccionFacturas = parseInt(prompt("Elegi las medialunas que quieras: \n 1. Medialuna de manteca.\n 2. Medialuna de grasa.\n\nIngresa 0 para salir."));
                        if (isNaN(eleccionFacturas)){
                            alert("Tenes que ingresar un numero")
                        }else if(eleccionFacturas == 0){
                            alert ("Nos vemos!")
                            break;
                        }else{
                        compraFunc(eleccion, eleccionFacturas);
                    }
                }
        precioTotal();
        break;
        case 2:
            for(let i = 0; i<=11; i++){
                    let eleccionFacturas = parseInt(prompt("Elegi las facturas que quieras: \n 1. Medialuna de manteca.\n 2. Medialuna de grasa.\n 3. Vigilante.\n 4. Tortita Negra.\n 5. Pan de Leche.\n 6. Cañoncito. \n 7. Hojaldre con DDL.\n 8. Sacramento. \n 9. Lenguita. \n 10. Bola de Fraile. \n 11. Churro.\n\nIngresa 0 para salir."));
                    
                    if (isNaN(eleccionFacturas)){
                        alert("Tenes que ingresar un numero")
                    }else if(eleccionFacturas == 0){
                        alert ("Nos vemos!")
                        break;
                    }else{
                    compraFunc(eleccion, eleccionFacturas);
                }
            }
            precioTotal();
            break;  
        case 3:
            alert("Nos vemos!");
            loop = 0;
            break;  

        }
}


//
let loop = 1;
while (loop != 0){
    let eleccion = parseInt(prompt("Buenos dias! Bienvenido a Panaderia Josefina.\nElija la opcion que le parezca mas conveniente:\n1.Elegir docena de medialunas(grasa o manteca).\n2.Elegir docena de facturas variadas a elección.\n3.Salir"));
    switchEleccion(eleccion);

}


    /*
    let precio = parseFloat(prompt("Ingrese precio de la consola que va a guardar\nIngrese 0 para salir.")).toFixed(2);
    if (precio == 0){
        alert ("En la consola van a estar guardadas tus consolas de videojuegos.\nNos vemos!"); 
        loop = 0;
       }
    else{
        if (isNaN(precio)) {
            alert("Tenes que ingresar un numero");
            precio = parseInt(prompt("Ingrese precio de la consola que va a guardar\n Ingrese 0 para salir."));
        } else {
           let nombre = prompt("Ingresa el nombre de la consola a guardar. Ingresa ESC para salir.");
           if(nombre == "ESC"){
               alert("En la consola van a estar guardadas tus consolas de videojuegos.\nNos vemos!")
               loop = 0;
           }else{
               consolas.push(new Consola(nombre, precio));
            //    Consola.sumarIva();
           }
   
        }
    }

*/

 /*
 const cuotas = (cantCuotas, precio) => {

    const precioEnCuotas =  precio / cantCuotas;    
    const interes = precioEnCuotas * 0.1;

    switch (cantCuotas) {
        case 3:
            alert("El precio en 3 cuotas es de $" + precioEnCuotas.toFixed(2));
            break;

        case 6:
            alert("El precio en 6 cuotas es de $" + precioEnCuotas.toFixed(2));
            break;

        case 9:
            alert("El precio en 9 cuotas es de $" + (precioEnCuotas + interes).toFixed(2));
            break;

  
        case 12:
            alert("El precio en 12 cuotas es de $" + (precioEnCuotas + interes).toFixed(2));
            break;

     }
 }
 */



 /*
 let cantCuotasFunc = () => {
     cantCuotas = parseInt(prompt("Ingresa 3, 6, 9 o 12 cuotas. 9 y 12 cuotas incluyen interes del 10%"));
 }
 */





/*
const productos = [
    { id: 1, producto: "Arroz"},
    { id: 2, producto: "Fideo"},
    { id: 3, producto: "Pan"}
];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto)
}*/