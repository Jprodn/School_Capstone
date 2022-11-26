CREATE TABLE IF NOT EXISTS likes (
    like_id serial NOT NULL,
    user_id serial NOT NULL,
	landmark_id serial NOT NULL,
	like_type int,
	constraint pk_like PRIMARY KEY(like_id),
    constraint fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id),
	constraint fk_landmark_id FOREIGN KEY(landmark_id) REFERENCES landmark(landmark_id)
)

INSERT INTO likes(like_id, user_id, landmark_id, like_type)
VALUES(DEFAULT, 3, 1, 2)

SELECT * FROM Likes
