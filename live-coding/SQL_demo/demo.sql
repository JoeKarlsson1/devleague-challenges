\c joecarlson;

DROP USER IF EXISTS steve;

CREATE USER steve
WITH ENCRYPTED PASSWORD 'SecretPassword';

DROP DATABASE IF EXISTS crud_demo;

CREATE DATABASE crud_demo;

\c crud_demo;

CREATE TABLE products (
  id serial,
  name text,
  price integer
);

\dt;