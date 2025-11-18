CREATE TABLE PRODUTO(
	ID_PRODUTO SERIAL primary key,
	NOME VARCHAR(20) not null,
	DESCRICAO VARCHAR(50),
	caracteristicas varchar(50)
	
);

CREATE TABLE USUARIO(
	ID_USUARIO SERIAL primary key,
	NOME VARCHAR(30) not null,
	senha varchar(20) not null
);

CREATE TABLE ESTOQUE(
	ID_ESTOQUE serial primary key,
	ID_produto int,
	quantidade int not null,
	FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);