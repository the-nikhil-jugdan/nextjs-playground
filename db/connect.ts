import sqlite3 from "sqlite3";
import {open, Database} from "sqlite";


export default async function getDBConnection() {
    return open({
        filename: "./users.db", // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
}

