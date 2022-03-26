/* Grogu ha iniciado su entrenamiento Jedi y debe 
activar un software que permita clasificar su dieta:
alimento = { 
 nombre, 
 tipo (Puede ser vegetal, animal, insecto), 
 nivel de energía (números entre 100-500) 
 
} 
Cree un programa que permita recibir 50 alimentos diferentes y 
mediante una función primaria después de 5 segundos se 
pueda obtener solo los alimentos de tipo vegetal que entreguen 
mas de 200 unidades de energía. Finalmente, una función 
callback debe permitir entregar la sumatoria de niveles de 
energía entregados por los alimentos vegetales consumidos en 
la dieta de Grogu */
let alimentos = ['Ensalada', 'Carne', 'Camarones']
let tipoAlimentos = ['Vegetal', 'Animal', 'Insecto']

let dietas = []

for (let i = 0; i < 50; i++) {

    let dieta = {}

    dieta.nombre =  alimentos[Math.floor(Math.random() * alimentos.length)]
    dieta.tipoAlimento =   tipoAlimentos[Math.floor(Math.random() * tipoAlimentos.length)]
    dieta.nivelEnergia = Math.floor(Math.random() * (100,500) + 100)
    dietas.push(dieta)
}
console.log(dietas)

function filtrarVegetales(dietas, clasificar){
    setTimeout(() => {
       let dietas2 = dietas.filter(function(dieta){
            return (dieta.tipoAlimento == 'Vegetal' && dieta.nivelEnergia > 200)
        })
        console.log(dietas2)
        clasificar(dietas)
    }, 5000);
}

filtrarVegetales(dietas, function(dietas){
    let sumaNivelesEnergiga = 0;
    dietas.forEach(nivel => {
        sumaNivelesEnergiga = sumaNivelesEnergiga + nivel.nivelEnergia
    }); 
    console.log(`La suma de los niveles de energia de la dieta de Grogu es de: ${sumaNivelesEnergiga} energias`)
})