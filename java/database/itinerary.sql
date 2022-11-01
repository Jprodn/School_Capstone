CREATE TABLE itinerary (
	itinerary_id serial NOT NULL PRIMARY KEY UNIQUE,
	itinerary_name varchar(50) NOT NULL,
	starting_point varchar(50) NOT NULL,
	itinerary_date date NOT NULL,
	user_id int NOT NULL,
	constraint fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
)