/*
SQL (pronounced as either S-Q-L or "sequel") isn't a general-purpose programming language. You won't use it to write your backend server or your client application or a command line tool. It does one thing very well: it manages data.

In SQL, data is stored in tables made up of columns. You can think of each table like a spreadsheet. A spreadsheet of users might have an "email" column and a "name" column. Each row represents one user with its own email address and name.

The example below creates that "users" table as a SQL database. We CREATE a table, then INSERT a user into it, then SELECT the user back out. We'll go into more detail on each of these pieces, but it's nice to start by seeing it all working together.
*/

(`CREATE TABLE users (email TEXT, name TEXT)`);
(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`);
(`
users
  SELECT * FROM users
`);

-- [{email: 'amir@example.com', name: 'Amir'}]
/*
uting a SELECT always returns an array of objects. In the example above, there was one user in the database, so the array contained that one user. Queries always return arrays, even when the query returns only one row.
*/

/* 
Modify this code to insert a second user into the database. Then the SELECT will return both of them. The second user is Betty, whose email address is betty@example.com.
*/

(`CREATE TABLE users (email TEXT, name TEXT)`);
(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`);
(`
  INSERT INTO users (email, name) VALUES ('betty@example.com', 'Betty')
`);
(`SELECT * FROM users`);

-- [{email: 'amir@example.com', name: 'Amir'}, {email: 'betty@example.com', name: 'Betty'}]


(`CREATE TABLE users (name TEXT)`);
(`INSERT INTO users (name) VALUES ('Amir')`);
(`INSERT INTO users (name) VALUES ('Betty')`);
(`SELECT * FROM users`);
-- write the expected return value of the SELECT query
[{name: 'Amir'}, {name: 'Betty'}]

/* When there's nothing in the table, SELECTing will return []. Select all of the users so we can see that empty result.*/
(`CREATE TABLE users (email TEXT, name TEXT)`);
(`SELECT * FROM users`)
-- []

/* Use the "CREATE TABLE" syntax to create a table called cats with one TEXT column, name. */
(`CREATE TABLE cats (name TEXT)`);
(`INSERT INTO cats (name) VALUES ('Ms. Fluff')`);
(`SELECT * FROM cats`);

-- [{name: 'Ms. Fluff'}]

/* For consistency, all SQL statements return arrays. Statements like CREATE, INSERT that don't retrieve data will return [], an empty array of rows.

QL keywords like INSERT and SELECT ignore case

SQL keywords in UPPERCASE, like CREATE and INSERT. Our tables and columns will be lower_snake_case, like user_name. This is a common convention that makes it easier to see what's a SQL keyword and what isn't. When defining JavaScript functions and variables, we'll use lowerCamelCase, which is that community's convention.
 */

/*CREATE a cats table with a TEXT name column, then INSERT the cat "Keanu" into the table, then SELECT Keanu back out. Because you're writing multiple statements, you'll have to type out three ()s.*/
(`CREATE TABLE cats (name TEXT)`);
(`INSERT into cats (name) VALUES ('Keanu')`);
(`SELECT * FROM cats`);

-- [{name: 'Keanu'}]

/*
INTEGER is what it sounds like: whole numbers, which can be positive or negative. REAL is a real number like 5.17, 0.00002, or 11, stored as an IEEE double precision floating point number. (This is the same data type as the number type in JavaScript.)

When we query an INTEGER or REAL column, the values come back to us as JavaScript numbers. For example, in the query below, the age comes back as 3, not '3'.
*/

(`CREATE TABLE cats (name TEXT, age INTEGER)`);
(`INSERT INTO cats (name, age) VALUES ('Ms. Fluff', 3)`);
(`SELECT * FROM cats`);

-- [{name: 'Ms. Fluff', age: 3}]

(`CREATE TABLE rectangles (width REAL, height REAL)`);
(`INSERT INTO rectangles (width, height) VALUES (1.7, 2.1)`);
const queryResults = (`SELECT * FROM rectangles`);
​
/* This query examines the database's schema directly. That lets us
 * verify that the column is actually a `REAL`.
 * This wouldn't be necessary in most SQL databases, which we'll
 * discuss in a future lesson. You don't need to understand this code
 * if you're not interested! */
const columnTypes = (`PRAGMA table_info(rectangles)`).map(
  ({type}) => type.toUpperCase()
);
​
[queryResults, columnTypes];

[[{width: 1.7, height: 2.1}], ['REAL', 'REAL']]

/*
One of SQLite's most notable differences is that it doesn't enforce column types. It will happily let us insert an integer into a TEXT column, or insert a string into a REAL column.

It should insert a rectangle with a width of 'oh' and a height of 'no'. Many SQL databases won't allow this, but SQLite will.
*/

