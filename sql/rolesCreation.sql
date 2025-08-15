INSERT INTO roles (roleName, canControl, canEdit, canView)
VALUES ('admin', TRUE, TRUE, TRUE),
	   ('moderator', false, true, true),
       ('member', false, false, true)