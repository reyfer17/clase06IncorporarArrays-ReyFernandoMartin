let precioParcial
let precioCombo
let listaCombo

//creacion de clase
class Producto {
    constructor(nombre, codigo, precio){
    this.nombre = nombre
    this.codigo = codigo
    this.precio = precio
    }
}
//creacion de clase hija
class Pochoclo extends Producto{
    constructor (nombre, codigo, precio,tipo){
        super(nombre,codigo,precio)
        this.tipo = tipo       
    }
    //creacion de un metodo, doy 1 pochoclo y 1 gaseosa, y calculo 1 pochoclo con 2 gaseosas de la elegida, y le hago un pequeño descuento
        crearCombo(pochoclo, gaseosa){ precioCombo = (pochoclo.precio + gaseosa.precio*2)*0.8
            precioParcial = (pochoclo.precio + gaseosa.precio*2)
            listaCombo = pochoclo.nombre +" + "+ gaseosa.nombre +" + "+ gaseosa.nombre 
            console.log(listaCombo)
            console.log("Valor parcial del combo: $"+precioParcial)
            console.log("Valor final del combo (con descuento del 20% incluido): $"+precioCombo)
        }
}

//creacion de objetos
const gaseosaChica = new Producto ("Gaseosa chica",1, 300, "200ml",1)
const gaseosaMediana = new Producto ("Gaseosa mediana",2, 400)
const gaseosaGrande = new Producto ("Gaseosa grande",3, 500)
const pochocloChicoDulce=new Pochoclo("Pochoclos chicos", 4,600,"dulce")
const pochocloMedianoDulce =new Pochoclo("Pochoclos medianos", 5,800,"dulce")
const pochocloGrandeDulce =new Pochoclo("Pochoclos grandes",6,1000,"dulce")

//creacion de arrays
let productos1 = [gaseosaChica, gaseosaMediana, gaseosaGrande, pochocloChicoDulce, pochocloMedianoDulce, pochocloGrandeDulce]
console.log(productos1)

//nuevos objetos para agregar a array
const pochocloChicoSalado=new Pochoclo("Pochoclos chicos", 7,600,"salado")
const pochocloMedianoSalado =new Pochoclo("Pochoclos medianos", 8,800,"salado")
const pochocloGrandeSalado =new Pochoclo("Pochoclos grandes",9,1000,"salado")

//agregado de objetos a array, agrego nuevos pochoclos del tipo salados
let productos2 = [gaseosaChica, gaseosaMediana, gaseosaGrande, pochocloChicoDulce, pochocloMedianoDulce, pochocloGrandeDulce]
productos2.push(pochocloChicoSalado, pochocloMedianoSalado, pochocloGrandeSalado)
console.log(productos2)

//eliminación de objetos del array, elimino los pochoclos
let productos3 = [gaseosaChica, gaseosaMediana, gaseosaGrande, pochocloChicoDulce, pochocloMedianoDulce, pochocloGrandeDulce]
productos3.pop()
productos3.pop()
productos3.pop()
console.log(productos3)

//eliminar por posiciones, dejo solo la gaseosa grande y pochoclos grandes
let productos4 = [gaseosaChica, gaseosaMediana, gaseosaGrande, pochocloChicoDulce, pochocloMedianoDulce, pochocloGrandeDulce]
productos4.splice(0,2)
productos4.splice(1,2)
console.log(productos4)

//uso del metodo creado con los dos productos del ultimo array creado, 1 pochoclo y 1 gaseosa
productos4[1].crearCombo(productos4[1], productos4[0])


