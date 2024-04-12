import { readFile } from "node:fs";
import {sep, join, parse} from 'node:path'

//Construimos la Ruta
const ruta = join('Clase3','productos.json')
//leemos el archivo
readFile(ruta, (error,data) => {
    if(error) throw error;
    const datos = data.toString();
    const objeto = JSON.parse(datos)
    console.log(objeto.productos);
});






//git remote add origin https://github.com/Valenlopez14/asdsadprueba.git
//git branch -M main
//git push -u origin main