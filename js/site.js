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

/*
const sumarRestarFacturas = (op, ) => {

}*/

/*
const sumarCantFacturas = (cantFacturasInt) => {
    cantFacturasInt = cantFacturasInt + 1;
    console.log(cantFacturasInt);
    cantFacturas.innerHTML = cantFacturasInt.toString();
    
}

let cantFacturas = document.getElementById("cantidadFacturas").innerText;
let cantFacturasInt = parseInt(cantFacturas);
console.log(cantFacturasInt);
let botonSumar = document.getElementById("btnSumar");

botonSumar.onclick = (e) => { 
    console.log("SUMAR");
    //sumarCantFacturas(cantFacturasInt);
    cantFacturasInt = cantFacturasInt + 1;
    console.log (cantFacturasInt)
    cantFacturas = cantFacturasInt.toString();
    cantFacturas.append = cantFacturas;


}*/

/*
const sumarORestar = (boton, cantFacturasInt) =>{
if (boton = botonSumar){
    cantFacturasInt += 1;
    cantFacturas.innerHTML = cantFacturasInt;
    console.log("SUMAR")
    return cantFacturas;
}else if (boton = botonRestar){
    cantFacturasInt -= 1;
    cantFacturas.innerHTML = cantFacturasInt;
    return cantFacturas;
}
}*/

// let cantFacturas = document.getElementById("cantidadFacturas");
//Creacion array compra
const compra = [];

const crearFacturas = (id, nombre, precio) => {
	compra.push(new Compra(id, nombre, precio));
};

//Facturas
let medialunaManteca = document.getElementById("medMant");
let medialunaGrasa = document.getElementById("medGrasa");
let vigilante = document.getElementById("vigilante");
let tortitaNegra = document.getElementById("tortNegra");
let panDeLeche = document.getElementById("panDeLeche");
let cañoncito = document.getElementById("cañon");
let hojaldreConDDL = document.getElementById("hojConDDL");
let sacramento = document.getElementById("sacramento");
let lenguita = document.getElementById("lenguita");
let bolaDeFraile = document.getElementById("bolaDeFraile");
let churro = document.getElementById("churro");
let churroConDDL = document.getElementById("churroConDDL");

//Sanguches
let sangJyQ = document.getElementById("sangJyQ");
let sangJyT = document.getElementById("sangJyT");
let sangJyH = document.getElementById("sangJyH");
let sangJCyQ = document.getElementById("sangJCyQ");
let sangJyA = document.getElementById("sangJyA");
let sangCyQ = document.getElementById("sangCyQ");

//EventListeners

medialunaManteca.onclick = () => agregarItems(0);
medialunaGrasa.onclick = () => agregarItems(1);
vigilante.onclick = () => agregarItems(2);
tortitaNegra.onclick = () => agregarItems(3);
panDeLeche.onclick = () => agregarItems(4);
cañoncito.onclick = () => agregarItems(5);
hojaldreConDDL.onclick = () => agregarItems(6);
sacramento.onclick = () => agregarItems(7);
lenguita.onclick = () => agregarItems(8);
bolaDeFraile.onclick = () => agregarItems(9);
churro.onclick = () => agregarItems(10);
churroConDDL.onclick = () => agregarItems(11);

sangJyQ.onclick = () => agregarItems(12);
sangJyT.onclick = () => agregarItems(13);
sangJyH.onclick = () => agregarItems(14);
sangJCyQ.onclick = () => agregarItems(15);
sangJyA.onclick = () => agregarItems(16);
sangCyQ.onclick = () => agregarItems(17);

//carritoLista
let carritoLista = document.getElementById("carritoLista");

//Agregar Items
function agregarItems(num) {
	switch (num) {
		case 0:
			crearFacturas(0, "Medialuna de Manteca", 60);
			break;
		case 1:
			crearFacturas(1, "Medialuna de Grasa", 60);
			break;
		case 2:
			crearFacturas(2, "Vigilante", 70);
			break;
		case 3:
			crearFacturas(3, "Tortita Negra", 70);
			break;
		case 4:
			crearFacturas(4, "Pan de Leche", 70);
			break;
		case 5:
			crearFacturas(5, "Cañoncito", 70);
			break;
		case 6:
			crearFacturas(6, "Hojaldre con DDL", 70);
			break;
		case 7:
			crearFacturas(7, "Sacramento", 70);
			break;
		case 8:
			crearFacturas(8, "Lenguita", 70);
			break;
		case 9:
			crearFacturas(9, "Bola de Fraile", 80);
			break;
		case 10:
			crearFacturas(10, "Churro", 70);
			break;
		case 11:
			crearFacturas(11, "Churro con DDL", 75);
			break;
		case 12:
			crearFacturas(12, "Sanguche de Jamon y Queso", 110);
			break;
		case 13:
			crearFacturas(13, "Sanguche de Jamon y Tomate", 110);
			break;
		case 14:
			crearFacturas(14, "Sanguche de Jamon y Huevo", 110);
			break;
		case 15:
			crearFacturas(15, "Samguche de Jamon Crudo y Queso", 120);
			break;

		case 16:
			crearFacturas(16, "Sanguche de Jamon y Aceitunas", 120);
			break;

		case 17:
			crearFacturas(17, "Sanguche de Cantimpalo y Queso", 130);
	}

	let listaCompra = document.createElement("li");

	for (const facturasCompra of compra) {
		listaCompra.innerHTML = `${facturasCompra.nombre}: $${facturasCompra.precio} `;
		listaCompra.className = "listaCompraClass";
	}
	carritoLista.appendChild(listaCompra);
}

