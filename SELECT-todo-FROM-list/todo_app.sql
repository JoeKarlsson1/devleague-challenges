\c joecarlson;

--1
DROP user IF EXISTS michael;

--2
CREATE USER michael WITH ENCRYPTED PASSWORD 'stonebreaker';

--3
DROP DATABASE IF EXISTS todo_app;

--4
CREATE DATABASE todo_app;

--5
\c todo_app;

--6
CREATE TABLE tasks (
  id serial,
  title varchar(255),
  description text,
  created_at timestamp,
  updated_at timestamp,
  completed boolean
);

--7
ALTER TABLE tasks ADD PRIMARY KEY (id);

--8
ALTER TABLE tasks DROP COLUMN IF EXISTS completed;

--9
ALTER TABLE tasks ADD COLUMN completed_at timestamp NULL DEFAULT NULL;

--10
ALTER TABLE tasks ALTER COLUMN updated_at SET NOT NULL;
ALTER TABLE tasks ALTER COLUMN updated_at SET DEFAULT now();

--11
INSERT INTO tasks
VALUES (
  DEFAULT,
  'Study SQL',
  'Complete this exercise',
  now(),
  now(),
  NULL
);

--12
INSERT INTO tasks (title, description)
VALUES (
  'Study PostgreSQL',
  'Read all the documentation'
);

--13
SELECT title
FROM tasks
WHERE completed_at = NULL;

--14
UPDATE tasks
SET completed_at = now()
WHERE title = 'Study SQL';

--15
SELECT title,
description
FROM tasks
WHERE completed_at = NULL;

--16
SELECT *
FROM tasks
ORDER BY created_at DESC;

--17
INSERT INTO tasks (title, description)
VALUES (
  'mistake 1',
  'a test entry'
);

--18
INSERT INTO tasks (title, description)
VALUES (
  'mistake 2',
  'another test entry'
);

--19
INSERT INTO tasks (title, description)
VALUES (
  'third mistake',
  'another test entry'
);

--20
SELECT FROM tasks
WHERE title LIKE '%mistake%';

--21
DELETE FROM tasks
WHERE title = 'mistake 1';

--22
SELECT title,
description
FROM tasks
WHERE title LIKE '%mistake%';

--23
DELETE FROM tasks
WHERE title LIKE '%mistake%';

--24
SELECT *
FROM tasks
ORDER BY title ASC;

/dt