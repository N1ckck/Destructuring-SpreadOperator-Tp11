const importar=require('./collectibles.js')

const HotToys=importar("Hot Toys")
const Bandai=importar("Bandai")
const StarWars=importar("Star Wars")

//console.log(HotToys)

const unifiedCollectibles=[
    ...HotToys,
    ...Bandai,
    ...StarWars
]
//console.log(unifiedCollectibles)

const collectibles={
    figuras : unifiedCollectibles,
    listFigures: function(){
         this.figuras.forEach((figura,i)=>{
            console.log(`${i+1}-${figura.marca}-${figura.nombre}-${figura.precio}-${figura.stock}`)
         }) },
    figuresByBrand:function(marcafigura){
        const figurasXMarca=this.figuras.filter(({marca})=> marca.toLowerCase()===marcafigura.toLowerCase())
        return figurasXMarca
}

}
//collectibles.listFigures() //Listado del objeto literal
//console.log(collectibles.figuresByBrand("Star Wars"))
