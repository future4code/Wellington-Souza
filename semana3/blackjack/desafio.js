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

 window.alert("Bem vindo (a) ao Jogo BlackJack!")

let mensagem = confirm("Quer iniciar uma nova rodada?")
let carta1Usuario = comprarCarta();
let carta2Usuario = comprarCarta();
let carta1Pc = comprarCarta();
let carta2Pc = comprarCarta();
let usuario = []
let computador = []

 if(mensagem){
      
      if (carta1Usuario === "A"
      && carta2Usuario === "A"){
         carta1Usuario = comprarCarta();
         carta2Usuario = comprarCarta();
         alert("Sortudo Pegou dois As - Vou sortear novamente suas cartas")
      }else if(carta1Pc === "A"
      && carta2Pc === "A"){
         carta1Pc = comprarCarta();
         carta2Pc = comprarCarta();
         alert("Computador pegou dois As, sorteando as cartas novamente")
      }else{
         resultado = carta1Usuario.valor + carta2Usuario.valor 
         resultado2 = carta1Pc.valor + carta2Pc.valor
         usuario.push(carta1Usuario.texto, carta2Usuario.texto)
         computador.push(carta1Pc.texto, carta2Pc.texto)
                
      } 

      let mensagem2 = confirm("Suas cartas são: " + usuario[0] + " " + usuario[1] 
      + ". A carta revelado do computador é " + computador[0] +  "\n"  + "Deseja comprar mais uma carta?")

      if (mensagem2){
         let maisUmaCarta = comprarCarta();
         let cartaUsuarioExtra = []
         let cartaPcExtra = []
         while (resultado <= 21 && (mensagem2)){
            cartaUsuarioExtra.push(maisUmaCarta.texto)
            confirm("Suas cartas são: " + usuario[0] + " " + usuario[1] + " " + cartaUsuarioExtra + 
            ". A carta revelada do computador é: " + computador[0] + " " + computador[1] + "\n" + "Deseja comprar mais cartas?")
            resultado += maisUmaCarta.valor
         }
         alert("Suas cartas são: " + usuario[0] + " " + usuario[1] + " " + cartaUsuarioExtra + "Sua pontuação é " + resultado +
         ". A carta revelada do computador é: " + computador[0] + " " + computador[1] + ". A pontuação do computador é " + resultado2 + ". O computador venceu!")
      }else{
         while (resultado2 <= 21 && (mensagem2)){
            let maisUmaCartaPc = comprarCarta();
            let cartaPcExtra = []
            cartaPcExtra.push(maisUmaCartaPc.texto)
            alert("Suas cartas são: " + usuario[0] + " " + usuario[1] + " " + cartaUsuarioExtra + ". Sua pontuação é " + resultado + "\n" +
            "As cartas do computador são " + computador[0] + " " + computador[1] + " " + cartaPcExtra + ". A pontuação do computador é " + resultado2 +
            "\n" + "O usuário venceu!")
            resultado2 += maisUmaCartaPc.valor
         }

      }



}else {
   alert("Acabou o jogo!")
}