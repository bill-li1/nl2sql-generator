import { useEffect, useState } from "react"
import initSqlJs, { Database } from "sql.js"

export function useDatabase() {
  const [db, setDb] = useState<Database | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let database: Database | null = null

    async function initDb() {
      try {
        setIsLoading(true)
        // Initialize SQL.js
        const SQL = await initSqlJs({
          locateFile: (file) =>
            `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/${file}`,
        })

        // Load the database file
        const response = await fetch("/bike_store.db")
        const arrayBuffer = await response.arrayBuffer()
        const uint8Array = new Uint8Array(arrayBuffer)

        // Create database from the file
        database = new SQL.Database(uint8Array)
        setDb(database)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to initialize database"
        )
      } finally {
        setIsLoading(false)
      }
    }

    initDb()

    // Add cleanup
    return () => {
      if (database) {
        database.close()
      }
    }
  }, [])

  return { db, error, isLoading }
}
