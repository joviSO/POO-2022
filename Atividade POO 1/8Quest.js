let frase = "á é í ô ão ñ"

console.log("frase inicial: " + frase, "\nfrase final: " + frase.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));