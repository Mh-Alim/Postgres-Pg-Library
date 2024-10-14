import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://ltlyqbie:zOs2zdhorBZcre3Mv8qmnOMCXSd7ZhNZ@lucky.db.elephantsql.com/ltlyqbie"
  );
  await client.connect();
  return client;
}
