//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do deafio!';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole () {
    console.log('O botao console foi clicado.')
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlert() {
    console.log('Eu amo js')
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function somandoNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro numero:'))
    let segundoNumero = parseInt(prompt('Digite o segundo numero:'))
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado da some entre o ${primeiroNumero} + ${segundoNumero} é ${resultado}`)
}