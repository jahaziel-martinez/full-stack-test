import sqlite3 from "sqlite3";

export default class DatabaseUtils {
  private static db: sqlite3.Database;

  private static connect(): void {
    DatabaseUtils.db = new sqlite3.Database("src/core/db/full-stack-test.db", (error) => {
      if (error) {
        console.error("Error connecting to full-stack-test DB.", error);
        throw error;
      }
      console.log("Connected to the full-stack-test SQlite database.");
    });
  }

  private static close(): void {
    DatabaseUtils.db.close((error) => {
      if (error) {
        console.error("Error closing full-stack-test DB.", error);
        throw error;
      }
      console.log("Database connection closed.");
    });
  }

  public static executeQuery<T>(sql: string): Promise<Array<T>> {
    return new Promise((resolve, reject) => {
      // Open DB connection.
      try {
        DatabaseUtils.connect();
      } catch (error) {
        reject(error);
      }
      // Execute query.
      try {
        DatabaseUtils.db.all(sql, (error, rows) => {
          if (error) {
            throw error;
          }
          resolve(rows);
        });
      } catch (error) {
        reject(error);
      } finally {
        // Close DB connection.
        DatabaseUtils.close();
      }
    });
  }

  public static executeUpdate(sql: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Open DB connection.
      try {
        DatabaseUtils.connect();
      } catch (error) {
        reject(error);
      }
      // Execute update.
      try {
        DatabaseUtils.db.run(sql, (error) => {
          if (error) {
            throw error;
          }
          resolve(true);
        });
      } catch (error) {
        reject(error);
      } finally {
        // Close DB connection.
        DatabaseUtils.close();
      }
    });
  }
}
