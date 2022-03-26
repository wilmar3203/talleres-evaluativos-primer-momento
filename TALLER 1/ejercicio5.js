/*Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
nave vendida, menos el 5% de deducciones aplicada solo a las 
comisiones. Codifica un programa que calcule e imprima el 
salario mensual de un vendedor dado*/


let salarioMensual = (salario, navesVendidas) => ((salario+((navesVendidas*1500000)-((navesVendidas*1500000)*5/100))))

let salarioEmpledado = salarioMensual(3500000, 5)

    console.log(`El salario del empleado es: ${salarioEmpledado}`)