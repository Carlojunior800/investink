// converter em Real
function converterEmReal() {
    let real = 1.00;
    let dolarAmericano = 0.19;
    let dolarCanadense = 0.24;
    let euro = 0.16;
    let pesoArgentino = 18.49;
    let libraEsterina = 0.14;

    let digitaValor = document.getElementsByClassName("campoDeDigitacao")[0].value;
    if (digitaValor < 0 || digitaValor == 0) {
        alert('Número digitado inválido!')
        document.getElementById("result").innerHTML = `O valor digitado é inválido.`;
        document.getElementById("result").style.background = "#1D262D";

    } else {
        document.getElementsByClassName("campoDeDigitacao").innerHTML = digitaValor;
        let escolhaUmaMoeda = prompt("Digite uma Moeda", "EX: dolar americano");
        switch (escolhaUmaMoeda) {
            case "dolar americano":
                valorDigitado = digitaValor * dolarAmericano;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de reais em Dolar Americano é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar danadense":
                valorDigitado = digitaValor * dolarCanadense;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de reais em Dolar Canadense é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "euro":
                valorDigitado = digitaValor * euro;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de reais em Euro é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "peso Argentino":
                valorDigitado = digitaValor * pesoArgentino;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de reais em Peso Argentino é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "libra":
                valorDigitado = digitaValor * libraEsterina;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de reais em Libra é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            default:
                document.getElementById("result").innerHTML = `O valor digitado é nulo ou a conversão não é possível no momento.`;
                document.getElementById("result").style.background = "#1D262D";
        }
    }
}



// converter em Dolar Americano
function converterEmDolarAmericano() {
    let dolarAmericano = 1.00;
    let real = 5.25;
    let dolarCanadense = 1.25;
    let euro = 0.85;
    let pesoArgentino = 97.08;
    let libraEsterina = 0.72;

    let digitaValor = document.getElementsByClassName("campoDeDigitacao")[0].value;
    if (digitaValor < 0 || digitaValor == 0) {
        alert('Número digitado inválido!')
        document.getElementById("result").innerHTML = `O valor digitado é inválido.`;
        document.getElementById("result").style.background = "#1D262D";

    } else {
        document.getElementsByClassName("campoDeDigitacao").innerHTML = digitaValor;
        let escolhaUmaMoeda = prompt("Digite uma Moeda", "EX: real");
        switch (escolhaUmaMoeda) {
            case "real":
                valorDigitado = digitaValor * real;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Americano em Reais é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar canadense":
                valorDigitado = digitaValor * dolarCanadense;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Americano em Dolar Canadense é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "euro":
                valorDigitado = digitaValor * euro;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Americano em Euro é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "peso argentino":
                valorDigitado = digitaValor * pesoArgentino;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Americano em Peso Argentino é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "libra":
                valorDigitado = digitaValor * libraEsterina;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Americano em Libra é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            default:
                document.getElementById("result").innerHTML = `O valor digitado é nulo ou a conversão não é possível no momento.`;
                document.getElementById("result").style.background = "#1D262D";
        }
    }
}

// converter em Dolar Canadesense
function converterEmDolarCanadense() {
    let dolarCanadense = 1.00;
    let dolarAmericano = 0.80;
    let real = 4.19;
    let euro = 0.68;
    let pesoArgentino = 77.57;
    let libraEsterina = 0.58;

    let digitaValor = document.getElementsByClassName("campoDeDigitacao")[0].value;
    if (digitaValor < 0 || digitaValor == 0) {
        alert('Número digitado inválido!')
        document.getElementById("result").innerHTML = `O valor digitado é inválido.`;
        document.getElementById("result").style.background = "#1D262D";

    } else {
        document.getElementsByClassName("campoDeDigitacao").innerHTML = digitaValor;
        let escolhaUmaMoeda = prompt("Digite uma Moeda", "EX: dolar americano");

        switch (escolhaUmaMoeda) {
            case "real":
                valorDigitado = digitaValor * real;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Canadense em Real é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar americano":
                valorDigitado = digitaValor * dolarAmericano;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Canadense em Dolar Americano é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "euro":
                valorDigitado = digitaValor * euro;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Canadense em Euro é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "peso argentino":
                valorDigitado = digitaValor * pesoArgentino;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Canadense em Peso Argentina é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "libra":
                valorDigitado = digitaValor * libraEsterina;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Dolar Canadense em Libra é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            default:
                document.getElementById("result").innerHTML = `O valor digitado é nulo ou a conversão não é possível no momento.`;
                document.getElementById("result").style.background = "#1D262D";
        }
    }
}