(`CREATE TABLE rectangles (width REAL, height REAL)`);
(`INSERT INTO rectangles (width, height) VALUES ('oh', 'no')`);
(`SELECT * FROM rectangles`);

-- [{width: 'oh', height: 'no'}]

/* 
SQLite: Everything inserted into a TEXT column is converted into a string. For example, inserting 3 will become '3'
*/

/*
In the example below, we mix up the name and age fields: we insert the name as the age, and the age as the name. Unfortunately, SQLite allows it. 
*/

(`CREATE TABLE cats (name TEXT, age INTEGER)`);
(`INSERT INTO cats (name, age) VALUES (7, 'Catsup')`);
(`SELECT * FROM cats`);

-- [{name: '7', age: 'Catsup'}]

/* Here's a postgresQL with the same - pulls an error 
> CREATE TABLE cats (name TEXT, age INTEGER);
CREATE TABLE
> INSERT INTO cats (name, age) VALUES (7, 'Catsup');
ERROR:  invalid input syntax for integer: "Catsup"
LINE 1: INSERT INTO cats (name, age) VALUES (7, 'Catsup');
*/

---------------------

-- Null 

-- SQL supports null: the absence of a value 
(`CREATE TABLE users (name TEXT, login_count INTEGER)`);
(`INSERT INTO users (name, login_count) VALUES (NULL, NULL)`);
(`SELECT * FROM users`);
-- Result
--[{name: null, login_count: null}]

-- A column like
login_count INTEGER NULL 
-- means that the column is nullable, which is the default so isn't required, but explicit. 
-- Null values can be disallowed by adding 
NOT NULL 
-- inserting a null value into a NOT NULL column is an errror. 

-- no error
(`CREATE TABLE users (name TEXT NOT NULL, login_count INTEGER NULL)`);
(`INSERT INTO users (name, login_count) VALUES ('Amir', NULL)`);
(`SELECT * FROM users`);
-- [{name: 'Amir', login_count: null}]

-- error
(`CREATE TABLE users (name TEXT NOT NULL, login_count INTEGER NULL)`);
(`INSERT INTO users (name, login_count) VALUES (NULL, NULL)`);
(`SELECT * FROM users`);
-- Error: NOT NULL constraint failed: users.name

-- SQL databases won't let us change a column to be NOT NULL if it already contains some NULLs.

-- it's best to make column NOT NULL unless there is a good reason to. 
-- making columns explicitly NULL helps when reading your schema later on by being intentional


-----------------------

-- Selecting Columns

-- Instead of using SELECT *, we can SELECT columns by name to be more specific

-- SELECT ALL (*)
(`CREATE TABLE users (name TEXT, login_count INTEGER)`);
(`INSERT INTO users (name, login_count) VALUES ('Amir', 1)`);
(`SELECT * FROM users`);
-- [{name: 'Amir', login_count: 1}]

-- SELECT specific
(`CREATE TABLE users (name TEXT, login_count INTEGER)`);(`INSERT INTO users (name, login_count) VALUES ('Amir', 1)`);(`SELECT name FROM users`);
-- [{name: 'Amir'}]


-- Multiple columns selected by separating column names with a comma
(`CREATE TABLE users (name TEXT, login_count INTEGER, age INTEGER)`);
(`INSERT INTO users (name, login_count, age) VALUES ('Amir', 1, 36)`);
(`SELECT age, name FROM users`);
-- [{age: 36, name: 'Amir'}]

-- Selecting a column that doesn't exist results in an error
  
  
(`CREATE TABLE users (name TEXT, login_count INTEGER)`);
(`INSERT INTO users (name, login_count) VALUES ('Amir', 1)`);


-------------------

-- Inserting Multiple Rows

-- Multi-row inserts reduces heavy load on the database

-- insert statement written as normal, but multiple rows after VALUES

(`CREATE TABLE users (name TEXT NOT NULL)`);
(`
  INSERT INTO users (name) VALUES
    ('Amir'),
    ('Betty'),
    ('Cindy')
`);
(`SELECT * FROM users`);

--[{name: 'Amir'}, {name: 'Betty'}, {name: 'Cindy'}]

(`CREATE TABLE cats (name TEXT NOT NULL)`);
(`INSERT INTO cats (name) VALUES ('Ms. Fluff'), ('Keanu')`);
(`SELECT * FROM cats`);
-- [{name: 'Ms. Fluff'}, {name: 'Keanu'}]

(`CREATE TABLE cats (name TEXT NOT NULL)`);
(`INSERT INTO cats (name) VALUES ('Ms. Fluff'), ('Keanu')`);
(`SELECT * FROM cats`);
-- [{name: 'Ms. Fluff'}, {name: 'Keanu'}]