/* CREATE DATABASE authtodo; */

CREATE TABLE pern_jwt_tutorial_users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE pern_jwt_tutorial_todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES pern_jwt_tutorial_users(user_id)
);


INSERT INTO pern_jwt_tutorial_users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'henry1');

INSERT INTO pern_jwt_tutorial_users (user_name, user_email, user_password) VALUES ('ajinkya', 'abc@pqr.com', 'ajinkya1');
