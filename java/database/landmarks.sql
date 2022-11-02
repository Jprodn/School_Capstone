CREATE TABLE itinerary (
	itinerary_id serial NOT NULL PRIMARY KEY UNIQUE,
    landmark_id serial NOT NULL,
	itinerary_name varchar(50) NOT NULL,
	starting_point varchar(50) NOT NULL,
	itinerary_date date NOT NULL,
	user_id int NOT NULL,
	constraint fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    constraint fk_landmark_id FOREIGN KEY (landmark_id) REFERENCES landmark(landmark_id)
)

CREATE TABLE landmark (
	landmark_id serial NOT NULL PRIMARY KEY UNIQUE,
	lanmark_name varchar(50) NOT NULL,
	category varchar(40) NOT NULL,
	description text NOT NULL
)