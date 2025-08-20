CREATE VIEW getusers AS
    SELECT 
        un.usernameid AS ID,
        un.username AS UserName,
        u.userFirstName AS FirstName,
        u.userLastName AS LastName,
        u.userEmail AS Email,
        u.userPassword AS Password,
        r.rolename AS RoleName,
        r.roleid AS RoleID,
        r.canControl,
        r.canEdit,
        r.canView
    FROM
        users u
            JOIN
        usernames un ON un.usernameID = u.userID
            JOIN
        roles r ON roleID = u.whatrole;