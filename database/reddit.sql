CREATE DATABASE reddit 
WITH
    OWNER  = 'postgres'
    TEMPLATE = template0
    ENCODING = 'UTF8'
    LC_COLLATE = 'en-US'
    LC_CTYPE = 'en-US'
    CONNECTION LIMIT = 10;

CREATE USER reddit WITH PASSWORD '123456';
GRANT ALL PRIVILEGES ON DATABASE reddit TO reddit;

CREATE TABLE "user" (   
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR (60) UNIQUE NOT NULL,
    first_name VARCHAR (60), 
    last_name VARCHAR (60), 
    birth_date DATE,
    password VARCHAR (60) NOT NULL,
    email VARCHAR (150) UNIQUE NOT NULL,
    avatar_sm VARCHAR (250),
    avatar_md VARCHAR (250),
    avatar_lg VARCHAR (250),
    created_on TIMESTAMP NOT NULL DEFAULT NOW()::DATE,
    updated_on TIMESTAMP DEFAULT NOW()::DATE,
    last_login_ip INET NOT NULL
);

INSERT INTO "user" (username, first_name, last_name, birth_date, password, email, avatar_sm, avatar_md, avatar_lg, last_login_ip)
VALUES ('taro_naza', 'taro', 'naza', '1982/05/22', '1245236', 'taro@naza.com', 'url', 'url', 'url', '123.120.25.1'),
('jeffy1', 'jeff', 'bezos', '1954/02/01', 'amazonprime', 'jeffy1@amazon.com', 'url', 'url', 'url', '168.185.0.3'),
('johnpuppy', 'john', 'wick', '1975/10/08', 'puppy', 'john@wick.com', 'url', 'url', 'url', '0.0.0.0'),
('onepunchman', 'saitma', 'punchman', '1984/02/18', 'punchman', 'one@punch.com', 'url', 'url', 'url', '255.255.255.255');