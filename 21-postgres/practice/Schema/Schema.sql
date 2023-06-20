DROP TABLE IF EXISTS employee CASCADE;
DROP TABLE IF EXISTS city CASCADE;
DROP TABLE IF EXISTS salaried_employee;
DROP TABLE IF EXISTS hourly_employee;

CREATE TABLE employee (
      id SERIAL PRIMARY KEY,
      employee_name VARCHAR(30) NOT NULL,
      employee_id VARCHAR(10) NOT NULL,
      date_hired DATE NOT NULL,
      city_id INT REFERENCES city(city_id)
);

CREATE TABLE city (
    city_id SERIAL PRIMARY KEY,
    city VARCHAR(30)
);

CREATE TABLE salaried_employee (
    id SERIAL PRIMARY KEY,
    annual_salary FLOAT NOT NULL,
    employee_id VARCHAR(10) REFERENCES employee(employee_id)
);

CREATE TABLE hourly_employee (
    id SERIAL PRIMARY KEY,
    hourly_rate FLOAT NOT NULL,
    employee_id VARCHAR(10) REFERENCES employee(employee_id)
);

INSERT INTO employee VALUES(DEFAULT,'Shahr Qaem','shahr103','2020-11-20',4);
INSERT INTO city VALUES(4,'Sana`a');
INSERT INTO salaried_employee(DEFAULT,232580.50,'shahr103');
INSERT hourly_employee(DEFAULT,18.50);