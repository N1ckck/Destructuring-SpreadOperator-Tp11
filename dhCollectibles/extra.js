const numeros=[1,2,3,4,5,6,7,8,9,10]
const [pos,pos1,pos2,pos3,pos4,...rest]=numeros


//console.log(pos,pos2,pos4)
//console.log(rest)
let mascota={
    nombre:"Clifford",
    tipo : "Perro",
    color:"Dorado",
    raza:"Golden retriever"
}

const {nombre,tipo,color,raza}=mascota
//console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`)