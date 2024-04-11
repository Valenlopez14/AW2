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
const productosActualizados = cambioprecio(1.5, productoslimpieza);
export {cambioprecio};
// console.log(productosActualizados)

// Filtros de productos con stock > 20
const productosfiltrados = productoslimpieza.filter(producto => producto.stock > 20);

 console.log(productosfiltrados);

