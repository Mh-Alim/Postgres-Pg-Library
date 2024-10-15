import { getClient } from "../connection";

async function getUserDetailsAndTodos(userId: number) {
  const client = await getClient();

  const userDetailsQuery = `SELECT * FROM users WHERE id=$1`;
  const values = [userId];
  const userRes = await client.query(userDetailsQuery, values);

  const todosQuery = `SELECT * FROM todos WHERE user_id=$1`;
  const todoValues = [userId];

  const todoRes = await client.query(todosQuery, todoValues);
  const userDetails = userRes.rows[0];
  const todos = todoRes.rows[0];

  console.log("User Details: ", userDetails);
  console.log("Todos: ", todos);
}


getUserDetailsAndTodos(1);