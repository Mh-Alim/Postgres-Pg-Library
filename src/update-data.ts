import { getClient } from "./connection";

async function updateTodo(todoId: number) {
    const client = await getClient();
    const query = `UPDATE todos SET title=$1 WHERE id=$2 RETURNING *`;
    const value = ["updated todo title", todoId];

    const res = await client.query(query, value);
    console.log(`id: ${res.rows[0].id}, title: ${res.rows[0].title}, description: ${res.rows[0].description}`);
}


updateTodo(1);