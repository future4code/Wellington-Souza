### Exercício 1

a) Quando utilizamos o raw recebemos dois arrays como retorno, um com os dados que estão em nossa tabela e o outro um metadado que o banco de dados envia.

b) const searchActor = async (name: string) : Promise<any> => {
  const result = await connection.raw (`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

c) const countActors = async (gender: string) : Promise<any> => {
  const result = await connection.raw (`
    SELECT COUNT (*) as count FROM Actor WHERE gender = "{gender}"
  `);
  const count = result[0][0].count;
  return count;
 
}