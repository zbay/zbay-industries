CREATE TABLE blogposts
    (
    postNum INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    fullContent MEDIUMTEXT NOT NULL,
    timePosted DATETIME NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY (postNum)
    );

CREATE TABLE comments
    (
    commentNum INT NOT NULL AUTO_INCREMENT,
    postNum INT NOT NULL,
    author VARCHAR(100) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    timePosted DATETIME NOT NULL,
    PRIMARY KEY (commentNum)
    );

GRANT SELECT, INSERT ON c9.* TO 'public'@'%';   
GRANT SELECT ON c9.blogposts TO 'public'@'%';