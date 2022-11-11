//definindo as variaveis que vão ser utilizadas/acessadas diretamente do HTML
var mensagem_Entrada = document.getElementById("texto-entrada");
var radio_Cifra = document.getElementById("cifra");
var radio_Base64 = document.getElementById("base64");
var barra_Incremento = document.getElementById("barrinha");
var valor_Barra_Incremento = document.getElementById("numero-incremento");
var radio_Codificar = document.getElementById("codificar");
var radio_Decodificar = document.getElementById("decodificar");
var botao_Principal = document.getElementById("botao-principal");
var mensagem_Saida = document.getElementById("texto-saida");
var caixinha_Incremento = document.querySelector(".container-incremento");


radio_Cifra.addEventListener("click", function ()
{
    caixinha_Incremento.style.display = 'flex';
})

radio_Base64.addEventListener("click", function ()
{
    caixinha_Incremento.style.display = 'none';
})

radio_Codificar.addEventListener("click", function ()
{
    if(radio_Codificar.checked)
    {
        botao_Principal.innerText = "Codificar";
    }
})

radio_Decodificar.addEventListener("click", function ()
{
    if(radio_Decodificar.checked)
    {
        botao_Principal.innerText = "Decodificar";
    }
})

botao_Principal.addEventListener("click", function (event)
{
    event.preventDefault();
    if(radio_Cifra.checked)
    {
        if(radio_Codificar.checked)
        {
            
        }

        else if(radio_Decodificar.checked)
        {
            
        }
    }
    else if(radio_Base64.checked)
    {
      if(radio_Codificar.checked)
      {
            alert("Base64 selecionada para Codificar!");
            mensagem_Saida = codificar_Base64(mensagem_Entrada.value);
            console.log(mensagem_Saida)
      }

      else if(radio_Decodificar)
      {
            alert("Base64 selecionada para Decodificar!");
            mensagem_Saida = decodificar_Base64(mensagem_Entrada.value);
            console.log(mensagem_Saida)
      }
    }
});

//funcao para codificar base4
function codificar_Base64(valorCodificar)
{
  return btoa(valorCodificar);
}

//funcao para decodificar base64
function decodificar_Base64(valorDecodificar)
{
  return atob(valorDecodificar);
}

function codificar_Cifra(entradaTexto, incremento)
{
  let array_Letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  entradaTexto = entradaTexto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  let agrupador_Array_Letras = [];
  

}