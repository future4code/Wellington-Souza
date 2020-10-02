//---------- EXERCÍCIO 1 INTERPRETAÇÃO DE CÓDIGO -----------------------

/* o código verifica a variável i se é menor que 5, sendo
menor cai no loop e soma o valor + i e fica nesse
laço até o valor de i chegar a 5, chegando a 5 ele saí do loop
e imprime na tela o ultimo resultado da soma que é o valor 10. */

//--------------- EXERCÍCIO 2 DE INTERPRETAÇÃO DE CÓDIGO----------------

/* 2.a Será impresso os números 19, 21, 23, 25, 27, 30, pois 
o código vai rodar até o laço imprimir todos os números maiores 
que 18.*/

//2.b Sim

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    console.log(numero)
}
*/

// DESAFIO DE INTERPRETAÇÃO DE CÓDIGO

// o código estará imprimindo zeros em cada linha.

//------------------------------EXERCÍCIO 3 ESCRITA DE CÓDIGO ---------------------------

// 3.a

/* const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let numero of arrayOriginal){
  console.log(numero)
} */

// 3.b

/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let elemento of arrayOriginal ){
    if(elemento > 10){
        elemento = elemento / 10
    }   console.log(elemento)
}*/


// 3.c

/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayPares = []

for(let numero of arrayOriginal ){
    if (numero %2 === 0){
        arrayPares.push(numero)
    }
}
console.log(arrayPares)
*/

// 3.d
/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayString = []

for( let i = 0; i < arrayOriginal.length; i++){
    arrayString.push("O elemento do index " + i + "é: " + arrayOriginal[i])

}

console.log(arrayString)*/



// 3.e

/*const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = arrayOriginal[2]
let valorMinimo = arrayOriginal[5]

for(let i = 0; i > arrayOriginal.length && i < arrayOriginal.length; i++){
    let elemento = arrayOriginal[i]

    if (valorMaximo > elemento){
        valorMaximo = elemento
        
    }else if (valorMinimo < elemento){
        valorMinimo = elemento
    }
}
console.log("O maior numéro é ",  valorMaximo, " e o menor é ",  valorMinimo)*/




