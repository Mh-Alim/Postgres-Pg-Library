import { getClient } from "./connection";

async function deleteTodo(todoId: number) {
  const client = await getClient();
  const query = `DELETE FROM todos WHERE id=$1`;
  const value = [todoId];
  const res = await client.query(query, value);
  console.log(`TodoId: ${todoId} deleted successfully`);
}

deleteTodo(1);