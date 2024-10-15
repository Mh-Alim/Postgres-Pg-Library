import { getClient } from "../connection";
// Get all todos for a given user
// This should not return a row if no todos exist for the user.

async function getUserAndTodosWithJoin(userId: number) {
  const client = await getClient();

  const joinQuery = `SELECT users.*, todos.title, todos.description
                        FROM users INNER JOIN todos
                        ON users.id = todos.user_id
                        WHERE users.id = $1`;

  const value = [userId];

  const res = await client.query(joinQuery, value);

  console.log("res: ", res.rows);
}

getUserAndTodosWithJoin(1);
