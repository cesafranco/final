

function encriptar() {
  const textoInicial = document.getElementById("textoInicial").value;

  const textoEncriptado = textoInicial.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.getElementById("textoEncriptado").value = textoEncriptado;
  document.getElementById("textoInicial").value = "";
}

function desencriptar() {
  const textoEncriptado = document.getElementById("textoEncriptado").value;
  const textoInicial = textoEncriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.getElementById("textoInicial").value = textoInicial;
  document.getElementById("textoEncriptado").value = "";
}
function copiarTextoEncriptado() {
  const textoEncriptado = document.getElementById("textoEncriptado").value;
  navigator.clipboard.writeText(textoEncriptado);
}

