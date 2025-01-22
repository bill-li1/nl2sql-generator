import initSqlJs, { Database } from "sql.js";
import { useEffect, useState } from "react";

export function useDatabase() {
  const [db, setDb] = useState<Database | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let database: Database | null = null;

    async function initializeDb() {
      if (typeof window === "undefined") return; // Skip on server-side

      try {
        const SQL = await initSqlJs({
          // You need to specify the location of the .wasm file
          locateFile: (file) =>
            `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/${file}`,
        });

        // Create a new database
        database = new SQL.Database();

        // Create test tables and insert sample data
        try {
          // Create users table
          database.run(`
            CREATE TABLE users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT UNIQUE,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
          `);

          // Insert sample users
          database.run(`
            INSERT INTO users (name, email) VALUES 
            ('John Doe', 'john@example.com'),
            ('Jane Smith', 'jane@example.com'),
            ('Bob Wilson', 'bob@example.com')
          `);

          // Create posts table
          database.run(`
            CREATE TABLE posts (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER,
              title TEXT NOT NULL,
              content TEXT,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
              FOREIGN KEY (user_id) REFERENCES users(id)
            )
          `);

          // Insert sample posts
          database.run(`
            INSERT INTO posts (user_id, title, content) VALUES 
            (1, 'First Post', 'This is John''s first post'),
            (1, 'Second Post', 'John''s thoughts continue...'),
            (2, 'Hello World', 'Jane''s first blog post'),
            (3, 'Tech Review', 'Bob''s review of the latest gadgets')
          `);

          setDb(database);
        } catch (execError) {
          console.error("Database execution error:", execError);
          database.close();
          throw execError;
        }
      } catch (err) {
        console.error("Database initialization error:", err);
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to initialize database")
        );
      }
    }

    initializeDb();

    // Cleanup function
    return () => {
      if (database) {
        database.close();
      }
    };
  }, []);

  return { db, error };
}
