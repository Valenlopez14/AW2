import {productos} from "./productos.mjs";
// Cambio de precios o actualizacion de precios

const cambioprecio=(porcentaje, productos)=>{

  const NuevoListado = productos.map((producto)=>{

        return{
            precio:  producto.precio * porcentaje,
            nombre: producto.nombre,
            stock: producto.stock
        } 
    })
    return NuevoListado
    
}
const productosActualizados = cambioprecio(1.5, productos);

// console.log(productosActualizados)

// Filtros de productos con stock > 20

const filtrarstock = (stock, productos)=>{
    return productos.filter((producto)=>{
        return (producto.stock > stock)
    })
}
export {cambioprecio,filtrarstock};
// const productosfiltrados = productoslimpieza.filter(producto => producto.stock > 20);

 console.log(filtrarstock);

