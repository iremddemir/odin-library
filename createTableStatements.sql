CREATE TABLE book
(
	book_id INT,
    book_name VARCHAR(100),
    description VARCHAR(500),
    summary VARCHAR(500),
    -- image as url
    image VARCHAR(500),
    kind_genre VARCHAR(100),
    language VARCHAR(100),
    period_id INT,
    PRIMARY KEY (book_id),
    FOREIGN KEY (period_id) REFERENCES period(period_id) 
);
CREATE TABLE author
(
	author_id INT,
    author_name VARCHAR(100),
	information VARCHAR(500),
    PRIMARY KEY (author_id)
    
);
CREATE TABLE period
(
	period_id INT,
    period_name VARCHAR(100),
	description VARCHAR(500),
    PRIMARY KEY (period_id)
);
CREATE TABLE savedBooks
(
	savedbooks_id INT,
    list_name VARCHAR(100),
    user_id INT,
    PRIMARY KEY (savedbooks_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id) 
);
CREATE TABLE user
(
	user_id INT,
    user_name VARCHAR(100),
    PRIMARY KEY (user_id)
);
CREATE TABLE author_book
(
	book_id INT,
    author_id INT,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    FOREIGN KEY (author_id) REFERENCES author(author_id),
    PRIMARY KEY (book_id, author_id)
);
CREATE TABLE user_book
(
	book_id INT,
    user_id INT,
    date timestamp,
    points INT,
    comment VARCHAR(100),
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    PRIMARY KEY (book_id, user_id)
);
CREATE TABLE book_savedBooks
(
	book_id INT,
    savedbooks_id INT,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    FOREIGN KEY (savedbooks_id) REFERENCES savedBooks(savedbooks_id),
    PRIMARY KEY (book_id, savedbooks_id)
);