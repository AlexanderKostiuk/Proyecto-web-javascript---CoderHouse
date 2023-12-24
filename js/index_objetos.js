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
const W_PROD1 = new Producto("Jack daniels", "./assets/whiskies/jack_daniels.jpg", "whiskies", "jack-daniels", 10000)
const W_PROD2 = new Producto("Old parr 12 años", "./assets/whiskies/old_parr_12_años.jpg", "whiskies", "old-parr", 18500)
const W_PROD3 = new Producto("Johnnie walker 18 años 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_18_años.jpg", "whiskies", "johnnie-walker", 30000)
const W_PROD4 = new Producto("Johnnie Walker Red Label 1L", "/assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg", "whiskies", "johnnie-walker", 15000)
const W_PROD5 = new Producto("Johnnie Walker Double Black 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_double_black.jpg", "whiskies", "johnnie-walker", 40000)
const W_PROD6 = new Producto("Johnnie walker black label 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_black_label.jpg", "whiskies", "johnnie-walker", 15000)
const W_PROD7 = new Producto("Johnnie walker swing 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_swing.jpg", "whiskies", "johnnie-walker", 20000)

const ArrayProductos = [W_PROD1, W_PROD2, W_PROD3, W_PROD4, W_PROD5, W_PROD6, W_PROD7]

const contenedor_productos = document.querySelector("#contenedor-productos");
const botones_categorias = document.querySelectorAll(".boton-categoria");

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


const btn_agregar_carrito = document.querySelectorAll(".producto-agregar");
btn_agregar_carrito.forEach(boton => {
        boton.addEventListener("click", () =>{
            //aca en alert va a decir el titulo y el precio del producto seleccionado 
            alert("Carrito 1 producto(s)\naca va ir el nombre de los productos agregados, ejemplo...\n-1 jack daniels\n-$10000")
        })
})


botones_categorias.forEach(boton => {
    boton.addEventListener("click", (evento) => {

        //saco el active de todos los botones y coloco el actual al hacer click
        botones_categorias.forEach(boton => boton.classList.remove("active"))
        evento.currentTarget.classList.add("active")
        //aca voy a hacer el filtro para que al hacer click me muestre en pantalla todos los productos de la categoria elegida
    })
})
