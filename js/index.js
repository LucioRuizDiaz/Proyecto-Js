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
	const asyncFunc = async () => {
		const response = await fetch("../data.json");
		const data = await response.json();

		crearFacturas(data[num].id, data[num].nombre, data[num].precio);

		let listaCompra = document.createElement("li");

		for (const facturasCompra of compra) {
			listaCompra.innerHTML = `${facturasCompra.nombre}: ${facturasCompra.precio} `;
			listaCompra.className = "listaCompraClass";
		}
		carritoLista.appendChild(listaCompra);
	};

	//llamas
	asyncFunc();
}

//Finalizar Carrito

let finalizarCarrito = document.getElementById("finalizarCarrito");
finalizarCarrito.addEventListener("click", function () {
	//Toastify
	Toastify({
		text: "Carrito Finalizado!",
		duration: 3000,
		close: true
	}).showToast();

	let precioFinal = document.getElementById("precioFinal");

	//guardar carrito en setitem
	sessionStorage.setItem("carrito", JSON.stringify(compra));

	//obtener carrito de session
	const obtenerCarrito = JSON.parse(sessionStorage.getItem("carrito"));

	//agregar carrito a carrito.html
	let listaCarrito = document.createElement("p");

	const precioTotalArr = obtenerCarrito.reduce((acc, el) => acc + el.precio, 0);

	listaCarrito.innerText =
		"El precio total de tu compra es: $" + precioTotalArr;

	precioFinal.appendChild(listaCarrito);
});
