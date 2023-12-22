class Producto {
    constructor(titulo, imagen, categoria, marca, precio) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = precio;
    }
}

// whiskies
const PROD1 = new Producto("Jack daniels", "./assets/whiskies/jack_daniels.jpg", "whiskies", "jack-daniels", 10000)
const PROD2 = new Producto("Old parr 12 años", "./assets/whiskies/old_parr_12_años.jpg", "whiskies", "old-parr", 18500)
const PROD3 = new Producto("Old parr 12 años", "./assets/whiskies/old_parr_12_años.jpg", "whiskies", "old-parr", 18500)
const PROD4 = new Producto("Johnnie walker 18 años 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg", "whiskies", "johnnie-walker", 30000)
const PROD5 = new Producto("Johnnie Walker Red Label 1L", "/assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg", "whiskies", "johnnie-walker", 15000)
const PROD6 = new Producto("Johnnie Walker Double Black 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_double_black.jpg", "whiskies", "johnnie-walker", 40000)
const PROD7 = new Producto("Johnnie walker black label 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_black_label.jpg", "whiskies", "johnnie-walker", 15000)
const PROD8 = new Producto("Johnnie walker swing 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_swing.jpg", "whiskies", "johnnie-walker", 20000)

const ArrayProductos = [PROD1, PROD2, PROD3, PROD4, PROD5, PROD6, PROD7, PROD8]

const contenedor_productos = document.querySelector("#contenedor-productos");

function carga_productos() {
    ArrayProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-info">
        <h3 class="producto-titulo">${producto.titulo.toUpperCase()}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar id="${producto.marca}">Agregar al carrito <i class="bi bi-basket2"></i></button>
        `;
        contenedor_productos.append(div);
    })
}

carga_productos()
