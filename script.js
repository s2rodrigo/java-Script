     //OBTIVE A DIV COM O ID ROOT 
     const divRoot = document.getElementById ("root")
     //IMPRIMIDO NO CONSOLE A DIV
     console.log(divRoot)
     const valor1 = 10;
     const valor2 = 20;
     //CRIANDO UM ELEMENTO DE TITULO DE NIVEL 1
     const resultado = document.createElement ("h1")
     // ATRIBUINDO VALOR DE SOMA DE DOIS VALORES PARA O TEXTO DO TITTULO
     resultado.textContent = (valor1 + valor2)
     divRoot.appendChild(resultado)
     

     // CRIAMOS UMA NOVA DIV
     const divValores = document.createElement("div")
     //ATRIBUIMOS O ID "VALORES" PARA DIV 
     divValores.setAttribute ("id", "valores")
     divRoot.appendChild (divValores)
     
     // CRIAMOS UM ELEMNTO TITULO 2 PARA MOSTRAR.
     //O CONTEUDO DA CONSTANTE VALOR1
     const h2Valor1 = document.createElement("h2")
     //ATRIBUIMOS O CONTEUDO DA CONSTANTE VALOR1
     // PARA TEXTO DO TITULO -2

     h2Valor1.textContent = valor1

     //ADICIONAMOS O TITULO 2 NA DIV COM "VALORES"
     divValores.appendChild (h2Valor2)
     console.log(valor1)