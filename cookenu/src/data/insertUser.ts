import {connection} from '../index'

export async function insertUser(
    
    id: string,
    name: string,
    email: string,
    password: string

){
    await connection.insert({
        id,
        name,
        email,
        password
    }).into('cookenu_users')
}