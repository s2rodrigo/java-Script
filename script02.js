const divRoot = document.getElementById("root")

// calculadora 
// obter dois valores 
// coversao para Float ou numero para 
const valor1 = parseFloat(prompt("informe um valor"))
const valor2 = parseFloat(prompt("informe outro valor"))

const Soma = valor1 + valor2
const Subtracao = valor1 - valor2
const Multiplicacao = valor1 + valor2
const Divisao = valor1 / valor2
const Resto = valor1 % valor2

console.log(Soma)
console.log(Subtracao)
console.log(Multiplicacao)
console.log(Divisao)
console.log(Resto)

const resultadoSoma = document.createElement("span")
resultadoSoma.textContent = valor1 + " + " + "valor2" + " = " + Soma

const resultadoSubtracao = document.createElement("span")
resultadoSubtracao.textContent = valor1 + " - " + "valor2" + " = " + Subtracao

const resultadoMultiplicacao = document.createElement("span")
resultadoMultiplicacao.textContent = valor1 + " * " + "valor2" + " = " + Multiplicacao

const resultadoDivisao = document.createElement("span")
resultadoDivisao.textContent = `${valor1} / ${valor2} = ${Divisao}`

const resultadoResto = document.createElement("span")
resultadoResto.textContent = valor1 + " % " + "valor2" + " = " + Resto

divRoot.appendChild(resultadoSoma)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoSubtracao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoMultiplicacao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoDivisao)
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(resultadoResto)


const texto = 'Ola Pessoal!'
const elementoTexto = document.createElement("p")
elementoTexto.textContent = texto
divRoot.appendChild(elementoTexto)
divRoot.text
