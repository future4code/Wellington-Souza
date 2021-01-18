import connection from '../connection'


export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM Aula48;
    `)
 
    return result[0]
 }