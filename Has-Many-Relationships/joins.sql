-- Write querys for database

-- 1. query to get all fields from the users table
-- SELECT *
-- FROM users;

-- 2. query to get all fields from the posts table based on col value
-- SELECT posts.*
-- FROM posts
--   INNER JOIN users ON (posts.users_id = users.id)
--     WHERE users_id = 100;

-- 3 query to get all fields based on col value
-- SELECT posts.*, users.first_name, users.last_name
-- FROM posts
--   INNER JOIN users ON (posts.users_id = users.id)
--     WHERE users_id = 200;

-- 4 query to get all posts fields and fields from users based on column value
-- SELECT posts.*, users.username
-- FROM posts
--   INNER JOIN users ON (posts.users_id = users.id)
--     WHERE first_name = 'Norene' and last_name = 'Schmitt';

-- 5 query to get username from users based on col value
-- SELECT DISTINCT users.username
-- FROM posts
--   INNER JOIN users ON (posts.users_id = users.id)
--     WHERE posts.created_at > '2015-01-01';

-- 6 Create a query to get the post title, post content, and user's username where the user who created the post joined before January 1, 2015
-- SELECT posts.title, posts.content, users.username
-- FROM posts
--   INNER JOIN users ON (posts.users_id = users.id)
--     WHERE users.created_at < '2015-01-01';

-- 7 Create a query to get the all rows in the `comments` table, showing post title (aliased as 'Post Title'), and the all the comment's fields
-- SELECT comments.*, posts.title as "Post Title"
-- FROM comments
--   INNER JOIN posts ON (comments.posts_id = posts.id)

-- 8 Create a query to get the all rows in the `comments` table, showing post title (aliased as post_title), post url (ailased as post_url), and the comment body (aliased as comment_body) where the post was created before January 1, 2015
-- SELECT comments.id, comments.body as comments_body, posts.title as post_title, posts.url as post_url
-- FROM comments
--   INNER JOIN posts ON (comments.posts_id = posts.id)
--     WHERE posts.created_at < '2015-01-01';

-- 9 Create a query to get the all rows in the `comments` table, showing post title (aliased as post_title), post url (ailased as post_url), and the comment body (aliased as comment_body) where the post was created after January 1, 2015
-- SELECT comments.id, comments.body as comments_body, posts.title as post_title, posts.url as post_url
-- FROM comments
--   INNER JOIN posts ON (comments.posts_id = posts.id)
--     WHERE posts.created_at > '2015-01-01';

-- 10 Create a query to get the all rows in the `comments` table, showing post title (aliased as post_title), post url (ailased as post_url), and the comment body (aliased as comment_body) where the comment body contains the word 'USB'
-- SELECT title AS post_title, url as post_url, body AS comment_body
-- FROM comments
--     INNER JOIN posts ON (comments.posts_id = posts.id)
--     WHERE to_tsvector('english'::regconfig, body) @@ to_tsquery('english'::regconfig, 'USB');

-- 11 Create a query to get the post title (aliased as post_title), first name of the author of the post, last name of the author of the post, and comment body (aliased to comment_body), where the comment body contains the word 'matrix' ( should have 855 results )
-- SELECT title AS post_title, first_name, last_name, body AS comment_body FROM comments
--   INNER JOIN posts ON (comments.posts_id = posts.id)
--   INNER JOIN users ON (comments.users_id = users.id)
--   WHERE to_tsvector('english'::regconfig, body) @@ to_tsquery('english'::regconfig, 'matrix');

-- 12 Create a query to get the first name of the author of the comment, last name of the author of the comment, and comment body (aliased to comment_body), where the comment body contains the word 'SSL' and the post content contains the word 'dolorum' ( should have 102 results )
-- SELECT first_name, last_name, body AS comment_body FROM comments
--   INNER JOIN users ON (comments.users_id = users.id)
--   INNER JOIN posts ON (comments.users_id = posts.id)
--   -- MUST JOIN posts to do a search on its "content" column;
--   WHERE to_tsvector('english'::regconfig, body) @@ to_tsquery('english'::regconfig, 'SSL')
--   AND to_tsvector('english'::regconfig, "content") @@ to_tsquery('english'::regconfig, 'dolorum');

-- 13 Create a query to get the first name of the author of the post (aliased to post_author_first_name), last name of the author of the post (aliased to post_author_last_name), the post title (aliased to post_title), username of the author of the comment (aliased to comment_author_username), and comment body (aliased to comment_body), where the comment body contains the word 'SSL' or 'firewall' and the post content contains the word 'nemo' ( should have 218 results )

-- SELECT post_users.first_name AS post_author_first_name, post_users.last_name
-- AS post_author_last_name, posts.title AS post_title, comment_users.username
-- AS comment_author_username, comments.body AS comment_body
-- -- SELECT COUNT (posts.id)
-- FROM users post_users
--   INNER JOIN posts ON posts.users_id = post_users.id
--   INNER JOIN comments ON comments.posts_id = posts.id
--   INNER JOIN users comment_users ON comment_users.id = comments.id
--   WHERE (comments.body like '%SSL%' OR comments.body LIKE '%firewall%')
--   AND posts.content like '%nemo%';

-- Additional Queries

-- 14. Find the post id, post title, and user id of all posts where the post author commented on his/her own post. ( should have 2 results )Andrew A - 0
-- SELECT posts.id, posts.title, users.id
-- FROM comments
-- INNER JOIN posts
-- ON (comments.posts_id = posts.id)
-- INNER JOIN users
-- ON (posts.users_id = users.id)
-- WHERE comments.users_id = users.id;

-- 15. Count how many comments have been written on posts that have been created after July 14, 2015 ( should have one result, the value of the count should be 25) Andrew A - 27
-- select comments.id, comments.posts_id, posts.created_at, posts.id from comments
-- inner join posts on comments.posts_id = posts.id
-- where posts.created_at > 'july 14, 2015';

-- 16. Find all users who comment about 'programming' ( should have 337 results)
-- SELECT users.*
-- FROM users
-- INNER JOIN comments
-- ON users.id = comments.users_id
-- WHERE comments.body LIKE '%programming%';