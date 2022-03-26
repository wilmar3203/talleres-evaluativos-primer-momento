/*QUI-GON JINN está encargado de revisar un arreglo 
de 20 sables de luz y contabilizar la cantidad de sables que 
tienen energías menores a 20 Joules.
Nota: el formato de cada sable es:
cable={
color:v erde,
 energía: 50 ,
 portafor: Obi Wan
}*/
let sables =
[
 {color: "Azul", energia: 40, portador: "Wilmar A"},
 {color: "Verde", energia: 19, portador: "Nodin C"},
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 15, portador: "Juan C"},
 {color: "Rojo", energia: 10, portador: "Sara B"},
 {color: "Rosa", energia: 20, portador: "Finn E"},
 {color: "Azul", energia: 50, portador: "Sara B"},
 {color: "Amarillo", energia: 15, portador: "Wilmar A"},
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Violeta", energia: 20, portador: "Wilmar A"},
 {color: "Verde", energia: 35, portador: "Obi Wan"},
 {color: "Amarillo", energia: 18, portador: "Juan O"},
 {color: "Rosa", energia: 10, portador: "Obi Wan"},
 {color: "Azul", energia: 11, portador: "Andres I"},
 {color: "Verde", energia: 10, portador: "Jhon F"},
 {color: "Rosa", energia: 35, portador: "Sebastian F"},
 {color: "Violeta", energia: 50, portador: "Nia C"},
 {color: "Amarillo", energia: 19, portador: "Nodin C"},
 {color: "Rojo", energia: 45, portador: "Obi Wan"},
 {color: "Azul", energia: 40, portador: "Juan C"}
]


let filtradoEnergias = sables.filter(function(sable){
    return(sable.energia < 20)
})

console.log(`Las energias menores de 20 Joules son ${filtradoEnergias.length}`)


filtradoEnergias.forEach(element => {
    let energiasMenores =`Energia en Joules: ${element.energia} - Color: ${element.color} - Portador: ${element.portador}`
    console.log(energiasMenores)
}); 

