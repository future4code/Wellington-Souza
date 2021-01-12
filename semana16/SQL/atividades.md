### Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary; - Apagaria a coluna do salario.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); - Altera o valor da colula de gender para sex e altera o type do VARCHAR para 6 caracteres.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); - Mantém o valor de gender e altera o type do VARCHAR para 255 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercicio 2

a) UPDATE Actor
SET name = "Fernanda Souza" , birth_date = "1984-06-18"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

c) UPDATE Actor
SET name = "Will Smith", salary = 100000000, birth_date = "1968-09-25", gender= "male"
WHERE id = "005";

d) Ele aceitou a alteração, porém na resposta diz que nenhuma linha e nenhuma coluna foi afetada.

### Exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Souza";

b) DELETE FROM Actor
    WHERE
	gender = "male" AND
	salary > 1000000;

### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;


### Exercício 5


