/*Yoda el maestro jedí, necesita asignar a sus aprendices 
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10 
segundos) y una vez este objeto sea creado se debe llamar a una función 
secundaria que clasifique y muestre en consola la actividad asignada al 
Padawan
 */
function asignarActividad(nombre, planeta, edad, estatura, clasificar) {
    setTimeout(function () {
      let padawan = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
      };
      clasificar(padawan);
    }, 10000);
  }
  
  asignarActividad("Wilmar", "Tierra", 27, 1.78, function (padawan) {
    if (padawan.edad >= 15) {
      console.log(
        `El padawan de nombre ${padawan.nombre} con una edad de ${padawan.edad} años y  una estatura de ${padawan.estatura} metros perteneciente al planeta ${padawan.planeta} se le asigna la actividad (manejo del sable de luz)`
      );
    } else {
      console.log(
        `El padawan de nombre ${padawan.nombre} con una edad de ${padawan.edad} años y  una estatura de ${padawan.estatura} metros perteneciente al planeta ${padawan.planeta} se le asigna la actividad (manejo de la fuerza)`
      );
    }
  });
  