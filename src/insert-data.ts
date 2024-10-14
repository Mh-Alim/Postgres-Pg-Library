import { getClient } from "./connection";

async function createRows() {
  const client = await getClient();

  const query = `INSERT INTO users(email, password) VALUES ($1, $2) RETURNING *`;
  const values = ["basic@gmail.com", "123"];

  const res = await client.query(query, values);
  console.log("res", res.rows);
  const todoQuery = `INSERT INTO todos(title, description, user_id, done) VALUES ($1, $2, $3, $4)`;
  const todoValues = [
    "todo basic title",
    "todo basic description",
    res.rows[0].id,
    false,
  ];
  await client.query(todoQuery, todoValues);

  console.log("Data is inserted successfully");
}

createRows();
