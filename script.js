const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function botonEncriptador(){
    const stringEncriptado = encriptar(textarea.value);
    mensaje.value = stringEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function encriptar(textoEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.log(matrizCodigo);
    textoEncriptado=textoEncriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}


function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.log(matrizCodigo);
    textoDesencriptado=textoDesencriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function botonDesencriptador(){
    const stringDesencriptado = desencriptar(textarea.value);
    mensaje.value = stringDesencriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function copy(){

    const textCopy = mensaje.value;
    mensaje.value = "";
    textarea.value = textCopy;
}

