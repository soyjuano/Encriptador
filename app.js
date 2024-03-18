const textoIngresado = document.querySelector("#ingreso");
const textoResultado = document.querySelector("#resultado");

function limpiarIngreso() {
    textoIngresado.value = "";
}

function limpiarResultado() {
    textoResultado.value = "";
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar() {
    if (!validarTexto(textoIngresado.value)) {
        alert('Ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    let textoEncriptado = textoIngresado.value.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    textoResultado.value = textoEncriptado;
}

function desencriptar() {
    if (!validarTexto(textoIngresado.value)) {
        alert('Ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    let textoDesencriptado = textoIngresado.value.replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");
    textoResultado.value = textoDesencriptado;
}

function copiar() {
    navigator.clipboard.writeText(textoResultado.value)
        .then(() => {
            limpiarResultado();
            limpiarIngreso();
        })
        .catch((err) => {
            console.error('Error al copiar desde el portapapeles:', err);
        });
}

function pegar() {
    limpiarIngreso();
    navigator.clipboard.readText()
        .then((clipboardText) => {
            textoIngresado.value = clipboardText;
        })
        .catch((err) => {
            console.error('Error al pegar desde el portapapeles:', err);
        });
}
