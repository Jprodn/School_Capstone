CREATE TABLE itinerary (
	itinerary_id int NOT NULL PRIMARY KEY,
	itinerary_name varchar(50) NOT NULL,
	starting_point varchar(50) NOT NULL,
	itinerary_date date NOT NULL,
	user_id int NOT NULL 
)