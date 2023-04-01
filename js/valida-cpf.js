export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g,""); //removendo os caracters como - e .
    if (validaNumRep(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf) ){
        campo.setCustomValidity('Esse cpf não é valido');
    } 
   
}



function validaNumRep(cpf){
    const numeroRepetido = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    //pesquisando se o cpf está dentro do array
    console.log(numeroRepetido.includes(cpf));
    return numeroRepetido.includes(cpf);
}


//validando o primeiro digito
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho <9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador --;
    }
    soma = (soma * 10) % 11;
    console.log(soma);

    if(soma == 10 || soma == 11){
        soma = 0;
    }

    console.log(soma != cpf[9]);
    return soma != cpf[9];
}

//validando o segundo digito
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho <10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador --;
    }
    soma = (soma * 10) % 11;
    console.log(soma);

    if(soma == 10 || soma == 11){
        soma = 0;
    }

    console.log(soma != cpf[10]);
    return soma != cpf[10];
}

