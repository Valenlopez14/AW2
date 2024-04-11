import productos from './productos.mjs'
import { cambioprecio } from './funcionalidades.mjs'

const NuevaListaPrecios = cambioprecio(1.1, productos)

console.log(NuevaListaPrecios)