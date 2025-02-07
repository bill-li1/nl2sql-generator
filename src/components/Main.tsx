"use client"

import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"
import { useState, useEffect } from "react"
import Editor from "@/components/editor/Editor"
import Results from "@/components/Results"
import { useDatabase } from "@/app/hooks/useDatabase"

const defaultCode = `-- Create new tables, insert data and all other SQL operations. 

SELECT first_name, age
FROM Customers
LIMIT 10;`

export default function Main() {
  const [code, setCode] = useState(defaultCode)
  const [results, setResults] = useState<any>()
  const [error, setError] = useState<string>("")
  const { db, error: dbError } = useDatabase()

  useEffect(() => {
    if (dbError) {
      setError(dbError)
    }
  }, [dbError])

  const executeQuery = () => {
    if (!db) {
      setError("Database not initialized")
      return
    }

    try {
      const result = db.exec(code)
      setResults(result)
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to execute query")
      setResults(null)
    }
  }

  return (
    <>
      <Editor code={code} setCode={setCode} />
      <Button onClick={executeQuery}>
        <PlayIcon className="h-4 w-4 mr-2" />
        Execute SQL
      </Button>
      <Results error={error} results={results} />
    </>
  )
}
