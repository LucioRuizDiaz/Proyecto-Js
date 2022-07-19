const cuotas = (cantCuotas, precio) => {

    const interes = (precio / cantCuotas) * 0.1;

    switch (cantCuotas) {
        case 3:
            alert("El precio en 3 cuotas es de $" + precio / cantCuotas);
            break;

        case 6:
            alert("El precio en 6 cuotas es de $" + precio / cantCuotas);
            break;

        case 9:
            alert("El precio en 9 cuotas es de $" + ((precio / cantCuotas) + interes));
            break;


        case 12:
            alert("El precio en 12 cuotas es de $" + ((precio / cantCuotas) + interes));
            break;


    }
}
/*
let cantCuotasFunc = () => {
    cantCuotas = parseInt(prompt("Ingresa 3, 6, 9 o 12 cuotas. 9 y 12 cuotas incluyen interes del 10%"));
}
*/
let precio = parseInt(prompt("Ingrese precio a pagar. Ingrese 0 para terminar"));
while (precio != 0) {
if (isNaN(precio)) {
    alert("Tenes que ingresar un precio");
    precio = parseInt(prompt("Ingrese precio a pagar. Ingrese 0 para terminar"));
} else {
         let cantCuotas = parseInt(prompt("Ingresa 1, 3, 6, 9 o 12 cuotas. 9 y 12 cuotas incluyen interes del 10%. Ingresa 0 para salir."));
        if (isNaN(cantCuotas)) {
            alert("No ingresaste un numero");
        } else {
            if (cantCuotas == 3 || cantCuotas == 6 || cantCuotas == 9 || cantCuotas == 12) {
                cuotas(cantCuotas, precio);

            } else {
                if (cantCuotas == 1) {
                    alert("Pagaras $" + precio + " en una cuota");

                } else {
                    if (cantCuotas == 0) {
                        alert("Nos vemos!");
                        break;
                    } else {
                        alert("Ingresa una cantidad de cuotas apropiadas.");
                    }
                }

            }


        }

    }

}