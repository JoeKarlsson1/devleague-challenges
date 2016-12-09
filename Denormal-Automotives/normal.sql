-- -- query old table and pull data into new table
-- INSERT INTO make_car (code, title)
-- SELECT DISTINCT make_code, make_title
-- FROM car_models;

-- -- query old table and pull data into new table
-- INSERT INTO model_car (code, title)
-- SELECT DISTINCT model_code, model_title
-- FROM car_models;

-- query old table and pull data into new table
-- INSERT INTO dealership (make_car_id, model_car_id, year)
-- SELECT make_car.id, model_car.id, car_models.year
-- FROM make_car, model_car, car_models
--   WHERE make_car.code = car_models.make_code
--     AND make_car.title = car_models.make_title
--     AND model_car.code = car_models.model_code
--     AND model_car.title = car_models.model_title;

-- inner join the primary keys of make and model to dealership
-- SELECT *
-- FROM dealership
--   INNER JOIN make_car ON (make_car_id = make_car.id)
--   INNER JOIN model_car ON (model_car_id = model_car.id);

-- create a query to get make_title values in car_models
-- SELECT DISTINCT make_car.title
-- FROM dealership
--   INNER JOIN make_car ON (make_car_id = make_car.id);

-- create a query to list model_title value based on column value
-- SELECT DISTINCT model_car.title
-- FROM dealership
--   INNER JOIN make_car ON (make_car_id = make_car.id)
--   INNER JOIN model_car ON (model_car_id = model_car.id)
--     WHERE make_car.code = 'VOLKS';

-- -- create a query to list specific columns based on column value
-- SELECT make_car.code, model_car.code, model_car.title, dealership.year
-- FROM dealership
--   INNER JOIN make_car ON (make_car_id = make_car.id)
--   INNER JOIN model_car ON (model_car_id = model_car.id)
--     WHERE make_car.code = 'LAM';

-- create a query to list ALL from table between x years
SELECT *
FROM dealership
  WHERE dealership.year >= 2010
    AND dealership.year <= 2015;

