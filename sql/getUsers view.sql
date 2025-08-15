Create view getusers as
select un.username, u.userFirstName, u.userLastName, u.userEmail, u.whatRole 
from users u
join usernames un on un.usernameID = u.userID;