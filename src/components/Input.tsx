"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

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

export default function SQLInterpreter() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [isExecuting, setIsExecuting] = useState(false)

  const handleExecute = async () => {
    setIsExecuting(true)
    setError(null)
    setResults(null)

    try {
      const result = await executeSQL(query)
      setResults(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsExecuting(false)
    }
  }

  return (
    <div className="p-4 space-y-4 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight">
        Online SQL Interpreter
      </h2>
      <p className="text-muted-foreground leading-5">
        Run SQL queries on a sample dataset. All queries are processed directly
        in your browser—no server required.
      </p>
      <Textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your SQL query here (e.g., SELECT * FROM employees)"
        className="font-mono min-h-[400px] resize-y"
        spellCheck={false}
      />

      <div className="flex gap-2">
        <Button
          onClick={handleExecute}
          disabled={isExecuting || !query.trim()}
          className="gap-2"
        >
          <Play className="h-4 w-4" />
          {isExecuting ? "Executing..." : "Execute"}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {results?.columns ? (
        <Table>
          <TableHeader>
            <TableRow>
              {results.columns.map((column: string) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.rows.map((row: any[], rowIndex: number) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={`${rowIndex}-${cellIndex}`}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-sm text-muted-foreground">{results?.message}</div>
      )}
    </div>
  )
}
