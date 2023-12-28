class Producto {
    constructor(titulo, imagen, categoria, marca, precio) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = precio;
    }
}

// VINOS
const V_PROD1 = new Producto("Alma mora blend blanco 750 ml", "./assets/vinos/alma_mora_blend_blanco_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD2 = new Producto("Alma mora malbec 750 ml", "./assets/vinos/alma_mora_malbec_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD3 = new Producto("Colon cabernet sauvignon 750 ml", "./assets/vinos/colon_cabernet_sauvignon_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD4 = new Producto("Colon dulce fresco 750ml", "./assets/vinos/colon_dulce_fresco_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD5 = new Producto("Colon malbec 750ml", "./assets/vinos/colon_malbec_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD6 = new Producto("Colon rose 750ml", "./assets/vinos/colon_rose_750ml.jpg", "vinos", "alma-mora", 6000)
const V_PROD7 = new Producto("Colon torrontes 750ml", "./assets/vinos/colon_torrontes_750ml.jpg", "vinos", "alma-mora", 6000)
// whiskies
const W_PROD1 = new Producto("Jack daniels", "./assets/whiskies/jack_daniels.jpg", "whiskies", "jack-daniels", 10000)
const W_PROD2 = new Producto("Old parr 12 años", "./assets/whiskies/old_parr_12_años.jpg", "whiskies", "old-parr", 18500)
const W_PROD3 = new Producto("Johnnie walker 18 años 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_18_años.jpg", "whiskies", "johnnie-walker", 30000)
const W_PROD4 = new Producto("Johnnie Walker Red Label 1L", "./assets/whiskies/johnnie_walker/johnnie_walker_red_label.jpg", "whiskies", "johnnie-walker", 15000)
const W_PROD5 = new Producto("Johnnie Walker Double Black 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_double_black.jpg", "whiskies", "johnnie-walker", 40000)
const W_PROD6 = new Producto("Johnnie walker black label 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_black_label.jpg", "whiskies", "johnnie-walker", 15000)
const W_PROD7 = new Producto("Johnnie walker swing 750 ml", "./assets/whiskies/johnnie_walker/johnnie_walker_swing.jpg", "whiskies", "johnnie-walker", 20000)
//cervezas
const C_PROD1 = new Producto("Amstel Lager lata 473 ml", "./assets/cervezas/amstel_lager_lata_473ml.jpg", "cervezas", "amstel", 1000)
const C_PROD2 = new Producto("Amstel Lager lata 473 ml", "./assets/cervezas/amstel_lager_lata_710ml.jpg", "cervezas", "amstel", 1000)
const C_PROD3 = new Producto("Amstel Lager lata 473 ml", "./assets/cervezas/blue_moon_belgian_white_lata_473ml.jpg", "cervezas", "amstel", 1000)
const C_PROD4 = new Producto("Amstel Lager lata 473 ml", "./assets/cervezas/heineken_lata_473ml.jpg", "amstel", 1000)
const C_PROD5 = new Producto("Amstel Lager lata 473 ml", "./assets/cervezas/heineken_lata_710ml.jpg", "cervezas", "amstel", 1000)
const C_PROD6 = new Producto("Iguana pilsen", "./assets/cervezas/iguana_pilsen_473ml.jpg", "cervezas", "iguana", 1000)
const C_PROD7 = new Producto("imperial golden lata 473 ml", "./assets/cervezas/imperial_golden_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD8 = new Producto("imperial golden lata 710 ml", "./assets/cervezas/imperial_golden_lata_710ml.jpg", "cervezas", "imperial", 1000)
const C_PROD9 = new Producto("imperial ipa lata 473 ml", "./assets/cervezas/imperial_ipa_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD10 = new Producto("imperial lager lata 473 ml", "./assets/cervezas/imperial_lager_lata_473ml.jpg", "cervezas", "imperial", 1000)
const C_PROD11 = new Producto("imperial lager lata 710 ml", "./assets/cervezas/imperial_lager_lata_710ml.jpg", "cervezas", "imperial", 1000)
const C_PROD12 = new Producto("imperial roja lata 473 ml", "./assets/cervezas/imperial_roja_lata_473ml.jpg", "cervezas", "imperial", 1000)
//spirits


const ArrayProductos = [V_PROD1, V_PROD2, V_PROD3, V_PROD4, V_PROD5, V_PROD6, V_PROD7,
                        W_PROD1, W_PROD2, W_PROD3, W_PROD4, W_PROD5, W_PROD6, W_PROD7,
                        C_PROD1, C_PROD2, C_PROD3, C_PROD4, C_PROD5, C_PROD6, C_PROD7,
                        C_PROD8, C_PROD9, C_PROD10, C_PROD11, C_PROD12
                       ]


const contenedor_productos = document.querySelector("#contenedor-productos");
const botones_categorias = document.querySelectorAll(".boton-categoria");
const titulo_categoria = document.querySelector(".titulo-principal")

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
        <button class="producto-agregar id="${producto.marca}">Agregar al carrito <i class="bi bi-basket2"></i></button>
        `;
        contenedor_productos.append(div);
    })
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
})
