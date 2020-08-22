//2. Agora faça o contrário, um programa que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

const read = require('readline-sync')

let temperatura = parseFloat(read.question("Digite a temperatura em Fahrenheit: "))

function converterCelsius(){
    return (temperatura - 32) / 1.8
}

console.log(converterCelsius(temperatura), "Celsius")