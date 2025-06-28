const botao = document.getElementById("botao-mensagem");
const mensagem = document.getElementById("mensagem-motivacional");

botao.addEventListener('click', function() {
    mensagem.classList.toggle('visivel');
})

