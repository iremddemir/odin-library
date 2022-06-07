-- 1) highest rating books by their period 
select b.book_name, a.author_name, p.period_name, mt.total_points
from book b
join (select book_id, sum(points) as total_points
from user_book
group by book_id) bp on bp.book_id = b.book_id
join author_book ab on ab.book_id = b.book_id
join author a on ab.author_id = a.author_id
join period p on p.period_id = b.period_id
join (select p.period_id, max(total_points) as total_points
from book b
join (select book_id, sum(points) as total_points
from user_book
group by book_id) bp on bp.book_id = b.book_id
join author_book ab on ab.book_id = b.book_id
join author a on ab.author_id = a.author_id
join period p on p.period_id = b.period_id
group by p.period_id) mt on mt.period_id = b.period_id;

-- 2) authors that wrote in more than one period
select a.*
from author_book ab
join author a on a.author_id = ab.author_id
join book b on b.book_id = ab.book_id
join period p on p.period_id = b.period_id
group by a.author_id
having COUNT(DISTINCT(p.period_id)) >1;

-- 3) users with highest overall activity ordering in order
-- can give limit function to limit number of records that will be shown
select u.user_name, COUNT(book_id) as book_count 
from user_book ub
join user u on u.user_id = ub.user_id
group by ub.user_id
order by book_count DESC; 

-- 4) users with highest activity is in the last 3 month in order
-- can give limit function to limit number of records that will be shown
select u.user_name, COUNT(book_id) as book_count 
from (select * 
from user_book
where date > now() - interval 3 month) ub
join user u on u.user_id = ub.user_id
group by ub.user_id
order by book_count DESC; 

-- 5) most saved books in order 
-- can give limit function to limit number of records that will be shown
select b.book_id, b.book_name, p.period_name, count(*) as book_saved_count
from savedBooks sb
join book_savedBooks bsb on sb.savedbooks_id = bsb.savedbooks_id
join book b on b.book_id = bsb.book_id
join period p on p.period_id = b.period_id
group by bsb.book_id
order by book_saved_count DESC;





