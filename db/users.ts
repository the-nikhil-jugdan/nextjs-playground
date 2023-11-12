import getDBConnection from "./connect";

type User = {
  email: String;
  password?: String;
};

export async function getAllUsers() {
  const db = await getDBConnection();
  return db.all("SELECT id, email FROM users");
}

export async function verifyUserUnique(user: User) {
  const db = await getDBConnection();
  const userObj = await db.get("SELECT id, email FROM users WHERE email = ?", [
    user.email,
  ]);
  return Promise.resolve(!userObj);
}

export async function createUser(user: User) {
  const db = await getDBConnection();
  await db.run("INSERT INTO users(email, password) VALUES (?,?)", [
    user.email,
    user.password,
  ]);
}

export async function authenticateUser(user: User) {
  const db = await getDBConnection();
  return await db.get(
    "SELECT id, email FROM users WHERE email = ? AND password = ?",
    [user.email, user.password],
  );
}
