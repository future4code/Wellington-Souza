
export type extract = {
   totalValue: number,
   date: string,
   description?: string 
}

export type user = {
    id: number,
    name: string,
    cpf: number,
    birthday: string,
    balance: number,
    age: number,
    extract: extract[]
}

let users: user[] = [
    {
        id: Date.now(),
        name: "Maria",
        cpf: 23343454780,
        birthday:" 19/05/1993",
        balance: 1000,
        age: 28,
        extract:[
            {
             totalValue: 30,
             date: "22/09/2020",  
            }
        ]  
    },

    {
        id: Date.now(),
        name: "Antonia",
        cpf: 1178698065,
        birthday:" 10/11/1990",
        balance: 1000,
        age: 28,
        extract:[
            {
             totalValue: 31,
             date: "22/09/2020",  
            }
        ]  
    },


]