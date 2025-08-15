CREATE VIEW getRecords AS
    SELECT 
        r.recordID AS ID,
        r.recordName AS RecordName,
        rc.recordText AS RecordContent,
        r.recordPreviewCount AS Previews,
        rc.recordDate AS CreatedDate,
        rc.recordUpdated AS UpdatedDate
    FROM
        records r
            JOIN
        recordcontent rc ON rc.recordInfoID = r.recordID