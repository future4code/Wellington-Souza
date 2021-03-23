import {Request, Response} from "express"
import {getByProfile} from "../data/getByProfile"
import {getTokenData} from "../services/authenticator"
import {AuthenticationData} from '../types/authenticationData'
import {user} from '../types/user'

export async function getUserProfile (
    req: Request,
    res: Response
) {
    try {
        
        let errorCode = 400

        const token: string = req.headers.authorization!

        if(!token) {
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")  
        }

        const verifiedToken: AuthenticationData = getTokenData(token)

        const userCookenu: user = await getByProfile(verifiedToken.id)

        res.status(200).send({
            id: userCookenu.id, 
            name: userCookenu.name,
            email: userCookenu.email
        })


    } catch (error) {
        
        if( 
            error.message === "invalid signature" || 
            error.message === "jwt expired") {
             res.send("Invalid token")
         }

        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
    }  
}