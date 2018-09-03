### Schema
-- DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(100) NOT NULL,
	year varchar(100) NOT NULL,
	PRIMARY KEY (id)
);
