DELIMITER $$
CREATE PROCEDURE addNewRecord ( in recordNameInput varchar(255),
							    in recordPreviewCount int,
                                in recordTextInput text )
                                
BEGIN
DECLARE recordExists INT;
DECLARE contentExists INT;
DECLARE newRecordID INT;

SELECT recordID INTO recordExists from records
where recordName = recordNameInput
LIMIT 1;

IF recordExists IS NULL THEN
START TRANSACTION;

INSERT INTO records (recordName, recordPreviewCount)
VALUES (recordNameInput, recordPreviewCount);

SET newRecordID = last_insert_id();

INSERT INTO recordcontent ( recordInfoID, recordText )
VALUES (newRecordID, recordTextInput);

COMMIT;
SELECT concat('Record with record name: "', recordNameInput,'" and record text: "', recordTextInput,'" \n has been successfuly added.') as succMessage;

ELSE

select count(*) INTO contentExists FROM recordcontent
WHERE recordInfoID = recordExists AND recordText = recordTextInput;

IF contentExists > 0 THEN
SELECT CONCAT('Record already exists') as errMessage;

ELSE
            START TRANSACTION;
            INSERT INTO recordcontent (recordInfoID, recordText)
            VALUES (newRecordID, recordTextInput);
            COMMIT;
SELECT concat('Record with record name: "', recordNameInput,'" and record text: "', recordTextInput,'" \n has been successfuly added.') as succMessage;

END IF;
END IF;
END;
$$

DELIMITER ;