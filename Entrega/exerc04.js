const read = require('readline-sync')

const parametro1 = Number(read.question("Digite o primeiro parametro: "));
const parametro2 = Number(read.question("Digite o segundo parametro: "));
const parametro3 = Number(read.question("Digite o terceiro parametro: "));

function retornaParametros(parametro1, parametro2, parametro3){
    if(parametro1 && parametro2 && parametro3){
        console.log (`${(parametro1 + parametro2) / parametro3}`)

    } else if(!parametro1 && !parametro2 && !parametro3){
        console.log ("Não recebeu parâmetro.")
        
    } else if (!parametro2 && !parametro3) {
        console.log (parametro1)

    } else if (!parametro3 && !parametro1) {
        console.log (parametro2)

    }else if (!parametro2 && !parametro1) {
        console.log (parametro3)

    }else {
        console.log(parametro1 + parametro2 + parametro3)
    }
}

retornaParametros(parametro1, parametro2, parametro3)