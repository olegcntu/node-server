CREATE TABLE person
(
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(255),
    surname VARCHAR(255),
)

CREATE TABLE post
(
    id      SERIAL PRIMARY KEY,
    title   VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)

CREATE TABLE comment
(
    id      SERIAL PRIMARY KEY,
    content VARCHAR(255),
    user_id INTEGER,
    post_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id),
    FOREIGN KEY (post_id) REFERENCES post (id)
)