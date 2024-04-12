// Importar el modulo desde node: os (se saca de la pagina de nodejs.org)
import {freemem,totalmem} from "node:os" // OS muestra todo lol que esa usando nuestra computadora (CPU)
// console.log(os.cpus())
//console.log("Memoria Libre" + os.freemem()/1024/1024/1024) //Todas lasdivisiones son para pasarlo de byte a gb. MEMORIA LIBRE



const calcularMemoria = () =>{
    const memoria = totalmem()- freemem();
    return Math.round(memoria/1024/1024/1024)
}

const memoria = calcularMemoria();
console.log("Memoria Utilizada:" + " " + memoria)