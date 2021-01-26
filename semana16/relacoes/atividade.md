### Exercício 1

a) é uma forma de referênciar ou relacionar uma tabela com a outra para que isso aconteça a chave estrangeira
ou a FOREIGN KEY deve ser igual a PK.

b) CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating
VALUES
("001", "Filme maravilhoso, nunca ri tanto na minha vida", 9.5, "001"),
("002", "Já vi filmes melhores", 7.5, "002"),
("003", "Me arrependi em vir assistir!", 5.5, "003");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-wellington-brito`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
 não é possivel adicionar esse valor pois o id não é valido pois não existe.

 d) ALTER TABLE Movies DROP COLUMN rating;

 e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-wellington-brito`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
não é possível excluir uma linha que está relacionada com outra tabela, para isso precisaria excluir todos os dados da tabela de Rating.


### Exercício 2

a) Cria uma tabela para relacionar os atores com os filmes.

b) INSERT INTO MovieCast
VALUES 
("001", "002");
("001", "001"),
("001", "004"),
("002", "004"),
("002", "006"),
("002", "004");

c) Erro 1452, geralmente acontce quando não há dados relacionados entre as tabelas.

e) não é possível excluir uma linha que está relacionada com outra tabela, para isso precisaria excluir todos os dados da tabela de Rating.

### Exercício 3

a) O operdor ON ele evita que o dados a serem mostrados venham repetidos, por isso ele vem acompanhado de uma condição.

b) SELECT Movies.id, Movies.title, Rating.rate FROM Movies
JOIN Rating ON Movies.id = Rating.movie_id;