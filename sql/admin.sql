CREATE TABLE blogposts
    (
    postNum INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content MEDIUMTEXT NOT NULL,
    timePosted DATETIME NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY (postNum),
    FULLTEXT search (title, content)
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

CREATE TABLE users
    (
    username VARCHAR(30) NOT NULL,
    password CHAR(40) NOT NULL
    );

GRANT SELECT, INSERT ON c9.comments TO 'public'@'%';   
GRANT SELECT ON c9.blogposts TO 'public'@'%';

/* mysql -u username -h my.application.com -ppassword */