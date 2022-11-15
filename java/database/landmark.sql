
CREATE TABLE IF NOT EXISTS landmark
(
    landmark_id serial NOT NULL,
    landmark_name character varying(50),
    address character varying(50),
    city character varying(30)NOT NULL,
    state character varying(2) NOT NULL,
    postal_code character varying(5),
    category character varying(40),
    description text,
    image_url text,
    map_url text,
    CONSTRAINT landmarks_pkey PRIMARY KEY (landmark_id)
)
