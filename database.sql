
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



create table journal_entries (
	id serial primary key,
	date DATE,
	user_id int references "user",
	daily_affirmation varchar (255),
	category varchar (50),
	content text
);


insert into journal_entries (date, user_id, daily_affirmation, category, content)
values ('10/15/2023', 1, 'Today, I chose a positive attitude when my internet wouldn’t work.', 'attitude','hfhfghghgfh');



CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);