const persona = [
    { nombre: 'Juan', DNI: '12345678A', edad: 30 },
    { nombre: 'María', DNI: '87654321B', edad: 25 },
    { nombre: 'Pedro', DNI: '56781234C', edad: 35 },
    { nombre: 'Laura', DNI: '43218765D', edad: 28 },
    { nombre: 'Carlos', DNI: '98765432E', edad: 40 },
    { nombre: 'Ana', DNI: '34567891F', edad: 22 },
    { nombre: 'David', DNI: '65432187G', edad: 33 },
    { nombre: 'Elena', DNI: '21987654H', edad: 29 },
    { nombre: 'Sara', DNI: '76543218I', edad: 31 },
    { nombre: 'Pablo', DNI: '87654321J', edad: 27 }
];

// console.log(personas);


// MAP
// Devuelve un arreglo nuevo, no es destructivo. Recorre el arreglo y devuelve un nuevo arreglo.
// const nuevaspersonas = persona.map((persona)=>{
//     // console.log(persona)
//     // obligatorio retornar 
//     return {
//                 nombre: persona.nombre,
//                 DNI: persona.DNI,
//                 edad: persona.edad+2
//     };
// })

// console.log(nuevaspersonas)

// FILTER 

// Tiene la misma sintaxis que map. Devuelve un nuevo arreglo v
// ***************************** VER PORQUE NO ANDA FILTER
const personasfiltradas = personas.filter((persona)=>{
    return( personas.edad > 30)
})

console.log(personasfiltradas)


// const micallback = (a,b,cb)=>{
//     const resultado = a + b;
//     cb(resultado)
// }

// micallback(20,15,(res)=>{
//     console.log(res)

// })
