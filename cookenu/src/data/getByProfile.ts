import {connection} from '../index'

export async function getByProfile (id: string): Promise<any>{

    const result = await
    connection
    .select("id", "name", "email").from("cookenu_users")
    .where({id})

    return result[0]
}