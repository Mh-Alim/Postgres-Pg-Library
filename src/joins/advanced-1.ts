import { getClient } from "../connection";

// Get all the todos for a given user
// This needs to ensure that every user comes atleast once

async function getSingleUserAndTodos(userId: number) {
  const client = await getClient();
  const joinQuery = `SELECT users.*, todos.title, todos.description 
                        FROM users LEFT JOIN todos 
                        ON users.id = todos.user_id 
                        WHERE users.id = $1 `;

  const value = [userId];
  const res = await client.query(joinQuery, value);

  console.log(`User Id: ${userId} Details and all todos list: `, res.rows[0]);
}

getSingleUserAndTodos(1);
