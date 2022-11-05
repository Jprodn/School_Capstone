

CREATE TABLE itinerary_landmarks (
	itinerary_id serial NOT NULL,
	landmark_id serial NOT NULL,
    constraint PK_itinerary_landmarks PRIMARY KEY(itinerary_id, landmark_id),
	constraint fk_itinerary_id FOREIGN KEY (itinerary_id) REFERENCES itinerary(itinerary_id),
    constraint fk_landmark_id FOREIGN KEY (landmark_id) REFERENCES landmark(landmark_id)
)

insert into landmark
values(DEFAULT, 'Port City Park', 'Park', 'Park gathering for the public')

insert into itinerary
values(DEFAULT, 'My iti', 'Start', '2022-11-05', 1)

insert into itinerary_landmarks
values(1, 1)

