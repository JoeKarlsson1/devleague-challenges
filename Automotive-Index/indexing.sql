-- ## Setting up

-- 1. Create a new postgres user named `indexed_cars_user`
-- CREATE USER indexed_cars_user;

-- 2. Create a new database named `indexed_cars` owned by `indexed_cars_user`
-- CREATE DATABASE indexed_cars WITH OWNER indexed_cars_user;

-- 3. Run the provided `scripts/car_models.sql` script on the `indexed_cars` database
-- \c indexed_cars \i scripts/car_models.sql

-- 4. Run the provided `scripts/car_model_data.sql` script on the `indexed_cars` database **10 times**
--    _there should be **223380** rows in `car_models`_
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql
-- \i scripts/car_model_data.sql

-- ## Timing Select Statements

-- 1. Run a query to get a list of all `make_title` values from the `car_models` table where the `make_code` is `'LAM'`, without any duplicate rows, and note the time somewhere. (should have 1 result)
-- TIME : 58.824 ms
-- SELECT DISTINCT make_title
-- FROM car_models
--   WHERE make_code = 'LAM'

-- 2. Run a query to list all `model_title` values where the `make_code` is `'NISSAN'`, and the `model_code` is `'GT-R'` without any duplicate rows, and note the time somewhere. (should have 1 result)
-- TIME: 90.218 ms
-- SELECT DISTINCT model_title
-- FROM car_models
--   WHERE make_code = 'NISSAN' AND model_code = 'GT-R'


-- 3. Run a query to list all `make_code`, `model_code`, `model_title`, and year from `car_models` where the `make_code` is `'LAM'`, and note the time somewhere. (should have 1360 rows)
-- TIME: 80.970 ms
-- SELECT make_code, model_code, model_title, car_models.year
-- FROM car_models
--   WHERE make_code = 'LAM'


-- 4. Run a query to list all fields from all `car_models` in years between `2010` and `2015`, and note the time somewhere (should have 78840 rows)
-- TIME: 98.498 ms
-- SELECT *
-- FROM car_models
--   WHERE car_models.year >= 2010 AND car_models.year <= 2015

-- 5. Run a query to list all fields from all `car_models` in the year of `2010`, and note the time somewhere (should have 13140 rows)
-- TIME: 44.966 ms
-- SELECT *
-- FROM car_models
--  WHERE car_models.year = 2010

-- ## Indexing

-- create index on columns that would improve query performance
-- CREATE INDEX title_idx
--   ON car_models (make_title)

-- 1. Create a query to get a list of all `make_title` values from the `car_models` table where the `make_code` is `'LAM'`, without any duplicate rows, and note the time somewhere. (should have 1 result)
-- TIME: 61.437 ms
-- SELECT DISTINCT make_title
-- FROM car_models
--   WHERE make_code = 'LAM'


-- 2. Create a query to list all `model_title` values where the `make_code` is `'NISSAN'`, and the `model_code` is `'GT-R'` without any duplicate rows, and note the time somewhere. (should have 1 result)
-- TIME: 64.472 ms
-- SELECT DISTINCT model_title
-- FROM car_models
--   WHERE make_code = 'NISSAN'
--     AND model_code = 'GT-R'

-- 3. Create a query to list all `make_code`, `model_code`, `model_title`, and year from `car_models` where the `make_code` is `'LAM'`, and note the time somewhere. (should have 1360 rows)
-- TIME: 36.584 ms
-- SELECT make_code, model_code, model_title, car_models.year
-- FROM car_models
--   WHERE make_code = 'LAM'

-- 4. Create a query to list all fields from all `car_models` in years between `2010` and `2015`, and note the time somewhere (should have 78840 rows)
-- TIME: 116.839 ms
-- SELECT *
-- FROM car_models
--   WHERE car_models.year >= 2010
--     AND car_models.year <= 2015


-- 5. Create a query to list all fields from all `car_models` in the year of `2010`, and note the time somewhere (should have 13140 rows)
-- TIME: 67.626 ms
-- SELECT *
-- FROM car_models
--   WHERE car_models.year = 2010

-- ## Indexing on table create

-- 1. Add your recorded indexing statements to the `scripts/car_models.sql`

-- 2. Delete the `car_models` table
DROP TABLE car_models;

-- 3. Run the provided `scripts/car_models.sql` script on the `indexed_cars` database


-- 4. Run the provided `scripts/car_model_data.sql` script on the `indexed_cars` database **10 times**
--    _there should be **223380** rows in `car_models`_
