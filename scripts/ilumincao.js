const corpo_Html = document.querySelector('html');
const botao_Iluminacao = document.querySelector('#iluminacao')

botao_Iluminacao.addEventListener('click', function()
{
    corpo_Html.classList.toggle('luz-escuridao')
    console.log("TIC")
}
)

console.log("Carregou")