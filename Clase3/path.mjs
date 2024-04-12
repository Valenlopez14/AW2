//SEP: Muestra el tipo de barra separadora que usa el sistema operativo
//JOIN crea/construye una ruta 
//PARSE desglosa la ruta, muestra todos los componenetes uno pr no (root,dir,base,ext,name)
import {sep, join, parse} from 'node:path'

// console.log(sep)

const ruta = join('a', 'b', 'c', 'productos.json')

// console.log(ruta)

const rutaDesglosada = parse(ruta)
console.log(rutaDesglosada.base)