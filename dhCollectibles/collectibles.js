const fs=require("fs")
const importar=(marca)=>{
    let nombreMarca=""
    if(marca ==="Hot Toys"){
        nombreMarca="figuras1"
    }
    if(marca === "Bandai"){
        nombreMarca="figuras2"
    }
    if(marca === "Star Wars"){
        nombreMarca="figuras3"
    }
    const path=`./datos/${nombreMarca}.json`
    const marcaJSON=fs.readFileSync(path,"utf-8")
    const marcaParse=JSON.parse(marcaJSON)
    return marcaParse
}
//console.log(importar("Hot Toys"))
module.exports=importar