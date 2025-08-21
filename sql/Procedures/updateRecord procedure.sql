DELIMITER $$

CREATE PROCEDURE updateRecord(in recordIDInput int, in title varchar(255), in content text)

exitNow:
BEGIN
DECLARE selectedID int;
SELECT 
    COUNT(*)
INTO selectedID FROM
    records
WHERE
    recordID = recordIDInput;

START TRANSACTION;

if selectedID = 0 
THEN ROLLBACK;
SELECT CONCAT('Record does not exists. Transaction failed!') AS errMessage;
LEAVE exitNow;
END IF;

UPDATE records 
SET 
    recordName = title
WHERE
    recordID = recordIDInput;

UPDATE recordcontent 
SET 
    recordText = content
WHERE
    recordInfoID = recordIDInput;
COMMIT;
select concat("Record is successfully updated!")as succMessage;
END;
$$