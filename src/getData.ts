import { Client } from "pg";

async function getUser(email: string) {
  const client = new Client({
    connectionString: "postgresql://postgres:lakhan123@localhost/postgres",
  });

  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("User not found");
      return null;
    }
  } catch (err) {
    console.log("Error during fetch user:", err);
    throw err;
  } finally {
    await client.end();
  }
}

getUser("lakhan@gmail.com").catch(console.error);
