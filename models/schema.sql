-- DROP DATABASE IF EXISTS beers_db;
-- CREATE DATABASE beers_db;
-- USE beers_db;


-- CREATE TABLE users (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	user VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE beerlist (
--     id INT NOT NULL AUTO_INCREMENT,
--     beer_name VARCHAR(255) NOT NULL,
--     brewery VARCHAR(255) NOT NULL,
--     abv INT(10) NOT NULL,
--     user_id INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- SELECT * FROM beerlist;

-- -- we have to code a way to look up the user ID based on their username
-- -- (this can be done in sequelize) and then grab all beers attached to that user id