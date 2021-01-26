import connection from '../connection'


export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM Aula48;
    `)
 
    return result[0]
 }

 export  async function selectByName(name: string):Promise<any> {
   
   const result = await connection.raw(`
      SELECT name
      FROM Aula48
      WHERE name LIKE  "%${name}%";
   `)

   return result[0]
}

export  async function selectType(type: string):Promise<any> {
   
   const result = await connection.raw(`
      SELECT name, type
      FROM Aula48
      WHERE type LIKE  "%${type}%";
   `)

   return result[0]
}