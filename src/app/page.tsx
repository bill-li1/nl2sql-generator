import Main from "@/components/Main"

import { Separator } from "@/components/ui/separator"
import Sidebar from "@/components/sidebar/Sidebar"

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--font-geist-sans)] p-4 h-[100vh]">
      <main className="flex flex-row gap-4 items-start">
        <div className="p-4 space-y-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Online SQL Interpreter
          </h2>
          <p className="text-muted-foreground leading-5">
            Run SQL queries on a sample dataset instantly and securely. All
            queries are processed directly in your browser—no server required.
          </p>
          <Main />
        </div>
        <Separator orientation="vertical" />
        <Sidebar />
      </main>
    </div>
  )
}

// const handleExecute = async (
//   setIsExecuting: (isExecuting: boolean) => void
// ) => {
//   setIsExecuting(true)
//   setError("")
//   setResults(null)
//
//   try {
//     const result = await executeSQL(code)
//     console.log(result)
//     setResults(result)
//   } catch (err) {
//     setError(err instanceof Error ? err.message : "An error occurred")
//   } finally {
//     setIsExecuting(false)
//   }
// }

// Mock function to simulate SQL execution
// const executeSQL = async (query: string) => {
//   // Simulate API call delay
//   await new Promise((resolve) => setTimeout(resolve, 500))

//   // For demonstration, return mock data for SELECT queries
//   if (query.toLowerCase().includes("select")) {
//     return {
//       success: true,
//       columns: ["id", "name", "department", "salary", "hire_date"],
//       rows: [
//         [1, "John Doe", "Engineering", "$85,000", "2023-01-15"],
//         [2, "Jane Smith", "Marketing", "$75,000", "2023-02-20"],
//         [3, "Bob Johnson", "Sales", "$90,000", "2023-03-10"],
//         [4, "Alice Brown", "Engineering", "$82,000", "2023-04-05"],
//         [5, "Charlie Wilson", "Marketing", "$78,000", "2023-05-12"],
//       ],
//     }
//   }

//   // Simulate successful non-SELECT query
//   if (
//     query.toLowerCase().includes("create") ||
//     query.toLowerCase().includes("insert")
//   ) {
//     return {
//       success: true,
//       message: "Query executed successfully",
//     }
//   }

//   // Simulate error
//   throw new Error("Invalid SQL query")
// }
