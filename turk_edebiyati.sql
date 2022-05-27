-- AUTHOR
insert into author (author_id, author_name, information)
VALUES 
(1, "Şeyhi", ""),(2, "Ali Şair Nevai", ""),(3, "Şeyh Galip", ""),(4, "Nabi", ""),
(5, "Yunus Emre", ""),(6, "Fuzuli", ""),(7, "Baki", ""),(8, "Nedim", ""),
(9, "Namik Kemal", ""),(10, "Recaizade Mahmut Ekrem", ""),(11, "Semipaşazade Sezai", ""),(12, "Nabizade Nazim", ""),
(13, "Şemşettin Sami", ""),(14, "Ahmet Mithat Efendi", ""),(15, "Şinasi", ""),(16, "Halit Ziya Uşakligil", ""),
(17, "Hüseyin Rahmi Gürpinar", ""),(18, "Mehmet Rauf", ""),(19, "Hüseyin Cahit Yalçin", ""),(20, "Yakup Kadri Karaosmanoğlu", ""),
(21, "Halide Edip Adivar", ""),(22, "Reşat Nuri Gültekin", ""),(23, "Ömer Seyfettin", ""),
(24, "Haldun Taner", ""),(25, "Ahmet Hamdi Tanpinar", ""),(26, "Oguz Atay", ""),(27, "İnci Aral", ""),(28, "Yusuf Atilgan", "")
;

-- BOOK
insert into book (book_id, book_name, description, summary, image, kind_genre, language, period_id)
VALUES (1, "Harname", "","", "","", "", 1),
	(2, "Hüsrev ü Şirin", "","", "","", "", 1),
    (3, "Mecalisü'n Nefais", "","", "","", "", 1),
    (4, "Hüsn ü Aşk", "","", "","", "", 1),
    (5, "Hayriyye", "","", "","", "", 1),
    (6, "Hayrabad", "","", "","", "", 1),
    (7, "Sur-name", "","", "","", "", 1),
    (8, "Risaletü'n Nushiyye", "","", "","Halk", "", 1),
    (9, "Beng ü Bade", "","", "","", "", 1),
    (10, "Leyla ile Mecnun", "","", "","", "", 1),
    (11, "Su Kasidesi", "","", "","", "", 1),
    (12, "Şikayetname", "","", "","", "", 1),
    (13, "Kanuni Mersiyesi", "","", "","", "", 1),
    (14, "Hadis-i Erbain Terçümesi", "","", "","", "", 1),
    (15, "Divan", "","", "","", "", 1),
    (16, "İntibah", "","", "","", "", 2),
    (17, "Cezmi", "","", "","", "", 2),
    (18, "Celalettin Harzemşah", "","", "","", "", 2),
    (19, "Gülnihal", "","", "","", "", 2),
    (20, "Akif Bey", "","", "","", "", 2),
    (21, "Zavalli Çocuk", "","", "","", "", 2),
    (22, "Araba Sevdasi", "","", "","", "", 2),
    (23, "Següzeşt", "","", "","", "", 2),
    (24, "Karabibik", "","", "","", "", 2),
    (25, "Zehra", "","", "","", "", 2),
    (26, "Taşşuk-i Talat ve Fitnat", "","", "","", "", 2),
    (27, "Felatun Bey ile Rakim Efendi", "","", "","", "", 2),
    (28, "Şair Evlenmesi", "","", "","", "", 2),
    (29, "Mai ve Siyah", "","", "","", "", 3),
    (30, "Aşk-i Memnu", "","", "","", "", 3),
    (31, "Kirik Hayatlar", "","", "","", "", 3),
    (32, "Kirk Yil", "","", "","", "", 3),
    (33, "Şipsevdi", "","", "","", "", 3),
    (34, "Kuyruklu Yildiz Altinda Bir İzdivaç", "","", "","", "", 3),
    (35, "İffet", "","", "","", "", 3),
    (36, "Metres", "","", "","", "", 3),
    (37, "Cehennemlik", "","", "","", "", 3),
    (38, "Şik", "","", "","", "", 3),
    (39, "Eylül", "","", "","", "", 3),
    (40, "Hayal İçinde", "","", "","", "", 3),
    (41, "Kiralik Konak", "","", "","", "", 4),
    (42, "Sodom ve Gomore", "","", "","", "", 4),
    (43, "Yaban", "","", "","", "", 4),
    (44, "Hep O Sarki", "","", "","", "", 4),
    (45, "Panaroma", "","", "","", "", 4),
    (46, "Nur Baba", "","", "","", "", 4),
    (47, "Atesten Gomlek", "","", "","", "", 4),
    (48, "Sinekli Bakkal", "","", "","", "", 4),
    (49, "Daga Cikan Kurt", "","", "","", "", 4),
    (50, "Yaprak Dokumu", "","", "","", "", 4),
    (51, "Yesil Gece", "","", "","", "", 4),
    (52, "Acimak", "","", "","", "", 4),
    (53, "Anadolu Notlari", "","", "","", "", 4),
    (54, "Efruz", "","", "","", "", 4),
    (55, "Keşanli Ali Destani", "","", "","", "", 4),
    (56, "Huzur", "","", "","", "", 5),
    (57, "Saatleri Ayarlama Enstitusu", "","", "","", "", 5),
    (58, "Tutunamayanlar", "","", "","", "", 5),
    (59, "Yeni Yalan Zamanlar", "","", "","", "", 5),
    (60, "Anayurt Oteli", "","", "","", "", 5)
    
    
    ;
-- BOOK_AUTHOR
insert into author_book(book_id, author_id)
VALUES (1,1), (2,1), (3,2), (4,3),(5,4),(6,4),(7,4),(8,5),(9,6),(10,6),(11,6),(12,6),(13,7),(14,7),(15,8),
		(16,9),(17,9),(18,9),(19,9),(20,9),(21,9),(22,10),(23,11),(24,12),(25,12),(26,13),(27,14),(28,15),
        (29,16),(30,6),(31,16),(32,16),(33,17),(34,17),(35,17),(36,17),(37,17),(38,17), (39,18),(40,19),
        (41,20), (42,20), (43,20), (44,20), (45,20), (46,20),(47,21),(48,21),(49,21), (50,22),(51,22),(52,22),(53,22),
        (54,23),(55,24),(56,25),(57,25),(58,26), (59,27), (60,28);
-- PERİOD
insert into period (period_id, period_name, description)
VALUES (1, "Divan Edb.", ""),
(2, "Tanzimat Edb.", ""),
(3, "Servet-i Fünun Edb.", ""),
(4, "Milli Edb.", ""),
(5, "Cumhuriyet Edb.", "");
-- SAVEDBOOKS

-- USER
insert into user (user_id, user_name)
VALUES (1, "idemir"), (2, "aozaslan"), (3, "oserifogullari");
-- 