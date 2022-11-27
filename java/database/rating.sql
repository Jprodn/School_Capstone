CREATE TABLE IF NOT EXISTS rating (
	landmark_id serial NOT NULL,
	likes int,
	dislikes int,
	constraint PK_rating PRIMARY KEY(landmark_id),
	constraint fk_landmark_id FOREIGN KEY(landmark_id) REFERENCES landmark(landmark_id)
)

insert into rating (landmark_id, likes, dislikes) values ('1','0','0');
insert into rating (landmark_id, likes, dislikes) values ('2','0','0');
insert into rating (landmark_id, likes, dislikes) values ('3','0','0');
insert into rating (landmark_id, likes, dislikes) values ('4','0','0');
insert into rating (landmark_id, likes, dislikes) values ('5','0','0');
insert into rating (landmark_id, likes, dislikes) values ('6','0','0');
insert into rating (landmark_id, likes, dislikes) values ('7','0','0');
insert into rating (landmark_id, likes, dislikes) values ('8','0','0');
insert into rating (landmark_id, likes, dislikes) values ('9','0','0');
insert into rating (landmark_id, likes, dislikes) values ('10','0','0');
insert into rating (landmark_id, likes, dislikes) values ('11','0','0');
insert into rating (landmark_id, likes, dislikes) values ('12','0','0');
insert into rating (landmark_id, likes, dislikes) values ('13','0','0');
insert into rating (landmark_id, likes, dislikes) values ('14','0','0');
insert into rating (landmark_id, likes, dislikes) values ('15','0','0');