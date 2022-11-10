console.log("Fora bozo! >.<'")

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

var conteudo_Mensagem_Entrada = mensagem_Entrada.value.split("");
var valor_Incremento = parseInt(valor_Barra_Incremento.value);


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
            alert("Cifra de Cesar selecionada para Codificar1");
            var valorMsg = mensagem_Entrada.value.split("");
            var valorIncremento = parseInt(valor_Barra_Incremento.value);
            conteudo_Mensagem_Entrada = codificar_Cifra(valorMsg, valorIncremento);
            alert(conteudo_Mensagem_Entrada)
        }

        else if(radio_Decodificar.checked)
        {
            alert("Cifra de Cesar selecionada para Decodificar1");
            var valorMsg = mensagem_Entrada.value.split("");
            var valorIncremento = parseInt(valor_Barra_Incremento.value);
            conteudo_Mensagem_Entrada = decodificar_Cifra_Cifra(valorMsg, valorIncremento);
            alert(conteudo_Mensagem_Entrada)
        }
    }
    else if(radio_Base64.checked)
    {
      if(radio_Codificar.checked)
      {
            alert("Base64 selecionada para Decodificar!");
            mensagem_Saida = codificar_Base64(mensagem_Entrada.value);
            alert(mensagem_Saida)
      }

      else if(radio_Decodificar)
      {
            alert("Base64 selecionada para Codificar!");
            mensagem_Saida = decodificar_Base64(mensagem_Entrada.value);
            alert(mensagem_Saida)
      }
    }
});

function codificar_Base64(valorCodificar)
{
  return btoa(valorCodificar);
}

function decodificar_Base64(valorDecodificar)
{
  return atob(valorDecodificar);
}

function codificar_Cifra(mensagemTexto, chaveIncremento)
{
  return mensagemTexto.map((str) => 
  {
    var entrada = str.charCodeAt();
    if(entrada >= 65 && entrada <= 90)
    {
        return String.fromCharCode(((entrada - 65 + chaveIncremento) % 26) + 65)
    }
    else if(entrada >= 97 && entrada <= 122)
    {
        return String.fromCharCode(((entrada - 97 + chaveIncremento) % 26) + 97)
    }
    else
    {
        return str;
    }
  }).join("");
}

function decodificar_Cifra(mensagemTexto, chaveIncremento)
{
  return mensagemTexto.map((str) =>
  {
        var entrada = str.charCodeAt();
        if(entrada >= 65 && rntrada <= 90)
        {
          if(entrada - 65 - chaveIncremento < 0)
          {
            return String.fromCharCode(((entrada - 65 - chaveIncremento + 26) % 26) + 65)
          }
          else
          {
            return String.fromCharCode(((entrada - 65 - chaveIncremento) % 26) + 65)
          }
        }
        else if(entrada >= 97 && entrada <= 122)
        {
            if(entrada - 97 - chaveIncremento < 0)
            {
                return String.fromCharCode(((entrada - 97 - chaveIncremento + 26) % 26) + 97)
            }
            else
            {
                return String.fromCharCode(((entrada - 97 - chaveIncremento) % 26) + 97)
            }
        }
        else
        {
          return str;
        }
  }).join("");
}



// Switch 

/*var radio = document.querySelectorAll(".radio");
var botao = document.getElementById("botaoResultado");
var mensagem = document.getElementById("mensagem");
var chave = document.getElementById("chave");
var resultado = document.getElementById("resultado");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar" && radio[0].checked)
  {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = codificarCesar(valorMsg, valorChave);
  }
  else if(codigo == "cesar" && radio[1].checked)
  {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = decodificarCesar(valorMsg, valorChave);



// Caesar Cipher decoder

function decodificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        if (entrada - 65 - chave < 0) {
          return String.fromCharCode(((entrada - 65 - chave + 26) % 26) + 65);
        } else {
          return String.fromCharCode(((entrada - 65 - chave) % 26) + 65);
        }
      } else if (entrada >= 97 && entrada <= 122) {
        if (entrada - 97 - chave < 0) {
          return String.fromCharCode(((entrada - 97 - chave + 26) % 26) + 97);
        } else {
          return String.fromCharCode(((entrada - 97 - chave) % 26) + 97);
        }
      } else {
        return str;
      }
    })
    .join("");

function decodificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90)
      {
        if (entrada - 65 - chave < 0)
        {
          return String.fromCharCode(((entrada - 65 - chave + 26) % 26) + 65);
        }
        else
        {
          return String.fromCharCode(((entrada - 65 - chave) % 26) + 65);
        }
      } 
      else if (entrada >= 97 && entrada <= 122)
      {
        if(entrada - 97 - chave < 0)
        {
          return String.fromCharCode(((entrada - 97 - chave + 26) % 26) + 97);
        }
        else
        {
          return String.fromCharCode(((entrada - 97 - chave) % 26) + 97);
        }
      } 
      else
      {
        return str;
      }
    })
    .join("");



// Caesar Cipher encoder

function codificarCesar(msg, chave)
{
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if(entrada >= 65 && entrada <= 90)
      {
        return String.fromCharCode(((entrada - 65 + chave) % 26) + 65);
      }
      else if(entrada >= 97 && entrada <= 122)
      {
      return String.fromCharCode(((entrada - 97 + chave) % 26) + 97);
      } 
      else
      {
        return str;
      }
    })
    .join("");
}

}*/
