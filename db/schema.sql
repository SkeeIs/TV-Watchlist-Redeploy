### Schema

USE uad3lgewqj32caj3;

CREATE TABLE shows
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    watched_status BOOLEAN DEFAULT false,
    liked BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
