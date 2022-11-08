console.log("Fora bozo! >.<'")

//definindo as variaveis que vão ser utilizadas/acessadas diretamente do HTML
const mensagem_Entrada = document.getElementById("texto-entrada");
const radio_Cifra = document.getElementById("cifra");
const radio_Base64 = document.getElementById("base64");
const barra_Incremento = document.getElementById("barrinha");
const valor_Barra_Incremento = document.getElementById("numero-incremento");
const radio_Codificar = document.getElementById("codificar");
const radio_Decodificar = document.getElementById("decodificar");
const botao_Principal = document.getElementById("botao-principal");
const mensagem_Saida = document.getElementById("texto-saida");
const caixinha_Incremento = document.querySelector(".container-incremento");


radio_Cifra.addEventListener("click", function ()
{
    caixinha_Incremento.style.display = 'flex';
})

radio_Base64.addEventListener("click", function ()
{
    caixinha_Incremento.style.display = 'none';
})



botao_Principal.addEventListener("click", function ()
{
    if(radio_Cifra.checked)
    {
        alert("Cifra de Cesar selecionada!", mensagem_Entrada.value);
    }
    else if(radio_Base64.checked)
    {
        alert("Base64 selecionada!", mensagem_Entrada.value);
    }
});
// Switch 

/*var radio = document.querySelectorAll(".radio");
var botao = document.getElementById("botaoResultado");
var mensagem = document.getElementById("mensagem");
var chave = document.getElementById("chave");
var resultado = document.getElementById("resultado");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar" && radio[0].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = codificarCesar(valorMsg, valorChave);
  } else if (codigo == "cesar" && radio[1].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = decodificarCesar(valorMsg, valorChave);

// Base64 encoder and decoder
  } else if (codigo == "base64" && radio[0].checked) {
    var valorMsg = mensagem.value;
    resultado.value = btoa(valorMsg);
  } else {
    var valorMsg = mensagem.value;
    resultado.value = atob(valorMsg);
  }
});

// Caesar Cipher encoder

function codificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        return String.fromCharCode(((entrada - 65 + chave) % 26) + 65);
      } else if (entrada >= 97 && entrada <= 122) {
        return String.fromCharCode(((entrada - 97 + chave) % 26) + 97);
      } else {
        return str;
      }
    })
    .join("");
}

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
}

// Switch button's text
radio[0].addEventListener("click", function () {
  if (radio[0].checked) {
    botao.style.display = 'block';
    botao.innerText = 'Encode';
  }
});

radio[1].addEventListener("click", function () {
  if (radio[1].checked) {
    botao.style.display = 'block';
    botao.innerText = 'Decode';
  }
});*/