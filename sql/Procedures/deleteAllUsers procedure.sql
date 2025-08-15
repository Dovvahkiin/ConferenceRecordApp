DELIMITER $$
CREATE PROCEDURE deleteAllUsers()

BEGIN

START TRANSACTION;

SET FOREIGN_KEY_CHECKS = 0;
truncate table usernames;
truncate table users;
SET FOREIGN_KEY_CHECKS = 1;

Select concat ("All users are deleted!") as succMessage;

COMMIT;

END;