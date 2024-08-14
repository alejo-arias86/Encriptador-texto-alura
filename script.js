const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");
const right1 = document.querySelector(".right");
const right2 = document.querySelector(".right-2");
const botonCopiar = document.querySelector(".button-copy");

function btn_encriptar() {
    if (textArea.value != ""){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        right1.style.display = "none";
        right2.style.display = "flex";

        botonCopiar.classList.remove("hidden");
        document.querySelector(".texto-copiado").style.display ="none";

    } else {
        right1.style.display = "flex";
        right2.style.display = "none";
    }
    
    
}

function btn_desencriptar() {
    if (textArea.value != ""){
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        right1.style.display = "none";
        right2.style.display = "flex";
        
        botonCopiar.classList.remove("hidden");
        document.querySelector(".texto-copiado").style.display ="none";

    } else {
        right1.style.display = "flex";
        right2.style.display = "none";
    }
    
}

function btn_copiar() {
    let textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    botonCopiar.classList.add("hidden");
    document.querySelector(".texto-copiado").style.display ="flex";
    

}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}