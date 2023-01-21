/*
SQL (pronounced as either S-Q-L or "sequel") isn't a general-purpose programming language. You won't use it to write your backend server or your client application or a command line tool. It does one thing very well: it manages data.

In SQL, data is stored in tables made up of columns. You can think of each table like a spreadsheet. A spreadsheet of users might have an "email" column and a "name" column. Each row represents one user with its own email address and name.

The example below creates that "users" table as a SQL database. We CREATE a table, then INSERT a user into it, then SELECT the user back out. We'll go into more detail on each of these pieces, but it's nice to start by seeing it all working together.
*/

exec(`CREATE TABLE users (email TEXT, name TEXT)`);
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`);
exec(`
users
  SELECT * FROM users
`);
/*
[{email: 'amir@example.com', name: 'Amir'}]

Executing a SELECT always returns an array of objects. In the example above, there was one user in the database, so the array contained that one user. Queries always return arrays, even when the query returns only one row.
*/

/* Modify this code to insert a second user into the database. Then the SELECT will return both of them. The second user is Betty, whose email address is betty@example.com.
*/

exec(`CREATE TABLE users (email TEXT, name TEXT)`);
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`);
exec(`
  INSERT INTO users (email, name) VALUES ('betty@example.com', 'Betty')
`);
exec(`SELECT * FROM users`);

/*
[{email: 'amir@example.com', name: 'Amir'}, {email: 'betty@example.com', name: 'Betty'}]
*/

exec(`CREATE TABLE users (name TEXT)`);
exec(`INSERT INTO users (name) VALUES ('Amir')`);
exec(`INSERT INTO users (name) VALUES ('Betty')`);
exec(`SELECT * FROM users`);
/* write the expected return value of the SELECT query */
[{name: 'Amir'}, {name: 'Betty'}]

/* When there's nothing in the table, SELECTing will return []. Select all of the users so we can see that empty result.*/
exec(`CREATE TABLE users (email TEXT, name TEXT)`);
exec(`SELECT * FROM users`)
/* returns */
[]

/* Use the "CREATE TABLE" syntax to create a table called cats with one TEXT column, name. */
exec(`CREATE TABLE cats (name TEXT)`);
exec(`INSERT INTO cats (name) VALUES ('Ms. Fluff')`);
exec(`SELECT * FROM cats`);
/*returns*/
[{name: 'Ms. Fluff'}]

/* For consistency, all SQL statements return arrays. Statements like CREATE, INSERT that don't retrieve data will return [], an empty array of rows.

QL keywords like INSERT and SELECT ignore case

SQL keywords in UPPERCASE, like CREATE and INSERT. Our tables and columns will be lower_snake_case, like user_name. This is a common convention that makes it easier to see what's a SQL keyword and what isn't. When defining JavaScript functions and variables, we'll use lowerCamelCase, which is that community's convention.
 */

 /*CREATE a cats table with a TEXT name column, then INSERT the cat "Keanu" into the table, then SELECT Keanu back out. Because you're writing multiple statements, you'll have to type out three exec()s.*/

exec(`CREATE TABLE cats (name TEXT)`);
exec(`INSERT into cats (name) VALUES ('Keanu')`);
exec(`SELECT * FROM cats`);

/* returns */
[{name: 'Keanu'}]