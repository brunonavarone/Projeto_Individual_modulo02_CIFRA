//definindo as variaveis que vão ser utilizadas/acessadas diretamente do HTML
var mensagem_Entrada = document.getElementById("texto-entrada");
var radio_Cifra = document.getElementById("cifra");
var radio_Base64 = document.getElementById("base64");
var valor_Incremento = document.getElementById("incremento");
var radio_Codificar = document.getElementById("codificar");
var radio_Decodificar = document.getElementById("decodificar");
var botao_Principal = document.getElementById("botao-principal");
var mensagem_Saida = document.querySelector(".container-mensagem-saida");
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
    mensagem_Saida.style.display = "flex";
    event.preventDefault();
    if(radio_Cifra.checked)
    {
      let mensagem = mensagem_Entrada.value;
      let chave = valor_Incremento.value;
      typeof(chave);
      if(radio_Codificar.checked)
      {
        mensagem_Saida.innerHTML = `<p>${codificar_Cifra(mensagem, parseInt(chave))}</p>`
      }
      else if(radio_Decodificar.checked)
      {
        mensagem_Saida.innerHTML = `<p>${decodificar_Cifra(mensagem, parseInt(chave))}</p>`
      }
    }
    else if(radio_Base64.checked)
    {
      if(radio_Codificar.checked)
      {
            mensagem_Saida.innerHTML = `<div><P>${codificar_Base64(mensagem_Entrada.value)}</P></div>`;
      }

      else if(radio_Decodificar)
      
            mensagem_Saida.innerHTML = `<div><P>${decodificar_Base64(mensagem_Entrada.value)}\n</P></div>`;
      }
    }
);


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

//funcao para codificar a cifra
function codificar_Cifra(entradaTexto, incremento)
{
  let array_Letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  entradaTexto = entradaTexto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  let agrupador_Array_Letras = [];
  let contador = 0;
  agrupador_Array_Letras = entradaTexto.split('');
  
  while(contador < agrupador_Array_Letras.length)
  {
      if(array_Letras.includes(agrupador_Array_Letras[contador]))
      {
          agrupador_Array_Letras[contador] = array_Letras[(array_Letras.indexOf(agrupador_Array_Letras[contador]) + incremento) % 26];
          /*arrayTemporario[i] = cifraDeCesar[(cifraDeCesar.indexOf(arrayTemporario[i]) + incremento) % 26];*/
      }
      else if(array_Letras.includes(agrupador_Array_Letras[contador].toUpperCase()))
      {
          agrupador_Array_Letras[contador] = array_Letras[(array_Letras.indexOf(agrupador_Array_Letras[contador].toUpperCase()) + incremento) % 26].toLowerCase();
      }
      else
      {
          agrupador_Array_Letras[contador] = agrupador_Array_Letras[contador];
      }
      contador++;
  }

  return agrupador_Array_Letras.join("");
}

//funcao para decodiciar cifra 
function decodificar_Cifra(entradaTexto, incremento)
{
  let array_Letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let agrupador_Array_Letras = [];
  let contador = 0;
  agrupador_Array_Letras = entradaTexto.split('');

  while(contador < agrupador_Array_Letras.length)
  {
      if(array_Letras.includes(agrupador_Array_Letras[contador]))
      {
          agrupador_Array_Letras[contador] = array_Letras[(array_Letras.length + array_Letras.indexOf(agrupador_Array_Letras[contador]) - (incremento % 26)) % 26];
      }
      else if(array_Letras.includes(agrupador_Array_Letras[contador].toUpperCase()))
      {
          agrupador_Array_Letras[contador] = array_Letras[(array_Letras.length + array_Letras.indexOf(agrupador_Array_Letras[contador].toUpperCase()) - (incremento % 26)) % 26].toLowerCase();
      }
      else
      {
        agrupador_Array_Letras[contador] = agrupador_Array_Letras[contador];
      }
      contador++;
  }
  return agrupador_Array_Letras.join("");
}
