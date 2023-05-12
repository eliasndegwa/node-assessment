CREATE TABLE users(
    id VARCHAR (100) NOT NULL PRIMARY KEY,
    username VARCHAR(200),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(200)
);