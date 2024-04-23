CREATE TABLE users
(
    id    BIGINT       NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    role  VARCHAR(40)  NOT NULL,
    PRIMARY KEY (id)
);