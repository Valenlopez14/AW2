import http from 'node:http'

// Creamos una INSTANCIA de servidor con createServer()
const servidor = http.createServer((peticion, respuestas)=>{
   // console.log(peticion);

   //ver por que ruta manda la peticion
   const ruta = peticion.url;
   const metodo = peticion.method;
   if(metodo === "GET" && ruta === "/")
   {
    respuestas.end('<h1> HOLA HTML</h1>')
   respuestas.statusCode = 200;
    return;
   }

   respuestas.statusCode = 404;
//    if(metodo === GET && ruta === "/")(
//     respuestas.end("hola ruta raiz con GET")
//    )
//    if(ruta === "/")(
//     respuestas.end(`Hola ruta raiz`)
//    )
//    if (ruta === "/saludo")(
//     respuestas.end(`Hola te envio un saludo`
//     ))
//     else respuestas.end("error");

});

servidor.listen(3000)