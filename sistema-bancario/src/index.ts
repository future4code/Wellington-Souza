import express, { Request, Response } from 'express'
import cors from 'cors'
import { user, extract } from "./users"

const app = express()

app.use(express.json())
app.use(cors())

app.post("accounts", (req: Request, res: Response)=>{
   
    try{
        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            cpf: req.body.cpf,
            birthday: req.body.birthday,
            balance: req.body.balance,
            age: req.body.age,
            extract:[
                    {
                        totalValue: req.body.totalValue,
                        date: req.body.date,
                        description: req.body.description
                    }
        ]
        }

        if (!reqBody)

    }catch{

    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });
