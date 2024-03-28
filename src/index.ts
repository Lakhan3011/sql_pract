// write a function to create a user table in ypur database

import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:lakhan123@localhost/postgres",
});

// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE users(
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(55) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }

async function insertData() {
  await client.connect();
  const res = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('lakhan', 'lakhan@gmail.com', '123345');
    `);
  console.log(res);
}
// createUsersTable();
insertData();
