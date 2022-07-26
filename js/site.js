
 class Consola {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }




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
 }

const consolas = [];

let loop = 1;
while (loop != 0){
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
}
console.log(consolas);



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