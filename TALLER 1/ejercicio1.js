/* Yoda el maestro jedi, necesita enseñar a sus aprendices 
Padawan a calcular la distancia a la que cualquiera de los planetas de la 
ruta N-14 pertenecientes a la ruta comercial de la federación 
intergaláctica, se encuentra del planeta NABOO.*/

function calcularDistancia(x1,y1,x2,y2){
    return (Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)))
}

let distancia = calcularDistancia(20,0,30,0)
console.log(`La distancia del planeta es de: ${distancia.toFixed(2)}`)