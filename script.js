
const inputTexto = document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem');
const copiar = document.querySelector('.copy');

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
    copy.style.display = "inline";
    inputTexto.value = " ";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringDesencriptada;

}

function btnCopiar() {
    var textoCopiado = document.querySelector('.mensagem');
    textoCopiado.select();
    document.execCommand('copy');
    alert('Texto copiado!');
    copy.style.display = 'none';
    mensagem.value = " ";
}