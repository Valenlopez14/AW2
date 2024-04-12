import { readFile, mkdir} from "node:fs";
import {sep, join, parse} from 'node:path'

//Construimos la Ruta
const ruta = join('Clase3','productos.json')
//leemos el archivo
readFile(ruta, (error,data) => {
    if(error) throw error;
    const datos = data.toString();
    const objeto = JSON.parse(datos)
    // console.log(objeto.productos);
});

//Crear un directorio 
//Recursivees para que si no existe carpeta1, la cree igual y a su vez le almacene carpeta2 adentro
//sin recursive:true da error ya que no puede crear carpeta 2 xq carpeta1 no existe.
const ruta2 = join('carpeta1', 'carpeta2');
mkdir(ruta2,{recursive: true},(err)=>{
    if(err) throw err;
});
