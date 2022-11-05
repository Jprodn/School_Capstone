

CREATE TABLE itinerary_landmarks (
	itinerary_id serial NOT NULL,
	landmark_id serial NOT NULL,
    constraint PK_itinerary_landmarks PRIMARY KEY(itinerary_id, landmark_id),
	constraint fk_itinerary_id FOREIGN KEY (itinerary_id) REFERENCES itinerary(itinerary_id),
    constraint fk_landmark_id FOREIGN KEY (landmark_id) REFERENCES landmark(landmark_id)
)

