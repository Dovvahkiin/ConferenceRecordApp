DELIMITER $$
CREATE PROCEDURE addNewUser(in userNameInput varchar(255),
							in userFirstNameInput varchar(255),
							in userLastNameInput varchar(255), 
                            in userEmailInput varchar(255), 
                            in userPasswordInput varchar(255), 
							in whatRoleInput integer)

exitNow:
BEGIN
DECLARE rolenumber int;
DECLARE userExists INT;
DECLARE emailExists INT;
DECLARE newUsernameID INT;

START TRANSACTION;

SELECT 
    usernameID
INTO userExists FROM
    usernames
WHERE
    username = userNameInput
LIMIT 1;

if userExists IS NOT NULL
THEN
ROLLBACK;-- exit
SELECT 
    CONCAT('User with username: "',
            userNameInput,
            '" already exists. Transaction failed.') AS errorMessage;
LEAVE exitNow;

END IF; -- first if
SELECT 
    userID
INTO userExists FROM
    users
WHERE
    userEmail = userEmailInput;

IF userExists > 0 THEN
ROLLBACK;-- exit 
SELECT 
    CONCAT('User with " ',
            userEmailInput,
            ' " email address already exists. Transaction failed.') AS errMessage;
            LEAVE exitNow;

END IF; -- second if

SELECT roleID INTO rolenumber from roles
where roleID = whatRoleInput;

IF rolenumber IS NULL OR rolenumber > 3 THEN
ROLLBACK;
SELECT concat('Role cannot be higher than 3') as errMessage;
LEAVE exitNow;

END IF; -- third if



insert into usernames(username) values (userNameInput);
SET newUsernameID = last_insert_id();

INSERT INTO users (usernameID, userFirstName, userLastName, userEmail, userPassword, whatRole)
VALUES (newUsernameID, userFirstNameInput, userLastNameInput, userEmailInput, userPasswordInput, whatRoleInput );

COMMIT;
SELECT 
    CONCAT('User with " ',
            userEmailInput,
            ' " email address is successfully added. Transaction successful.') AS succMessage;
END;
$$