DROP DATABASE IF EXISTS CursosSenai;
CREATE DATABASE CursosSenai charset=UTF8 COLLATE utf8_general_ci;
USE CursosSenai;

-- DDL Criação da estrutura do Banco de Dados

CREATE TABLE Alunos (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50) NOT NULL,
    nascimento DATE NOT NULL
);

CREATE TABLE Cursos (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    curso VARCHAR (50) NOT NULL,
    duracao TIME NOT NULL
);

CREATE TABLE Cursados (
    id_aluno INTEGER NOT NULL,
    id_curso INTEGER NOT NULL,
    data DATE NOT NULL
);

ALTER TABLE Cursados ADD FOREIGN KEY (id_aluno) REFERENCES Alunos(id);
ALTER TABLE Cursados ADD FOREIGN KEY (id_curso) REFERENCES Cursos(id);


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/ProvaBack/docs/alunos.csv'
INTO TABLE Alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/ProvaBack/docs/cursos.csv'
INTO TABLE Cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/ProvaBack/docs/cursados.csv'
INTO TABLE Cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


SELECT * FROM Alunos;
SELECT * FROM Cursos;
SELECT * FROM Cursados;
