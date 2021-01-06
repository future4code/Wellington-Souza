import express, {  Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app = express()
app.use (express.json())
app.use(cors())


// Endpoint 1 GET 

app.get("/countries/all", (req: Request, res: Response) =>{

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
      
      res
        .status(200)
        .send(result)

}) 




// Endpoint 3

app.get("/countries/search", (req: Request, res: Response)=>{

    

    if(!req.query.name && ! req.query.capital && !req.query.continen ) {
        res.status(404).send("Not Found")
    } else {
        let result: country[] = countries

        if (req.query.name) {
            result = result.filter(
               country => country.name.includes(req.query.name as string)
            )
         }
         
         if (req.query.capital) {
            result = result.filter(
               country => country.capital.includes(req.query.capital as string)
            )
         }
         
         if (req.query.continent) {
            result = result.filter(
               country => country.continent.includes(req.query.continent as string)
            )
         }
         
         if (result.length) {
             res.status(200).send(result)
         } else {
             res.status(404).send("Not found")
         }
    }

    
})

// Endpoint 2 GET

app.get("/countries/:id", (req: Request, res: Response)=>{

    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
     
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });
