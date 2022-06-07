-- AUTHOR
insert into author (author_id, author_name, information, image_link)
VALUES 
(100,"J. K. Rowling","She is known for seven-volume children's fantasy series, Harry Potter, published from 1997 to 2007", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80"),
(101,"Dan Brown","He is an American author best known for his thriller novels","https://blog.manetho.com/wp-content/uploads/2018/10/DB-Author-Photo-Credit-Dan-Courter-20170530_034-Edit.jpg"),
(102,"Douglas Adams","He was an English author, screenwriter, essayist, humourist, satirist and dramatist.", "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTA-sdnZ700gO9XxeyyhhkT3rkr3Z8UMP3PrexvWuXAjgvkYx4Ekt1ZnDRrfu4f8DdY"),
(103,"George R. R. Martin","He also known as GRRM, is an American novelist, screenwriter, television producer and short story writer.", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_–_George_R._R._Martin.jpg/1200px-Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_–_George_R._R._Martin.jpg")
;

-- BOOK
insert into book (book_id, book_name, description, summary, image, kind_genre, language, period_id)
VALUES (101, "The Ice Dragon","The Ice Dragon is a children's fantasy novelette by George R. R. Martin, originally published in 1980 in the Ace Books anthology Dragons of Light","","","Young adult fiction","English",7),
(102, "Fire & Blood","Fire & Blood is a fantasy book by American writer George R. R. Martin","","https://upload.wikimedia.org/wikipedia/en/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg","Novel","English",7),
(103, "A Game of Thrones","A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin.","","https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg","Novel","English",7),
(104, "The Hitchhiker's Guide to the Galaxy","It is a comedy science fiction franchise created by Douglas Adams.","","https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg","Novel", "English",7),
(105, "So Long, and Thanks for All the Fish","","","https://upload.wikimedia.org/wikipedia/en/c/cf/SoLongAndThanksForAllTheFish.jpg","Novel","English",7),
(106, "The Da Vinci Code","It is a 2003 mystery thriller novel","","https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg","Novel","English",7),
(107, "Harry Potter and the Philosopher's Stone","The first novel in the Harry Potter series","","https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg","Young adult fiction","English",7),
    ;
-- BOOK_AUTHOR
insert into author_book(book_id, author_id)
VALUES (101,103),(102,103),(103,103),
(104,102),(105,102),
(106,101),
(107,100) ;

-- PERİOD
insert into period (period_id, period_name, description)
VALUES  (7, "Popular English Lit.");

-- SAVEDBOOKS
insert into user_book (book_id, user_id, date, points, comment)
VALUES(101,2, now(), 5, "good"),
(101,3, now(), 4, "nice"),
(101,1, now(), 5, "perfect"),
(102,2, now(), 3, "ok"),
(102,3, now(), 4, "mukemmel"),
(102,1, now(), 5, "sweet"),
(103,2, now(), 2, "uzun"),
(103,3, now(), 4, "guzel"),
(103,1, now(), 1, "basarisiz"),
(104,1, now(), 2, "eh"),
(104,2, now(), 5, "mukemmel"),
(104,3, now(), 2, "uzun"),
(105,2, now(), 5, "the best"),
(105,1, now(), 5, "beatiful"),
(105,3, now(), 5, "the best"),
(106,2, now(), 2, "uzun"),
(106,3, now(), 4, "guzel"),
(106,1, now(), 1, "basarisiz"),
(107,2, now(), 2, "uzun"),
(107,3, now(), 4, "guzel"),
(107,1, now(), 1, "basarisiz"),
;

-- USER
insert into user (user_id, user_name)
VALUES (1, "idemir"), (2, "aozaslan"), (3, "oserifogullari");
-- 
