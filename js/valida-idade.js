export default function ehMaiorDeIdade (campo){
    const dataNascimento = new Date(campo.value)
    console.log(dataNascimento);
    validaIdade(dataNascimento);

}

function validaIdade(data) {
    const dataAtual = new Date();
    console.log(dataAtual)
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()); //soma a data passada pelo usuario + 18
    console.log(dataMais18);

    return dataAtual >= dataMais18;
}