import {productoslimpieza} from "./productos.mjs";
// Cambio de precios o actualizacion de precios

const cambioprecio=(porcentaje, productoslimpieza)=>{

  const NuevoListado = productoslimpieza.map((producto)=>{

        return{
            precio:  producto.precio * porcentaje,
            nombre: producto.nombre,
            stock: producto.stock
        } 
    })
    return NuevoListado
    
}
console.log(NuevoListado)

// Filtros de productos con stock > 20
