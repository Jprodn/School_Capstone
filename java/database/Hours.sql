CREATE TABLE hours (
	landmark_id serial NOT NULL,
    weekday smallserial,
    open_hour varchar(10),
    close_hour varchar(10),
    constraint fk_landmark_id FOREIGN KEY (landmark_id) REFERENCES landmark(landmark_id)
)

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 1, '1PM', '8:30PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 2, '12PM', '7:30PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 3, '12PM', '7:30PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 4, '12PM', '7:30PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 5, '12PM', '7:30PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 6, '1PM', '8:30PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (1, 7, '1PM', '8:30PM');
-- 2

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 1, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 2, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 3, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 4, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 5, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 6, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (2, 7, '9AM', '5PM');

-- 3
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 1, '11AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 2, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 3, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 4, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 5, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 6, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (3, 7, '10AM', '5PM');

-- 4
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 1, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 2, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 3, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 4, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 5, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 6, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (4, 7, '24HR', null);

-- 5
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 1, '11AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 2, 'Closed', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 3, '11AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 4, '11AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 5, '11AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 6, '11AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (5, 7, '11AM', '5PM');

-- 6
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 1, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 2, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 3, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 4, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 5, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 6, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (6, 7, '9AM', '5PM');

-- 7
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 1, '9AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 2, '9AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 3, '9AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 4, '9AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 5, '9AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 6, '9AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (7, 7, '9AM', '4PM');

-- 8
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 1, '12:30PM', '6PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 2, 'Closed', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 3, 'Closed', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 4, '11AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 5, '11AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 6, '11AM', '6PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (8, 7, '11AM', '5PM');

-- 9
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 1, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 2, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 3, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 4, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 5, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 6, '9AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (9, 7, '9AM', '5PM');

-- 10
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 1, 'Closed', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 2, '10AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 3, '10AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 4, 'Closed', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 5, '10AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 6, '10AM', '4PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (10, 7, '10AM', '3PM');

-- 11
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 1, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 2, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 3, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 4, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 5, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 6, '24HR', null);

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (11, 7, '24HR', null);

-- 12
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 1, '10AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 2, '10AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 3, '10AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 4, '10AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 5, '10AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 6, '10AM', '9PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (12, 7, '10AM', '9PM');

-- 13
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 1, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 2, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 3, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 4, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 5, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 6, '10AM', '5PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (13, 7, '10AM', '5PM');

-- 14
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 1, '9AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 2, '9AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 3, '9AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 4, '9AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 5, '9AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 6, '9AM', '11PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (14, 7, '9AM', '11PM');

-- 15
INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 1, '9AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 2, '7AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 3, '7AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 4, '7AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 5, '7AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 6, '7AM', '10PM');

INSERT INTO hours(landmark_id, weekday, open_hour, close_hour)
VALUES (15, 7, '7AM', '10PM');

select * from hours


