CREATE TABLE IF NOT EXISTS rating (
	landmark_id serial NOT NULL,
	likes int,
	dislikes int,
	constraint PK_rating PRIMARY KEY(landmark_id),
	constraint fk_landmark_id FOREIGN KEY(landmark_id) REFERENCES landmark(landmark_id)
)
