### Exercício 1

a) Na opção Salario o float é indicado para uma restrição que não será um número inteiro e o not null é que esse valor não pode ser nulo.

b) SHOW DATABASES - mostra todos os bancos de dados disponíveis.
SHOW TABLES - mostra todas as tabelas que há dentro do banco de dados.

c) na coluna de null ele mostra o NO, para dizer que não aceita nenhum valor nulo!

### Exercício 2

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002",
     "Glória Pires",
     1200000,
     "1963-08-23",
     "female"
);

b) Código de erro: 1062. Entrada duplicada "002" para a chave primária.

c) A contagem de colunas não corresponde à contagem de valores informados. CORREÇÃO: INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Código de erro 1364: o nome do campo não tem um valor padrão - O Campo do nome ele não pode ser um valor nulo. CORREÇÃO - INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Renato Aragão",
  400000,
  "1949-04-18", 
  "male"
);

e) Código de erro: 1292. Valor de data incorreto '1950' para a coluna 'birth_date' na linha 1 - O valor da data tem que ir em string. CORREÇÃO - INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Jennifer Aniston",
    300000000,
    "1969-02-11",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"007",
    "Adam Sandler",
    4200000000,
    "1966-09-09",
    "male"
);

### Exercício 3

a)SELECT name, salary, birth_date FROM Actor WHERE gender = "female";

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) SELECT * FROM Actor WHERE gender = "invalid"; - Ele mostra todas as informações null - pois não há um valor invalid.

d) SELECT id, name, salary FROM Actor WHERE salary > 500000;

e) gerou um erro na sintaxe no código, pois a informações name está incorreta e escrita como nome e faltou o ; - CORREÇÃO - SELECT id, name from Actor WHERE id = "002";  

### Exercício 4

a) Está query determina uma condição caso o name inicie com a letra A ou J e que tenha um salario acima de 30000.

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND > 350000;