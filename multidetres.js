function separarMulti(num) {
    let multiDeTres = [];
    let naoMultiDeTres = [];

    for (let n of num) {
        if (n % 3 === 0)  { //buscando multiplos de 3
            multiDeTres.push(n);
        } else {
            naoMultiDeTres.push(n);
        }
    }

    return {
        multiDeTres,
        naoMultiDeTres
    };
}

// Gerando numeros aleatórios entre 1 e 100
let num = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
let result = separarMulti(num);

console.log("Números múltiplos de 3:", result.multiDeTres);
console.log("Números não múltiplos de 3:", result.naoMultiDeTres);