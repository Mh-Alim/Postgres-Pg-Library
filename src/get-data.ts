import { getClient } from "./connection";
async function getUsers() {
  const client = await getClient();
  const query = `SELECT * FROM users`;
  const res = await client.query(query);

  console.log("All Users: ");
  for (let user of res.rows) {
    console.log(
      `Id: ${user.id}, Email: ${user.email}, password: ${user.password}`
    );
  }
}

async function getUserByEmail(email: string) {
  const client = await getClient();
  const query = `SELECT * FROM users WHERE email=$1`;
  const value = [email];
  const res = await client.query(query, value);
  console.log("Get User By Email");
  console.log(
    `Id: ${res.rows[0].id}, email: ${res.rows[0].email}, pass: ${res.rows[0].password}`
  );
}

async function getTodosForUser(userId: number) {
  const client = await getClient();
  const query = `SELECT * FROM todos WHERE user_id=$1`;
  const value = [userId];
  const res = await client.query(query, value);

  console.log(`Todos of userId: ${userId}`);
  for (let todo of res.rows) {
    console.log(
      `title: ${todo.title}, description: ${todo.description}, userId: ${todo.user_id}, done: ${todo.done}`
    );
  }
}

getUsers();
getUserByEmail("alim@gmail.com");
getTodosForUser(3);

