//import { useDatabase } from "./hooks/useDatabase"
//import { useEffect } from "react"
import Main from "@/components/Main"

import { Separator } from "@/components/ui/separator"
import Sidebar from "@/components/sidebar/Sidebar"

// Mock function to simulate SQL execution
const executeSQL = async (query: string) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // For demonstration, return mock data for SELECT queries
  if (query.toLowerCase().includes("select")) {
    return {
      success: true,
      columns: ["id", "name", "department", "salary", "hire_date"],
      rows: [
        [1, "John Doe", "Engineering", "$85,000", "2023-01-15"],
        [2, "Jane Smith", "Marketing", "$75,000", "2023-02-20"],
        [3, "Bob Johnson", "Sales", "$90,000", "2023-03-10"],
        [4, "Alice Brown", "Engineering", "$82,000", "2023-04-05"],
        [5, "Charlie Wilson", "Marketing", "$78,000", "2023-05-12"],
      ],
    }
  }

  // Simulate successful non-SELECT query
  if (
    query.toLowerCase().includes("create") ||
    query.toLowerCase().includes("insert")
  ) {
    return {
      success: true,
      message: "Query executed successfully",
    }
  }

  // Simulate error
  throw new Error("Invalid SQL query")
}

export default function Home() {
  const handleExecute = async (
    setIsExecuting: (isExecuting: boolean) => void
  ) => {
    //setIsExecuting(true)
    //setError("")
    //setResults(null)
    //
    //try {
    //  const result = await executeSQL(code)
    //  console.log(result)
    //  setResults(result)
    //} catch (err) {
    //  setError(err instanceof Error ? err.message : "An error occurred")
    //} finally {
    //  setIsExecuting(false)
    //}
  }

  //const { db, error } = useDatabase()
  //
  //useEffect(() => {
  //  if (error) {
  //    console.error("Database error:", error)
  //  }
  //  if (db) {
  //    console.log("Database initialized successfully")
  //
  //    // Test query
  //    try {
  //      const result = db.exec(`
  //        SELECT
  //          u.name as author,
  //          p.title,
  //          p.content
  //        FROM users u
  //        JOIN posts p ON u.id = p.user_id
  //        ORDER BY u.name, p.title
  //      `)
  //      console.log("Query result:", result)
  //    } catch (err) {
  //      console.error("Query error:", err)
  //    }
  //  }
  //}, [db, error])

  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--font-geist-sans)] p-4 h-[100vh]">
      <main className="flex flex-row gap-4 items-start">
        <Main />
        <Separator orientation="vertical" />
        <Sidebar />
      </main>
    </div>
  )
}
