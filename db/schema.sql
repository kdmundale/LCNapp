DROP TABLE IF EXISTS has_had;
DROP TABLE IF EXISTS shakes;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;
DROP TABLE if EXISTS pricing;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles(
  id SERIAL PRIMARY KEY,
  role_name varchar(10) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email text UNIQUE NOT NULL,
    phone varchar(15),
    password varchar NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    dob date,
    register_date DATE DEFAULT CURRENT_DATE,
    last_login date,
    total_login bigint,
    contact boolean DEFAULT True,
    user_role int
);

CREATE TABLE shakes (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  shake_group int NOT NULL,
  CHECK (shake_group BETWEEN 1 AND 20),
  description text,
  suggestions text,
  available boolean NOT NULL
);

CREATE TABLE has_had (
  id SERIAL PRIMARY KEY,
  user_id bigint NOT NULL,
  shake_id bigint NOT NULL,
  comment varchar(50),
  rating int,
  this_shake int,
  CHECK (rating BETWEEN 1 AND 5)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  cont_id bigint NOT NULL,
  title varchar(250) NOT NULL,
  body varchar(250)
);

CREATE TABLE pricing (
  id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  description varchar(100),
  price money NOT NULL
);

ALTER TABLE users
  ADD CONSTRAINT role_user FOREIGN KEY (user_role)
  REFERENCES roles(id);

ALTER TABLE has_had
  ADD CONSTRAINT had_shake FOREIGN KEY (shake_id)
    REFERENCES shakes(id);

ALTER TABLE has_had
  ADD CONSTRAINT had_user FOREIGN KEY (user_id)
    REFERENCES users(id);
