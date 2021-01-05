

// 1 A. Numero não pode ser atribuido ao tipo string
const minhaString: string = 1

// 1 B. Para atribuir tbm uma string podemos utilizar o union type
const meuNumero: number | string = "1"

// 1 C.

const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "Wellington",
    idade: 32,
    corFavorita: "Azul"
}

// 1 D. 
/*
type person = { 
    nome: string,
    idade: number,
    corFavorita: string
} */

/*
const pessoas: person[] = [
    {
        nome: "Bartolomeu",
        idade: 23,
        corFavorita: "Roxo"
    }
    {
        nome: "Tiago",
        idade: 30,
        corFavorita: "Verde"
    }
    {
        nome: "Pedro",
        idade: 31,
        corFavorita: "Amarelo"
    }
    
] */
 
// 1 E. 

type person = { 
    nome: string,
    idade: number,
    corFavorita: string
}

enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    ROXO = "Roxo",
    AZUL = "Azul"
}

const pessoas: person[] = [
    {
        nome: "Bartolomeu",
        idade: 23,
        corFavorita: CoresArcoIris.ROXO
    }
    {
        nome: "Tiago",
        idade: 30,
        corFavorita: CoresArcoIris.VERDE
    }
    {
        nome: "Pedro",
        idade: 31,
        corFavorita: CoresArcoIris.AMARELO
    }
    
]