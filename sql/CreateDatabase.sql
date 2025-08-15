CREATE DATABASE seminarski;
USE seminarski;

CREATE TABLE roles(
roleID integer PRIMARY KEY auto_increment,
roleName varchar(255) UNIQUE NOT NULL,
canControl bool NOT NULL,
canEdit bool NOT NULL,
canView bool NOT NULL
);

CREATE TABLE records(
recordID integer PRIMARY KEY auto_increment,
recordName varchar(255) NOT NULL,
recordPreviewCount integer NOT NULL
);
CREATE TABLE usernames(
usernameID integer primary key auto_increment,
username varchar(255) UNIQUE NOT NULL
);

CREATE TABLE users(
 userID integer PRIMARY KEY auto_increment,
 usernameid integer NOT NULL,
 userFirstName varchar(255) NOT NULL,
 userLastName varchar(255) NOT NULL,
 userEmail varchar(255) UNIQUE NOT NULL,
 userPassword varchar(255) NOT NULL,
 whatRole integer NOT NULL,
 FOREIGN KEY (whatRole) REFERENCES roles(roleID),
 FOREIGN KEY (usernameid) REFERENCES usernames(usernameID) ON DELETE CASCADE
);

CREATE TABLE recordContent(
recordContentID integer PRIMARY KEY auto_increment,
recordInfoID integer NOT NULL,
recordText text NOT NULL,
recordDate TIMESTAMP DEFAULT current_timestamp,
recordUpdated TIMESTAMP default current_timestamp on update current_timestamp,
FOREIGN KEY (recordInfoID) REFERENCES records(recordID) ON DELETE CASCADE
);
