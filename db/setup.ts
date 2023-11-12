const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
    "./users.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the SQlite database.");
    },
);

db.serialize(() => {
    // Create the items table if it doesn't exist
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        email TEXT,
        password TEXT
      )`,
        (err) => {
            if (err) {
                return console.error(err.message);
            } else {
                console.log("Created users table");
            }
        },
    );
});

