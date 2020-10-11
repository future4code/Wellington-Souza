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
do array1 e array2. O Resultado será impresso no console Infinity -10 e 1590. */


// ----------------------------------------- EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO -------------------------------------

// EXERCICIO 1 :

// Podemos utilizar para interar e pecorrer um array o for...of, index do array e utilizando callback em array.

/* const usuario [{
    nome: "André", idade: 25, profissao: "Advogado",
    nome: "Jessica", idade: 23, profissao: "Enfermeira",
    nome: "Antonia", idade: 35, profissao: "Professora",
}]

let novoUsuario = usuario.map ((usuarios, idx, usuario) =>{
    return usuarios.nome
}) */

// EXERCICIO 2 :

// a. false
// b. false
// c. true
// d. false
// e. false

// EXERCICIO 3 :

/*const quanntidadeDeNumerosPares = 5

let i = 0

while (i < quanntidadeDeNumerosPares){
    console.log(i*2)

    i++
}*/

// EXERCICIO 4 :

/*let nomearTriangulo = (a, b, c) => {
    
    if (a ===b && b === c){
        console.log("Este triângulo é equilátero")
    }else if (a === b && b !== c){
        console.log("Este triângulo é isósceles")
    }else{
        console.log("Este triângulo é escaleno")
    }
}  
 nomearTriangulo(4, 4, 2) */

 
 // EXERCICIO 5 : 

 /*let verificaNumeros = (numero1, numero2) =>{

    let divisor = numero1 % numero2 === 0
    let divisor2 = numero2 % numero1 === 0
    let diferenca = numero1 - numero2
    let resultado = Math.abs (diferenca)

    if (numero1 > numero2){
        console.log(`O número maior é: ${numero1}`)
        
    } else{
        console.log(`O número maior é: ${numero2}`)
    }
    
    console.log(`${numero1} não é divisível por ${numero2}`)
    console.log(`${numero2} é divisível por ${numero1}`)
    console.log(`A diferença entre eles é ${resultado}`)
  
    
 }

 verificaNumeros (15, 30) */

 //---------------------------------------- EXERCICIO FUNÇÕES -------------------------------------------

 // EXERCICIO 1 :

/* let arrNumeros = [20, 55, 16, 13, 11, 50, 32, 45, 89]

 let verificaNumerosMaiorEmenor = () =>{

    for (let numero = 0; numero < arrNumeros.length; numero++){
        
    }
 }

 verificaNumerosMaiorEmenor() */

 // EXERCICIO 2 :
/*
 const alertaUsuario = () =>{
     alert("Hello Future4")
 }

 const alertando = alertaUsuario(); */

 // ---------------------------------------------EXERCICIO DE OBJETO ------------------------------------------

 // EXERCICIO 1 :

 /* Arrays é uma maneira de guardar vários dados em um mesmo lugar é como se fosse uma lista de dados, esses dados
 podem ser strings, numeros ou booleanos. Devemos utilizar os arrays quando quisermos armazenar dados simples em 
 uma mesma variável. Objeto é uma forma de estrutura que nos ajuda a guardar dados mais complexos é como se fosse
 uma gaveta que separa os seus elementos através de organizadores. Utilizamos o objeto para quando quisermos guardar
 dados de um usuário como o nome, idade, e-mail, telefone etc. Podemos usar um objeto dentro de uma array.*/

 // EXERCICIO 2 :

 /*let criaRetangulo = (lado1, lado2) =>{
     const retangulo = {
         largura: lado1,
         altura: lado2,
         perimetro: 2* (lado1 + lado2),
         area: lado1 * lado2
     }
 }*/


 // EXERCICIO 3 :

 /*const filmeFavorito = {
     filme: "Toy Story",
     ano: 1995,
     diretor: "John Lasseter",
     elenco: ["Tom Hanks", "Tim Allen","Annie Potts"]
 
    }

    console.log(`Venha assistir ao filme ${filmeFavorito.filme}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor}
    e estrelado por ${filmeFavorito.elenco}`) */

// EXERCICIO 4
/*
const pessoa = {
    nome: "Pietra",
    idade: 22,
    email: "pietra.@gmail.com",
    endereco: "Rua Alberto Vasco, 44"

}

const anonimizarPessoa = () =>{
    
    const pessoa2 ={
        ...pessoa,
        nome: "Anônimo"
    }
    console.log(pessoa2)
}

anonimizarPessoa()
*/

// ----------------------------------------------------- FUNÇÕES DE ARRAY --------------------------------------------

// EXERCICIO 1

// a. 

/*const arrayPessoas = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Arthur", idade: 89}    
]

const novoArrayDeNomes = arrayPessoas.filter ((pessoas, idades, arrayPessoas) =>{
    if (pessoas.idade >= 20){
        return pessoas.nome
    }
}) */

// b. 

/*const arrayPessoas = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Arthur", idade: 89}    
]

const novoArrayDeNomes = arrayPessoas.filter ((pessoas, idades, arrayPessoas) =>{
    if (pessoas.idade > 20){
        return pessoas.nome
    }
})*/

// EXERCICIO 2

// a. 
/*
const arrayDeNumeros = [1, 2, 3, 4, 5, 6]

const arrayMultiplosDois = arrayDeNumeros.map ((numero, idx, arrayDeNumeros) =>{
   
    return numero * 2
    

})
*/

// b.
/*
const arrayDeNumeros = [1, 2, 3, 4, 5, 6]

const arrayMultiplosTres = arrayDeNumeros.map ((numero, idx, arrayDeNumeros) =>{
    
    return `${numero * 3}` 

})

*/

// c.
/*
const arrayDeNumeros = [1, 2, 3, 4, 5, 6]

const arrString = arrayDeNumeros.map ((numero, idx, arrayDeNumeros) =>{
    if (numero % 2 === 0){
        return `${numero} é par`
    }else{
        return `${numero} é impar`
    }
})
*/

// EXERCICIO 3 :

// a. 
/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const altorizaPessoas = pessoas.filter ((pessoa, index, pessoas) =>{

    if (pessoa.idade > 14 && pessoa.altura >= 1.5 && pessoa.idade < 60){
        return pessoa.nome
    }

})
*/

// b.
/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const naoAltoriza = pessoas.filter ((pessoa, index, pessoas) =>{
    
    if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5 ){
        return pessoa.nome
    } 

    
})
*/