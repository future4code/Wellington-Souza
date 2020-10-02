/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let usuario = comprarCarta();
let computador = comprarCarta(); 
let usuario2 = comprarCarta();
let computador2 = comprarCarta();


let mensagem = confirm("Quer iniciar uma nova rodada?")

console.log("Bem vindo ao jogo BlackJack!")

if(mensagem){
   console.log("Usuário - cartas: "+ usuario.texto + " " + usuario2.valor + " - pontuação " + resultado)
   console.log("computador - cartas: "+ computador.texto + " " + computador2.valor + " - pontuação " + resultado2)

   }else{
   console.log("O jogo acabou!")
}

let resultado = usuario.valor + usuario2.valor 
let resultado2 = computador.valor + computador2.valor

if (resultado > resultado2) {
   console.log("Usuário ganhou!")
}else if(resultado < resultado2){
   console.log("computador ganhou!")
}else{
   console.log("Empate!")
}









   
  
