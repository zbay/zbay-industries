CREATE TABLE blogposts
    (
    postNum int NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    fullContent MEDIUMTEXT NOT NULL,
    summaryContent VARCHAR(300) NOT NULL,
    timePosted DATETIME NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY (postNum)
    );