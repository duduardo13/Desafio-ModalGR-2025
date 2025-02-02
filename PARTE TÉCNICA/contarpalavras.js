function contarPalavras(frase) {
    let palavras = frase.trim().split(/\s+/);
    return `Quantidade de palavras: ${palavras.length}`;
}
//Frase proposta
//console.log(contarPalavras("A ModalGR está criando soluções incríveis."));

//Teste você mesmo

console.log(contarPalavras(prompt("Digite uma frase para que seja contada as palavras: ")))