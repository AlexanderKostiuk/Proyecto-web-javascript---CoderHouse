class Producto {
    constructor(ID_producto, titulo, imagen, categoria, marca, precio) {
        this.ID_producto = ID_producto
        this.titulo = titulo;
        this.imagen = imagen;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = precio;
    }
}

// VINOS
const V_PROD1 = new Producto(1, "Alma mora blend blanco 750 ml", "./assets/vinos/alma_mora_blend_blanco_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD2 = new Producto(2, "Alma mora malbec 750 ml", "./assets/vinos/alma_mora_malbec_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD3 = new Producto(3, "Colon cabernet sauvignon 750 ml", "./assets/vinos/colon_cabernet_sauvignon_750ml.jpg", "vinos", "colon", 6000)
const V_PROD4 = new Producto(4, "Colon dulce fresco 750ml", "./assets/vinos/colon_dulce_fresco_750ml.jpg", "vinos", "colon", 6000)
const V_PROD5 = new Producto(5, "Colon malbec 750ml", "./assets/vinos/colon_malbec_750ml.jpg", "vinos", "colon", 6000)
const V_PROD6 = new Producto(6, "Colon rose 750ml", "./assets/vinos/colon_rose_750ml.jpg", "vinos", "colon", 6000)
const V_PROD7 = new Producto(7, "Colon torrontes 750ml", "./assets/vinos/colon_torrontes_750ml.jpg", "vinos", "colon", 6000)
// whiskies
const W_PROD1 = new Producto(8, "Jack daniels", "./assets/whiskies/jack_daniels.jpg", "whiskies", "jack-daniels", 10000)
const W_PROD2 = new Producto(9, "Old parr 12 años", "./assets/whiskies/old_parr_12_años.jpg", "whiskies", "old-parr", 18500)
const W_PROD3 = new Producto(10, "Johnnie walker 18 años 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_18_años.jpg", "whiskies", "johnnie-walker", 30000)
const W_PROD4 = new Producto(11, "Johnnie Walker Red Label 1L", "./assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg", "whiskies", "johnnie-walker", 15000)
const W_PROD5 = new Producto(12, "Johnnie Walker Double Black 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_double_black.jpg", "whiskies", "johnnie-walker", 40000)
const W_PROD6 = new Producto(13, "Johnnie walker black label 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_black_label.jpg", "whiskies", "johnnie-walker", 15000)
const W_PROD7 = new Producto(14, "Johnnie walker swing 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_swing.jpg", "whiskies", "johnnie-walker", 20000)
//cervezas
const C_PROD1 = new Producto(15,"Amstel Lager lata 473 ml", "./assets/cervezas/amstel_lager_lata_473ml.jpg", "cervezas", "amstel", 1000)
const C_PROD2 = new Producto(16,"Amstel Lager lata 473 ml", "./assets/cervezas/amstel_lager_lata_710ml.jpg", "cervezas", "amstel", 1000)
const C_PROD3 = new Producto(17,"Amstel Lager lata 473 ml", "./assets/cervezas/blue_moon_belgian_white_lata_473ml.jpg", "cervezas", "amstel", 1000)
const C_PROD4 = new Producto(18,"Amstel Lager lata 473 ml", "./assets/cervezas/heineken_lata_473ml.jpg","cervezas", "amstel", 1000)
const C_PROD5 = new Producto(18,"Amstel Lager lata 473 ml", "./assets/cervezas/heineken_lata_710ml.jpg", "cervezas", "amstel", 1000)
const C_PROD6 = new Producto(19,"Iguana pilsen", "./assets/cervezas/iguana_pilsen_473ml.jpg", "cervezas", "iguana", 1000)
const C_PROD7 = new Producto(20,"imperial golden lata 473 ml", "./assets/cervezas/imperial_golden_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD8 = new Producto(21,"imperial golden lata 710 ml", "./assets/cervezas/imperial_golden_lata_710ml.jpg", "cervezas", "imperial", 1000)
const C_PROD9 = new Producto(22,"imperial ipa lata 473 ml", "./assets/cervezas/imperial_ipa_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD10 = new Producto(23,"imperial lager lata 473 ml", "./assets/cervezas/imperial_lager_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD11 = new Producto(24,"imperial lager lata 710 ml", "./assets/cervezas/imperial_lager_lata_710ml.jpg", "cervezas", "imperial", 1000)
const C_PROD12 = new Producto(25,"imperial roja lata 473 ml", "./assets/cervezas/imperial_roja_lata_473ml.jpg", "cervezas", "imperial", 1000)
//spirits


const ArrayProductos = [V_PROD1, V_PROD2, V_PROD3, V_PROD4, V_PROD5, V_PROD6, V_PROD7,
                        W_PROD1, W_PROD2, W_PROD3, W_PROD4, W_PROD5, W_PROD6, W_PROD7,
                        C_PROD1, C_PROD2, C_PROD3, C_PROD4, C_PROD5, C_PROD6, C_PROD7,
                        C_PROD8, C_PROD9, C_PROD10, C_PROD11, C_PROD12
                       ]


const contenedor_productos = document.querySelector("#contenedor-productos");
const botones_categorias = document.querySelectorAll(".boton-categoria");
const titulo_categoria = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero")

function carga_productos(productos_elegidos) {
    contenedor_productos.innerHTML = "";

    productos_elegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-info">
        <h4 class="producto-titulo">${producto.titulo.toUpperCase()}</h4>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.titulo.toLowerCase()}">Agregar al carrito <i class="bi bi-basket2"></i></button>
        `;

        contenedor_productos.append(div);
    })

    actualizarBotonesAgregar();
/*     console.log(botonesAgregar); */
}

carga_productos(ArrayProductos)

botones_categorias.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        //saco el active de todos los botones y coloco el actual al hacer click
        botones_categorias.forEach(boton => boton.classList.remove("active"))
        evento.currentTarget.classList.add("active")
        
        // aca hago que el titulo principal sea el mismo de la categoria elegida
        titulo_categoria.innerText = evento.currentTarget.innerText
        
        // aca hago que la categoría "todos los productos" pueda mostar en pantalla los mismos
        if (evento.currentTarget.id != "todos") {
            //aca voy a hacer el filtro para que al hacer click me muestre en pantalla todos los productos de la categoria elegida
            const productosElegidos = ArrayProductos.filter(producto => producto.categoria === evento.currentTarget.id);
            carga_productos(productosElegidos);
        }
        else {
            carga_productos(ArrayProductos)
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);  
    }) 
}

/* aca traigo lo que hay en el local storage para que cuando se
ponga otro producto en carrito, quede guardado el anterior producto agregado anteriormente  */ 

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero()
} else {
    productosEnCarrito = []
}


function agregarAlCarrito(evento){
    const idBoton = evento.currentTarget.id;
    console.log(idBoton)
    
    const productoAgregado = ArrayProductos.find(producto => producto.titulo.toLowerCase() === idBoton);

    if (productosEnCarrito.some(producto => producto.titulo.toLowerCase() === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.titulo.toLowerCase() === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumero();
    console.log(productosEnCarrito)
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero () {
    let nuevoNumero = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numero.innerText = nuevoNumero
}