// converter em Euro
function converterEmEuro() {
    let euro = 1.00;
    let dolarAmericano = 1.18;
    let real = 6.19;
    let dolarCanadense = 1.48;
    let pesoArgentino = 114.52;
    let libraEsterina = 0.85;

    let digitaValor = document.getElementsByClassName("campoDeDigitacao")[0].value;
    if (digitaValor < 0 || digitaValor == 0) {
        alert('Número digitado inválido!')
        document.getElementById("result").innerHTML = `O valor digitado é inválido.`;
        document.getElementById("result").style.background = "#1D262D";

    } else {
        document.getElementsByClassName("campoDeDigitacao").innerHTML = digitaValor;
        let escolhaUmaMoeda = prompt("Digite uma Moeda", "EX: libra");

        switch (escolhaUmaMoeda) {
            case "real":
                valorDigitado = digitaValor * real;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Euro em Real é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar americano":
                valorDigitado = digitaValor * dolarAmericano;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Euro em Dolar Americano é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar canadense":
                valorDigitado = digitaValor * dolarCanadense;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Euro em Dolar Canadense é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "peso argentino":
                valorDigitado = digitaValor * pesoArgentino;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Euro em Peso Argentino é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "libra":
                valorDigitado = digitaValor * libraEsterina;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Euro em Libra é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            default:
                document.getElementById("result").innerHTML = `O valor digitado é nulo ou a conversão não é possível no momento.`;
                document.getElementById("result").style.background = "#1D262D";
        }
    }
}


// converter em Peso Argentino
function converterEmPesoArgentino() {
    let pesoArgentino = 1.00;
    let dolarAmericano = 97.08;
    let real = 0.054;
    let dolarCanadense = 0.013;
    let euro = 0.0087;
    let libraEsterina = 0.0074;

    let digitaValor = document.getElementsByClassName("campoDeDigitacao")[0].value;
    if (digitaValor < 0 || digitaValor == 0) {
        alert('Número digitado inválido!')
        document.getElementById("result").innerHTML = `O valor digitado é inválido.`;
        document.getElementById("result").style.background = "#1D262D";

    } else {
        document.getElementsByClassName("campoDeDigitacao").innerHTML = digitaValor;
        let escolhaUmaMoeda = prompt("Digite uma Moeda", "EX: dolar canadense");

        switch (escolhaUmaMoeda) {
            case "real":
                valorDigitado = digitaValor * real;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Peso Argentino em Real é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar americano":
                valorDigitado = digitaValor * dolarAmericano;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Peso Argentino em Dolar Americano é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar canadense":
                valorDigitado = digitaValor * dolarCanadense;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Peso Argentino em Dolar Canadense é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "euro":
                valorDigitado = digitaValor * euro;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Peso Argentino em Euro é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "libra":
                valorDigitado = digitaValor * libraEsterina;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Peso Argentino em Libra é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            default:
                document.getElementById("result").innerHTML = `O valor digitado é nulo ou a conversão não é possível no momento.`;
                document.getElementById("result").style.background = "#1D262D";
        }
    }
}


// converter em Libra
function converterEmLibra() {

    let libraEsterina = 1.00;
    let pesoArgentino = 133.91;
    let dolarAmericano = 1.39;
    let real = 7.28;
    let dolarCanadense = 1.74;
    let euro = 1.17;

    let digitaValor = document.getElementsByClassName("campoDeDigitacao")[0].value;
    if (digitaValor < 0 || digitaValor == 0) {
        alert('Número digitado inválido!')
        document.getElementById("result").innerHTML = `O valor digitado é inválido.`;
        document.getElementById("result").style.background = "#1D262D";

    } else {
        document.getElementsByClassName("campoDeDigitacao").innerHTML = digitaValor;
        let escolhaUmaMoeda = prompt("Digite uma Moeda", "EX: euro");

        switch (escolhaUmaMoeda) {
            case "real":
                valorDigitado = digitaValor * real;
                var total = valorDigitado.toFixed(2);
                document.getElementById("result").innerHTML = `O Valor convertido de Libra em Real é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar americano":
                valorDigitado = digitaValor * dolarAmericano;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Libra em Dolar Americano é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "dolar canadense":
                valorDigitado = digitaValor * dolarCanadense;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Libra em Dolar Canadense é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "euro":
                valorDigitado = digitaValor * euro;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Libra em Euro é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            case "peso argentino":
                valorDigitado = digitaValor * pesoArgentino;
                var total = valorDigitado.toFixed(3);
                document.getElementById("result").innerHTML = `O Valor convertido de Libra em Peso Argentino é de: ${total}`;
                document.getElementById("result").style.background = "#1D262D";
                break;
            default:
                document.getElementById("result").innerHTML = `O valor digitado é nulo ou a conversão não é possível no momento.`;
                document.getElementById("result").style.background = "#1D262D";
        }
    }
}

