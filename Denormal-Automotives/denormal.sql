-- ## Denormal Cars

-- 5 create query to get list by values of column in table
-- SELECT DISTINCT make_title
-- FROM car_models

-- 6 create query to list columns from table with column values
-- SELECT DISTINCT model_title
-- FROM car_models
--   WHERE make_code = 'VOLKS'

-- 7 create query to list columns from table with columns values
-- SELECT make_code, model_code, model_title, car_models.year
-- FROM car_models
--   WHERE make_code = 'LAM'

-- 8 create query to list all fields from table with column conditional
-- SELECT *
-- FROM car_models
--   WHERE car_models.year >= 2010
--     AND car_models.year <= 2015

