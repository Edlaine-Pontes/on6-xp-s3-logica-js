//3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const read = require('readline-sync')

let medida = parseFloat(read.question("Digite a medida em metros: "))

function converterMilimetro(){
    return medida * 1000
}
console.log(converterMilimetro(medida), "milimetros")
