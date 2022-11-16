CREATE TABLE hours (
	landmark_id serial NOT NULL,
    weekday smallserial,
    open_hour varchar(10),
    close_hour varchar(10),
    constraint fk_landmark_id FOREIGN KEY (landmark_id) REFERENCES landmark(landmark_id)
)

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 1, '1PM', '8:30PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 2, '12PM', '7:30PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 3, '12PM', '7:30PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 4, '12PM', '7:30PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 5, '12PM', '7:30PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 6, '1PM', '8:30PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 7, '1PM', '8:30PM')
-- 2

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 1, '9AM', '5PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 2, '9AM', '5PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 3, '9AM', '5PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 4, '9AM', '5PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 5, '9AM', '5PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 6, '9AM', '5PM')

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 7, '9AM', '5PM')

select * from landmark


