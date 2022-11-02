CREATE TABLE landmark (
	landmark_id serial NOT NULL PRIMARY KEY UNIQUE,
	landmark_name varchar(50) NOT NULL,
	category varchar(40) NOT NULL,
	description text NOT NULL
)

ALTER TABLE itinerary (
    ADD landmark_id serial NOT NULL,
    ADD CONSTRAINT fk_landmark_id
        FOREIGN KEY (landmark_id)
        REFERENCES landmark(landmark_id)
)