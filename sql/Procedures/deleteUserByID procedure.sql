DELIMITER $$
CREATE PROCEDURE deleteUserByID ( in deleteID int )

exitNow:
BEGIN
DECLARE selectedID int;

START TRANSACTION;
SELECT usernameID into selectedID from usernames
where usernameID = deleteID
limit 1;

IF selectedID IS NULL THEN
ROLLBACK;
select concat ("User does not exists!") as errMessage;
LEAVE exitNow;
END IF;

delete from usernames where usernameID = deleteID;
delete from users where usernameid = deleteID;
alter table usernames auto_increment = 1;
alter table users auto_increment = 1;
Commit;
select concat ('Record with recordID: "', deleteID, '" is deleted.' ) as succMessage;

END;
$$