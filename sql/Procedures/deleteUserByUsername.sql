DELIMITER $$

create procedure deleteUserByUsername (in usernameInput varchar(255))

exitNow:
BEGIN

DECLARE selectedUserID int;
DECLARE selectedUsernameID int;

start transaction;

SELECT 
    usernameID
INTO selectedUsernameID FROM
    usernames
WHERE
    username = usernameInput
LIMIT 1;

IF selectedUsernameID is null then
rollback;
SELECT 
    CONCAT('User with username: "',
            usernameInput,
            '" does not exists. Transaction failed.') AS errMessage;
leave exitNow;
end if;

SELECT 
    userID
INTO selectedUserID FROM
    users
WHERE
    usernameid = selectedUsernameID
LIMIT 1;

if selectedUsernameID is not null then
delete from users where userID = selectedUserID;
end if;
DELETE FROM usernames 
WHERE
    usernameID = selectedUsernameID;
commit;
SELECT 
    CONCAT('User with username: "',
            usernameInput,
            '" is successfully deleted. Transaction Successful.') AS succMessage;

END;
$$
DELIMITER ;