DELIMITER $$
CREATE PROCEDURE deleteRecord ( in deleteID int )

exitNow:
BEGIN
DECLARE selectedID int;

START TRANSACTION;
SELECT recordID into selectedID from records
where recordID = deleteID
limit 1;

IF selectedID IS NULL THEN
ROLLBACK;
select concat ("ID is not matching!") as errMessage;
LEAVE exitNow;
END IF;

delete from records where recordID = deleteID;
delete from recordcontent where recordInfoID = deleteID;
alter table records auto_increment = 1;
alter table recordcontent auto_increment = 1;
Commit;
select concat ('Record with recordID: "', deleteID, '" is deleted.' ) as succMessage;

END;
$$