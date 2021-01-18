import {Request, Response} from 'express'
import {selectAllUsers, selectByName, selectType} from '../data/query'




export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export const getByNameUsers = async(req: Request,res: Response): Promise<void> =>{
    try {

        const name = req.query.name as string

       const users = await selectByName(name)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Nome inválido, então não encontramos nada!")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export const getByType = async(req: Request, res: Response): Promise<void> => {
    try{

         const type = req.params.type as string

         const users = await selectType(type)

         if(!users.length){
            res.statusCode = 404
            throw new Error("Type informado inválido, então não encontramos nada!")
         }
   
         res.status(200).send(users)
         
      } catch (error) {
         console.log(error)
         res.send(error.message || error.sqlMessage)
      }
   
    
 }