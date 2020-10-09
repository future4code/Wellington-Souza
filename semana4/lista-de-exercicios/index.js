// EXERCICIO 1 DE INTERPRETAÇÃO DE CÓDIGO

/* Esta função consiste em pegar o valor da cotação do dolar em reais e retonar o valor multiplicado pela cotação,
logo a baixo a função é envocada em uma váriavel para receber o valor de 100 multiplacdo pela cotação e imprime
o valor no console. Resultado: 100 * 5,53 = 553
*/

// EXERCICIO 2 DE INTERPRETAÇÃO DE CÓDIGO

/* È uma função onde usa a condicional para aplicação de investimento, caso o usuário invista em um dos tipos de
investimento a variável valorAposInvestimento irá receber o resultado do valor investido multiplicado por 1.03. 
No final desta função irá retornar a variável com o resultado do tipo de investimento. Logo abaixo temos duas
variáveis invocando a função com os parâmetros do tipo de investimento e o valor investido. Os resultados serão:
165 e Tido de investimento informado incorreto!
*/

// EXERCICIO 3 DE INTERPRETAÇÃO DE CÓDIGO

/* Temos um array de numeros e dois arrays vazios, abaixo temos uma estrutura de repetição dizendo que para
cada numero da array numeros, se o divisor de numero for igual a 0 vai para a array1 que será um array de numeros
pares, caso o contrario array2 que será uma array de numeros impares. Depois irá imprimir no console a quantidade 
de elementos da array numeros, array1 e array2. Os valores serão: 14, 6, 8.

// EXERCICIO 4 DE INTERPRETAÇÃO DE CÓDIGO

/* Existe uma estrutura de repetição para verificar qual numero de dentro do array numeros será maior ou menor que
do array1 e array2. O Resultado será impresso no console Infinity e */


const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10,
25, 1590];

let numero1 = Infinity;
let numero2 = 0;

for (let numero of numeros){
    if(numero < numero1){
        numero1 = numero;
    }

    if (numero > numero2){
        numero2 = numero;
    }
}

console.log(numero1)
console.log(numero2)