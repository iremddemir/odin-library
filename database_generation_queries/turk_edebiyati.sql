-- AUTHOR
insert into author (author_id, author_name, information)
VALUES 
(1, "Şeyhi", "Şeyhî (ö. 1431), Kütahya doğumlu 15. asır Türk divan şairi ve tabip. Kendinden sonra gelen birçok şairi etkilemiş bir şairdir. Harnâme adlı hiciv mesnevisi ve Fars edebiyatının ünlü şairi Nizami'nin aynı adlı eserinden Türkçeleştirdiği Hüsrev ü Şîrîn adlı aşk mesnevisi en ünlü eserleridir.", "https://1000kitap.com/yazar/seyhi"),
(2, "Ali Şair Nevai", "'Ali-Shir Nava'i, also known as Nizām-al-Din ʿAli-Shir Herawī was a poet, writer, politician, linguist, Hanafi Maturidi mystic and painter who was the greatest representative of Chagatai literature.", "https://www.turkedebiyati.org/images/yazarlar_sairler/ali_sir_nevai.jpg"),
(3, "Şeyh Galip", "Galib Mehmed Esad Dede, known as Sheikh Galib, was a Turkish poet of divan literature, mystic.", "https://lh4.googleusercontent.com/MdXTmfBJvPVeL3JA42OfLpyae8FfZxz_a_aRypOMe-zFMTr9QumY3gF3FSgrjwuxGjYhVp1rX2b2pIEoCDQqY3ENdqihPBOPm0aFHii1ITee8VP01Nz21Nxp6bg978hOaBIRFg4o"),
(4, "Nabi", "Yusuf Nabi was a Turkish Divan poet of Kurdish descent, in the court of Mehmet IV. He was famous for \"his brilliant lyrics filled with popular sayings and critiques of the age and verses commemorating innumerable important occasions.\" At the age of 24 Nabi left Şanlıurfa Province and came to Istanbul to study.", "https://www.mortakasanat.com/wp-content/uploads/2020/09/image003-18.jpg"),
(5, "Yunus Emre", "Yunus Emre also known as Derviş Yunus was a Turkish folk poet and Islamic Sufi mystic who greatly influenced Turkish culture. His name, Yunus, is the Muslim equivalent to the English name Jonah. He wrote in Old Anatolian Turkish, an early stage of Turkish.", "https://pbs.twimg.com/profile_images/1208401611/Yunus_Emre_400x400.jpg"),
(6, "Fuzuli", "Mahammad bin Suleyman, better known by his pen name Fuzuli, was a 16th century poet, writer and thinker, who wrote in his native Azerbaijani, as well as Arabic and Persian languages.", "https://img.antoloji.com/media/sair_resimleri/00/1100_b_7018.jpg"),
(7, "Baki", "Bâḳî was the pen name of the Ottoman Turkish poet Mahmud Abdülbâkî. Considered one of the greatest contributors to Turkish literature and Azerbaijani literature. Bâkî came to be known as Sultânüş-şuarâ, or \"Sultan of poets\". ", "https://admin.biyografya.com/_docs/photos/5c7c1769660f707699d57066fc28a5e7.jpg"),
(8, "Nedim", "Ahmed Nedîm Efendi was the pen name of one of the most celebrated Ottoman poets. He achieved his greatest fame during the reign of Ahmed III, the so-called Tulip Era from 1718 to 1730.", "https://upload.wikimedia.org/wikipedia/commons/c/c4/Nedim_%28divan_edb.%C5%9Fairi%29.JPG"),
(9, "Namik Kemal", "Namık Kemal (21 December 1840 – 2 December 1888) was an Ottoman democrat, writer, intellectual, reformer, journalist, playwright, and political activist who was influential in the formation of the Young Ottomans and their struggle for governmental reform in the Ottoman Empire during the late Tanzimat period, which would lead to the First Constitutional Era in the Empire in 1876.", "https://uskudar.edu.tr/assets/uploads/bilimadami/66/namik-kemal.jpg"),
(10, "Recaizade Mahmut Ekrem", ""),
(11, "Semipaşazade Sezai", ""),(12, "Nabizade Nazim", ""),
(13, "Şemşettin Sami", ""),(14, "Ahmet Mithat Efendi", ""),(15, "Şinasi", ""),(16, "Halit Ziya Uşakligil", ""),
(17, "Hüseyin Rahmi Gürpinar", ""),(18, "Mehmet Rauf", ""),(19, "Hüseyin Cahit Yalçin", ""),(20, "Yakup Kadri Karaosmanoğlu", ""),
(21, "Halide Edip Adivar", ""),(22, "Reşat Nuri Gültekin", ""),(23, "Ömer Seyfettin", ""),
(24, "Haldun Taner", ""),(25, "Ahmet Hamdi Tanpinar", ""),(26, "Oguz Atay", ""),(27, "İnci Aral", ""),(28, "Yusuf Atilgan", "")
;

-- BOOK
insert into book (book_id, book_name, description, summary, image, kind_genre, language, period_id)
VALUES (1, "Harname", "","", "https://cdn.bkmkitap.com/harname-11542674-49-O.jpg","", "", 1),
	(2, "Hüsrev ü Şirin", "","", "https://cdn.bkmkitap.com/husrev-ile-sirin-11564351-41-O.jpg","", "", 1),
    (3, "Mecalisü'n Nefais", "","", "https://i.dr.com.tr/cache/600x600-0/originals/0001695270001-1.jpg","", "", 1),
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
-- update 
insert into book (book_id, book_name, description, summary, image, kind_genre, language, period_id)
VALUES(61, "Nirvana", "", "", "", "Tiyatro", "", 6);
-- BOOK_AUTHOR
insert into author_book(book_id, author_id)
VALUES (1,1), (2,1), (3,2), (4,3),(5,4),(6,4),(7,4),(8,5),(9,6),(10,6),(11,6),(12,6),(13,7),(14,7),(15,8),
		(16,9),(17,9),(18,9),(19,9),(20,9),(21,9),(22,10),(23,11),(24,12),(25,12),(26,13),(27,14),(28,15),
        (29,16),(30,6),(31,16),(32,16),(33,17),(34,17),(35,17),(36,17),(37,17),(38,17), (39,18),(40,19),
        (41,20), (42,20), (43,20), (44,20), (45,20), (46,20),(47,21),(48,21),(49,21), (50,22),(51,22),(52,22),(53,22),
        (54,23),(55,24),(56,25),(57,25),(58,26), (59,27), (60,28);
-- update
insert into author_book(book_id, author_id)
VALUES (61, 20);
-- PERİOD
insert into period (period_id, period_name, description)
VALUES (1, "Divan Edb.", ""),
(2, "Tanzimat Edb.", ""),
(3, "Servet-i Fünun Edb.", ""),
(4, "Milli Edb.", ""),
(5, "Cumhuriyet Edb.", "");
-- updates:
insert into period (period_id, period_name, description)
VALUES (6, "Fecri Ati Edb.", "");

-- SAVEDBOOKS
insert into user_book (book_id, user_id, date, points, comment)
VALUES(3,2, NULL, 5, "mukemmel"),
(27,2, NULL, 2, "uzun"),
(60,2, NULL, 4, "guzel"),
(2,2, NULL, 1, "basarisiz"),
(28,2, NULL, 2, "eh");
-- updates with date value:
insert into user_book (book_id, user_id, date, points, comment)
VALUES(5,3, now(), 3, "ok"),
(50,1, now(), 3, "ok");
-- USER
insert into user (user_id, user_name)
VALUES (1, "idemir"), (2, "aozaslan"), (3, "oserifogullari");
-- 
