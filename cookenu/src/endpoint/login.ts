import {Request, Response} from "express"
import {getUserByEmail} from '../data/getUserByEmail'
import {generateToken} from '../services/authenticator'
import {compareHash} from "../services/hashManager"
import { loginInput } from "../types/loginInput"

export async function login (req: Request, res: Response){
    try {
        
        let errorCode: number = 400

        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }
        if (!input.email || !input.password) {
            throw new Error("Por favor prencha todos os campos.");
         };

         if(!input.email.includes("@")) {
            errorCode = 406
            throw new Error("Please insert a valid email")
        }
        
        const user = await getUserByEmail(input.email);

        if (!user) {
            throw new Error("Usuario não encontrado!");
         };

         const passwordIsCorrect: boolean = compareHash(
            input.password,
            user.password
         );

         if (!passwordIsCorrect) {
            throw new Error("Senha incorreta.");
         };

         const token = generateToken({
            id: user.id         
         });
         res.status(200).send({ token })
    

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}