CREATE OR ALTER PROCEDURE insertUser(
@id VARCHAR(100),
@username VARCHAR(200),
@email VARCHAR(200),
@password VARCHAR(100)
)
AS
BEGIN 
INSERT INTO users(id,username,email,password)
VALUES( @id, @username,@email, @password)
END