//1. Faça um programa que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const read = require('readline-sync')

let temperatura = parseFloat(read.question("Digite a temperatura em Celsius: "))

function converterFahrenheit(){
    return (temperatura * 1.8) + 32
}

console.log(converterFahrenheit(temperatura), "Fahrenheit")
