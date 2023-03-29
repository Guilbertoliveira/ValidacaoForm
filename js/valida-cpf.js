export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g,""); //removendo os caracters como - e .
    validaNumRep(cpf);
    validaPrimeiroDigito(cpf);
    console.log(validaNumRep(cpf));
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
    return numeroRepetido.includes(cpf)
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

    if(soma == 10 || soma == 1){
        soma = 0;
    }

    return soma != cpf[9];
}

