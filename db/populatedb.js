const { Client } = require("pg");
require("dotenv").config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(20), 
    message VARCHAR(255),
    date VARCHAR(100)
    );
    
    INSERT INTO messages (name, message, date) VALUES 
  ('joe', 'hello there!', 'April 1'), 
  ('mary', 'howdy!', 'Sep 23');

    `;

async function main() {
    console.log("Seeding...")
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("Done!")
}

main();
