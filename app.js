//definição das variáveis
let nome=prompt('Qual é o seu nome?');
let idade=prompt('Qual é a sua idade?');
let linguagem=prompt('Qual é(são) a(s) linguagem(ns) que você está aprendendo?');
let pergunta=prompt(`Você gosta de aprender${linguagem}? Digite 1 para sim e 2 para não.`);

//para exibir no console o resultado
let mensagem = `Olá ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}! `;

// lógica da pergunta
if (pergunta == "1") {
    mensagem += "Muito bom! Continue estudando e você terá muito sucesso.";
} else if (pergunta == "2") {
    mensagem += "Ahh que pena... Já tentou aprender outras linguagens?";
} else {
    mensagem += "Resposta inválida! Por favor, digite 1 para sim ou 2 para não.";
}
// exibir no console
console.log(mensagem);

// exibir no HTML
document.getElementById("mensagem").innerText = mensagem;