//Finalizar Carrito

let finalizarCarrito = document.getElementById("finalizarCarrito");
finalizarCarrito.onclick = () => {
	let precioFinal = document.getElementById("precioFinal");
	// const compraEnJSON = JSON.stringify(compra);
	// console.log(compraEnJSON);

	//guardar carrito en setitem
	sessionStorage.setItem("carrito", JSON.stringify(compra));

	//obtener carrito de session
	const obtenerCarrito = JSON.parse(sessionStorage.getItem("carrito"));
	// console.log(obtenerCarrito);

	//agregar carrito a carrito.html
	let listaCarrito = document.createElement("p");

	const precioTotalArr = obtenerCarrito.reduce((acc, el) => acc + el.precio, 0);

	console.log(precioTotalArr);
	listaCarrito.innerText =
		"El precio total de tu compra es: $" + precioTotalArr;

	// for (elemento of obtenerCarrito) {
	// 	listaCarrito.innerHTML = elemento.nombre + " $:" + elemento.precio;
	// }
	precioFinal.appendChild(listaCarrito);

	//Toastify
	Toastify({
		text: "Carrito Finalizado!",
		duration: 3000,
		style: {
			backgroundColor: black
		}
	}).showToast();
};

document.getElementById("test").addEventListener("click", function () {
	Toastify({
		text: "Carrito Finalizado!",
		duration: 3000
	}).showToast();
	alert("prueba");
});

//nightmode

// let nightMode = document.getElementById("nightMode");
// let divNightMode = document.createElement("div")

// nightMode.onclick = () =>{
//     divNi
// }
/*
let verCarritoBtn = document.getElementById("verCarrito");
verCarritoBtn.onclick = () => {
	let obtenerCarrito = JSON.parse(sessionStorage.getItem("carrito"));
	let ulCarritoFinal = document.getElementById("ulCarritoFinal");
	let mostrarCarrito = document.createElement("li");
	console.log(obtenerCarrito);
};*/

// let cantFacturas = document.getElementsByClassName("cantidadFacturas");
// let cantFacturasInt = parseInt(cantFacturas.innerText);
// let botonSumar = document.getElementById("btnSumar");
// let botonRestar = document.getElementById("btnRestar");
//let botonSumar = document.getElementsByClassName("btnSumar");
//let botonRestar = document.getElementsByClassName("btnRestar");
/*
for(const boton of botonSumar){
    botonSumar
}*/

/*
console.log("zzzzzz" + cantFacturasInt[0]);

let suma_o_resta;

const sumarORestar = (suma_o_resta) => {
	if (suma_o_resta === "SUMAR") {
		cantFacturasInt += 1;
		cantFacturas.innerHTML = cantFacturasInt;
	} else if (suma_o_resta === "RESTAR") {
		if (cantFacturasInt <= 0) {
			cantFacturasInt = 0;
			cantFacturas.innerHTML = cantFacturasInt;
		} else {
			cantFacturasInt -= 1;
			cantFacturas.innerHTML = cantFacturasInt;
		}
	}
};
botonSumar.onclick = () => {
	//sumarORestar(botonSumar, cantFacturasInt);
	suma_o_resta = "SUMAR";
};

botonRestar.onclick = () => {
	//sumarORestar(botonRestar, cantFacturasInt);
	suma_o_resta = "RESTAR";
};
/*
let agregar = document.getElementById("agregar");

agregar.onclick = () => {
	for (let i = 0; i < cantFacturasInt; i++) {
		compra.push(new Compra("MEDIALUNA DE MANTECA", 60));
	}
	let carritoCompra = document.getElementById("carrito");

	for (const facturasCompra of compra) {
		let listaCompra = document.createElement("li");
		listaCompra.innerHTML = ` ${facturasCompra.nombre}: $${facturasCompra.precio}`;
		carritoCompra.appendChild(listaCompra);
	}

	const precioTotalArr = compra.reduce((acc, el) => acc + el.precio, 0);
	let precioFinal = document.getElementById("carritoPrecio");
	let precioPantalla = document.createElement("p");
	precioPantalla.innerHTML = `El precio de tu compra es: $${precioTotalArr}`;
	precioFinal.appendChild(precioPantalla);

	/* let botonBorrar = document.getElementById("botonBorrar");
    botonBorrar.innerHTML = "<button type='button' class=btnBorrar>Borrar todo</button>";

    botonBorrar.onclick = () =>{
        cantFacturas.remove();
        precioFinal.remove();

    }*/
/*

	cantFacturasInt = 0;
	cantFacturas.innerHTML = cantFacturasInt;
};

/*
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


*/
