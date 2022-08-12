/*class Factura {
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio).toFixed(2);;
    }
 }*/

class Compra {
	constructor(id, nombre, precio) {
		this.id = parseInt(id);
		this.nombre = nombre;
		this.precio = parseInt(precio);
	}
}
