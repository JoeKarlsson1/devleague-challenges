DROP TABLE comments;
DROP TABLE posts;
DROP TABLE users;

-- create users table
CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  username varchar(90),
  first_name varchar(90),
  last_name varchar(90),
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

-- create posts table
CREATE TABLE IF NOT EXISTS posts (
  id serial PRIMARY KEY,
  title varchar(180),
  url varchar(510),
  content text,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now(),
  users_id INTEGER REFERENCES users(id) MATCH SIMPLE NOT NULL
);

-- create comments table
CREATE TABLE IF NOT EXISTS comments (
  id serial PRIMARY KEY,
  body varchar(510),
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now(),
  users_id INTEGER REFERENCES users(id) MATCH SIMPLE NOT NULL,
  posts_id INTEGER REFERENCES posts(id) MATCH SIMPLE NOT NULL
);

\i scripts/blog_data.sql;