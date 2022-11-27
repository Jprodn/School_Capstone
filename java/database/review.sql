CREATE TABLE IF NOT EXISTS review (
	review_id serial NOT NULL,
	landmark_id int NOT NULL,
	title varchar,
	name varchar,
	review varchar
)