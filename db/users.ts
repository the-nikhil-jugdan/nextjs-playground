import getDBConnection from './connect';


export async function getAllUsers() {
    const db = await getDBConnection();
    return db.all('SELECT * FROM users');
}
