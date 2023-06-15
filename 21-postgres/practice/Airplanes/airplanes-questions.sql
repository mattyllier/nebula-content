-- 1. What are the names and locations of all airports in Portugal? (name, city)

airplanes=# SELECT name,city FROM airport WHERE country='Portugal';
     name      |   city
---------------+-----------
 Sa Carneiro   | Porto
 Portela       | Lisboa
 Faro          | Faro
 Madeira       | Funchal
 Ponta Delgada | S. Miguel
(5 rows)

-- 2. What are the names of all planes of the DC-10 version? (name)

airplanes=# SELECT name FROM plane JOIN model ON plane.planecod=model.modelcod WHERE model.version='DC-10';
    name
-------------
 Scott Adams
(1 row)

-- 3. How many engines does each plane have? (plane_name, number)

airplanes=# SELECT plane.name, model.engines FROM plane JOIN model ON plane.planecod=model.modelcod;

-- 4. How many flights with a 2 or 3 hour duration are there in the database? (number)

airplanes=# SELECT count(flightcod) FROM flight WHERE duration BETWEEN 2 AND 3;

-- 5. What plane models have a version starting with A3? (modelcod, version)SELECT * FROM model;

airplanes=# SELECT make, version FROM model WHERE version LIKE 'A3%';

-- 6. What is the code and duration of all flights. Sort the answer from longest to shortest flight. If two flights have the same duration, sort them by flight code from smallest to largest (flightcod, duration).

airplanes=# SELECT flightcod, duration FROM flight ORDER BY duration DESC, flightcod ASC;

-- 7. Knowing that there are no direct flights from airport 1 (Porto) to airport 12 (London), which 2 legged flights can we use to travel between those airports? (flightcod1, flightcod2, intermediate_airport_code) Note: Use the airports codes (1 and 12) instead of the airport names in your query.

airplanes=# SELECT airport.name FROM airport JOIN flight ON airport.airportcod=flight.fromairportcod WHERE toairportcod='12';

-- 8. How many airports are there in each country? Sort the answer in ascending order. (country, number)?

airplanes=# SELECT country, count(airportcod) FROM airport GROUP BY country ORDER BY count(airportcod) ASC;

-- 9. What is the flight code, origin city and destination city of all flights in the database? Sort the answer by flight code. (flightcod, origin, destination)

airplanes=# SELECT flightcod, fromairportcod, toairportcod FROM flight ORDER BY flightcod ASC;

--  10. What are the flight codes of all flights from Porto to Lisboa. (flightcod)? Note: Your query should use the city names, not the airport codes.

airplanes=# SELECT airportcod FROM airport WHERE city IN ('Porto','Lisboa');
airplanes=# SELECT flightcod FROM flight WHERE fromairportcod='1' AND toairportcod='3';

-- 11. How many airports are there in each country? (country, number); show only countries with more than 2 airports.

airplanes=# SELECT country, count(name) FROM airport GROUP BY country HAVING count(name)>2;

-- 12. What country, or countries, has more airports and how many? (country, number)

airplanes=# SELECT country, count(airportcod) FROM airport GROUP BY country ORDER BY count(airportcod) DESC LIMIT 1;

-- 13. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: You do not need to show models that do not have planes.

airplanes=# SELECT count(planecod) FROM plane GROUP BY modelcod ORDER BY count(planecod) DESC;