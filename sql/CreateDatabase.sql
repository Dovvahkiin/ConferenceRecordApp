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

CREATE TABLE users(
 userID integer PRIMARY KEY auto_increment,
 userFirstName varchar(255) NOT NULL,
 userLastName varchar(255) NOT NULL,
 userEmail varchar(255) NOT NULL,
 userPassword varchar(255) NOT NULL,
 isAdmin bool NOT NULL,
 whatRole integer NOT NULL,
 FOREIGN KEY (whatRole) REFERENCES roles(roleID)
);

CREATE TABLE recordContent(
recordContentID integer PRIMARY KEY auto_increment,
recordInfoID integer NOT NULL,
recordText varchar(255) NOT NULL,
recordDate TIMESTAMP DEFAULT current_timestamp,
recordUpdated TIMESTAMP default current_timestamp on update current_timestamp,
FOREIGN KEY (recordInfoID) REFERENCES records(recordID) ON DELETE CASCADE
);
