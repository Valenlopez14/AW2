import productos from './productos.mjs'
import { modificarprecios } from './funcionalidades.mjs'

const NuevaListaPrecios = modificarprecios(1.1, productos)

console.log(NuevaListaPrecios)