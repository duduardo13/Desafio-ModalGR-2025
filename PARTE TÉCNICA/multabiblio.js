    function calcularMulta(multaPorDia, diasAtraso) {
        if (diasAtraso === 0) {
            return "Sem atraso, sem multa! O valor da multa é: R$0.00";
        }

        let multa = multaPorDia * diasAtraso;
        
        if (multa < 1) {
            multa = 1;
        }

        return `O valor da multa para ${diasAtraso} dias de atraso é: R$${multa.toFixed(2)}`;
    }

    // Evitando que seja digitados numeros menores que 0 ou nulo
    function obterNumero(mensagem) {
        let numero;
        do {
            numero = prompt(mensagem).trim(); // Remove espaços extras
            if (numero === "" || isNaN(numero) || parseFloat(numero) < 0) {
                alert("Por favor, digite um número válido maior ou igual a 0.");
            } else {
                return parseFloat(numero);
            }
        } while (true);
    }

    let multaPorDia = obterNumero("Digite o valor da multa diária:");
    let diasAtraso = obterNumero("Digite a quantidade de dias de atraso:");

    console.log(calcularMulta(multaPorDia, diasAtraso));