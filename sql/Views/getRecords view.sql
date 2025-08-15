CREATE VIEW getRecords as
SELECT r.recordID, r.recordName, rc.recordText, r.recordPreviewCount, rc.recordDate, rc.recordUpdated
from records r
JOIN recordcontent rc on rc.recordInfoID = r.recordID