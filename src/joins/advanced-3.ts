import { getClient } from "../connection";

// Get all todos and their user details

async function getAllTodosWithUserDetails() {
  const client = await getClient();
  const query = `SELECT users.*, todos.title, todos.description
                    FROM todos JOIN users
                    ON users.id = todos.user_id`;
  const res = await client.query(query);

  console.log("All Todos with User Details: ", res.rows);
}

getAllTodosWithUserDetails();
