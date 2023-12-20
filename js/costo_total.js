/* //Lista productos y valores
var productos = [
    ['whiskey', 41000],
    ['cerveza', 3600],
    ['vino', 15000],
    ['champagne', 10500],
    ['jagger', 17000],
    ['speed', 950]
]

let nombre_producto = ''
let valor_producto = 0
let cantidad_total = 0


let loop_productos = true
while (loop_productos == true) {
    let producto_a_llevar = prompt(` Los productos se venden por unidad. \n Escriba el nombre del producto que desea llevar... \n
    lista de productos y precios: 
    ${productos[0][0]} - $${productos[0][1]} 
    ${productos[1][0]} - $${productos[1][1]} 
    ${productos[2][0]} - $${productos[2][1]} 
    ${productos[3][0]} - $${productos[3][1]} 
    ${productos[4][0]} - $${productos[4][1]} 
    ${productos[5][0]} - $${productos[5][1]}
    `.toUpperCase());
    
    //si el prompt es igual a whiskey
    if (producto_a_llevar.toLowerCase() == productos[0][0]) {
        //le asigno el valor 41000 del whiskey a la variable valor_producto para luego pasarlo a la funcion "CostoTotal"
        valor_producto = productos[0][1]
        nombre_producto = producto_a_llevar
        loop_productos = false
    }
    
    //si el prompt es igual a cerveza
    else if (producto_a_llevar.toLowerCase() == productos[1][0]){
        valor_producto = productos[1][1]
        nombre_producto = producto_a_llevar
        loop_productos = false
    }
    
    //si el prompt es igual a vino
    else if (producto_a_llevar.toLowerCase() == productos[2][0]){
        valor_producto = productos[2][1]
        nombre_producto = producto_a_llevar
        loop_productos = false
    } 
    
    //si el prompt es igual a champagne
    else if (producto_a_llevar.toLowerCase() == productos[3][0]){
        valor_producto = productos[3][1]
        nombre_producto = producto_a_llevar
        loop_productos = false
    } 
    
    //si el prompt es igual a jagger
    else if (producto_a_llevar.toLowerCase() == productos[4][0]){
        valor_producto = productos[4][1]
        nombre_producto = producto_a_llevar
        loop_productos = false
    } 
    
    //si el prompt es igual a speed
    else if 
        (producto_a_llevar.toLowerCase() == productos[5][0]){
            valor_producto = productos[5][1]
            nombre_producto = producto_a_llevar
            loop_productos = false
        }

    else if (producto_a_llevar == ''){
        alert('No seleccionaste ningun producto, asegurate de elegir alguno o apretá cancelar para salir')
    }

    else {
        alert('Escribiste mal la palabra, asegurate de escribirlo correctamente.')
    }
}


let loop_cantidad_productos = true
while (loop_cantidad_productos == true) {
    let cantidad_a_llevar = parseInt(prompt('Especifique la cantidad a llevar...\n(No vendemos al por mayor, max 20 unidades)'))
    
    //alert(typeof cantidad_a_llevar)
    if (isNaN(cantidad_a_llevar)) {
        alert('elegí un número válido')
    }
    
    else if (cantidad_a_llevar > 20) {
        alert('No vendemos por mayorista, podés llevar hasta 20 productos')
    }

    else if (cantidad_a_llevar < 1) {
        alert('Elegí un número válido')
    }

    else {
        loop_cantidad_productos = false
        cantidad_total = cantidad_a_llevar
    }
}


function CostoTotal(nombre_producto, valor_producto, cantidad_a_llevar) {
    let valor_total = valor_producto * cantidad_a_llevar
    alert('llevas' + ' ' +cantidad_total + ' unidades de' + ' ' + nombre_producto  + '\n' + 'El valor total es de $' +
          valor_total)
}

CostoTotal(nombre_producto, valor_producto, cantidad_total) */