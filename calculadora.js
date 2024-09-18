function menuCalculadora() {
    return prompt("Escolha uma operação:\n1. Adição (+)\n2. Subtração (-)\n3. Multiplicação (*)\n4. Divisão (/)\n5. Sair");
}

function calculadora() {
    let operacao = parseFloat(menuCalculadora());

    if (operacao === 5) {
        console.log("Saindo...");
        return;
    }

    if (operacao >= 1 && operacao <= 4) {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Números inválidos.");
        } else {
            switch (operacao) {
                case 1:
                    console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
                    break;
                case 2:
                    console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
                    break;
                case 3:
                    console.log(`Resultado: ${num1} * ${num2} = ${num1 * num2}`);
                    break;
                case 4:
                    if (num2 === 0) {
                        console.log("Divisão por zero não é permitida.");
                    } else {
                        console.log(`Resultado: ${num1} / ${num2} = ${num1 / num2}`);
                    }
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        }
    } else {
        console.log("Opção inválida. Tente novamente.");
    }

    calculadora();
}

calculadora();