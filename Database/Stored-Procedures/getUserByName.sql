CREATE OR ALTER PROCEDURE getUser(@username VARCHAR(200))
AS
BEGIN
SELECT * FROM users WHERE  username=@username
END