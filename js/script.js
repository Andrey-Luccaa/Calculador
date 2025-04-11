const botao_number0 = document.querySelector(".numero0");
const botao_point = document.querySelector(".ponto");
const botao_resultado = document.querySelector(".resultado");
const botao_number1 = document.querySelector(".numero1");
const botao_number2 = document.querySelector(".numero2");
const botao_number3 = document.querySelector(".numero3");
const botao_soma = document.querySelector(".soma");
const botao_number4 = document.querySelector(".numero4");
const botao_number5 = document.querySelector(".numero5");
const botao_number6 = document.querySelector(".numero6");
const botao_subtracao = document.querySelector(".subtracao");
const botao_number7 = document.querySelector(".numero7");
const botao_number8 = document.querySelector(".numero8");
const botao_number9 = document.querySelector(".numero9");
const botao_multiplicacao = document.querySelector(".multiplicacao");
const botao_ce = document.querySelector(".CE");
const botao_raiz = document.querySelector(".raiz");
const botao_porcentagem = document.querySelector(".porcentagem");
const botao_divisao = document.querySelector(".divisao");
const botao_on = document.querySelector(".on");
const botao_mrc = document.querySelector(".mrc");
const botao_msub = document.querySelector(".M-");
const botao_msom = document.querySelector(".M");
const numbox = document.querySelector(".numbox");

let calcular = '';
let ligado = false; // Estado inicial: desligado

botao_on.addEventListener('click', () => {
    ligado = !ligado; // Alterna entre ligado e desligado
    
    if (ligado) {
        document.documentElement.style.setProperty('--cor1', 'rgb(104, 2, 189)');
        document.documentElement.style.setProperty('--cor2', 'rgb(148, 74, 209)');
        document.documentElement.style.setProperty('--bx1', 'rgb(60, 1, 109)');
        document.documentElement.style.setProperty('--bx2', 'rgb(81, 39, 116)');
        numbox.textContent = '';
    } else {
        document.documentElement.style.setProperty('--cor1', 'rgb(128, 128, 128)');
        document.documentElement.style.setProperty('--cor2', 'rgb(128, 128, 128)');
        document.documentElement.style.setProperty('--bx1', 'rgb(78, 78, 78)');
        document.documentElement.style.setProperty('--bx2', 'rgb(78, 78, 78)');
        numbox.textContent = 'Desligado';
        calcular = '';
    }
});

botao_number0.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent += '0';
        calcular += '0';
    }
});

botao_point.addEventListener("click", () => {
    if (ligado && !calcular.includes('.')) {
        numbox.textContent += '.';
        calcular += '.';
    }
});

const handleNumberClick = (num) => {
    if (ligado) {
        numbox.textContent += num;
        calcular += num;
    }
};

[botao_number1, botao_number2, botao_number3, botao_number4, botao_number5, botao_number6, botao_number7, botao_number8, botao_number9].forEach((botao, index) => {
    botao.addEventListener("click", () => handleNumberClick(index + 1));
});

botao_soma.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent += ' + ';
        calcular += "+";
    }
});

botao_subtracao.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent += ' - ';
        calcular += "-";
    }
});

botao_divisao.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent += ' ÷ ';
        calcular += "/";
    }
});

botao_multiplicacao.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent += ' X ';
        calcular += '*';
    }
});

botao_porcentagem.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent += ' % ';
        calcular += "%";
    }
});

botao_raiz.addEventListener("click", () => {
    if (ligado) {
        const resultadoRaiz = Math.sqrt(parseFloat(calcular) || 0);
        numbox.textContent = '√(' + calcular + ') = ' + resultadoRaiz;
        calcular = resultadoRaiz.toString();
    }
});

botao_ce.addEventListener("click", () => {
    if (ligado) {
        numbox.textContent = '';
        calcular = '';
    }
});

botao_resultado.addEventListener("click", () => {
    if (ligado) {
        const resultado = calcularExpressao(calcular);
        adicionarAoHistorico(`${numbox.textContent} = ${resultado}`);
        numbox.textContent = resultado;
        calcular = resultado.toString();
    }
});


function calcularExpressao(expressao) {
    try {
        return eval(expressao);
    } catch (error) {
        return "Erro na expressão";
    }
}
function adicionarAoHistorico(entrada) {
    const lista = document.getElementById("historico");
    const item = document.createElement("li");
    item.textContent = entrada;
    lista.appendChild(item);
}

function limparHistorico() {
    const lista = document.getElementById("historico");
    lista.innerHTML = "";
}
