CREATE OR ALTER PROCEDURE updatePassword(@id VARCHAR(100),@password VARCHAR(200))
AS
BEGIN
UPDATE users SET password=@password WHERE  id=@id
END