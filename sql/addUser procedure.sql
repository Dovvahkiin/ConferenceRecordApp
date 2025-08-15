DELIMITER $$
CREATE PROCEDURE addNewUser(in userFirstNameInput varchar(255),
							in userLastNameInput varchar(255), 
                            in userEmailInput varchar(255), 
                            in userPasswordInput varchar(255), 
							in whatRole integer)
BEGIN
DECLARE userExists INT;
START TRANSACTION;

SELECT COUNT(*) INTO userExists FROM users WHERE userEmail = userEmailInput;

IF userExists > 0 THEN
ROLLBACK;
SELECT CONCAT ('User with " ', userEmailInput, ' " email address already exists. Transaction failed.') AS message;
ELSE
INSERT INTO users (userFirstName, userLastName, userEmail, userPassword, whatRole)
VALUES ( userFirstNameInput, userLastNameInput, userEmailInput, userPasswordInput, whatRole );
COMMIT;
SELECT CONCAT ('User with " ', userEmailInput, ' " email address is successfully added. Transaction successful.') AS message;

END IF;
END;$$