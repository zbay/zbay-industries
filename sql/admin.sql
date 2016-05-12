CREATE TABLE admin
    (
    username VARCHAR(50) NOT NULL,
    password VARCHAR(300) NOT NULL,
    PRIMARY KEY (username)
    );

CREATE TABLE blogposts
    (
    postNum int NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    fullContent MEDIUMTEXT NOT NULL,
    summaryContent VARCHAR(300) NOT NULL,
    timePosted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (postNum)
    );

CREATE TABLE postTags
    (
    postNum int NOT NULL,
    tag varchar(50) NOT NULL,
    FOREIGN KEY (postNum) REFERENCES blogposts(postNum)
    );