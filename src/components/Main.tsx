"use client"

import { useDatabase } from "@/app/hooks/useDatabase"
import Editor from "@/components/editor/Editor"
import ErrorMessage from "@/components/results/ErrorMessage"
import Results from "@/components/results/Results"
import { Button } from "@/components/ui/button"
import { ResultType, Mode } from "@/lib/schema"
import { PlayIcon } from "lucide-react"
import ModeSelector from "@/components/editor/ModeSelector"
import { useEffect, useState } from "react"
import { getTableSchema, getSampleRows } from "@/app/actions"
import { generateQuery } from "@/app/serverActions"
import CodeBlock from "@/components/CodeBlock"
import Loading from "@/components/results/Loading"

const defaultCode = `-- Create new tables, insert data and all other SQL operations. 
SELECT * FROM Customers limit 50;`

export default function Main() {
  const [code, setCode] = useState(defaultCode)
  const [plainText, setPlainText] = useState("")
  const [results, setResults] = useState<ResultType | null>()
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>("sql")
  const [generatedCode, setGeneratedCode] = useState("")
  const { db, error: dbError, isLoading: isDbLoading } = useDatabase()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (dbError) {
      setError(dbError)
    }
  }, [dbError])

  const clearResults = () => {
    setResults(null)
    setGeneratedCode("")
    setError(null)
  }

  useEffect(() => {
    clearResults()
  }, [mode])

  const queryData = (code: string) => {
    if (!db) {
      setError("Database not initialized")
      return
    }

    try {
      const startTime = performance.now()
      const data = db.exec(code)
      const endTime = performance.now()
      const queryTime = endTime - startTime
      setResults({ data, queryTime })
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to execute query")
      setResults(null)
    }
  }

  const executeSQLQuery = () => {
    setIsLoading(true)
    clearResults()
    queryData(code)
    setIsLoading(false)
  }

  const executePlainTextQuery = async () => {
    if (!db) {
      setError("Database not initialized")
      return
    }
    setIsLoading(true)
    clearResults()
    try {
      const schemas = getTableSchema(db)
      const sampleRows = getSampleRows(db)
      const result = await generateQuery(plainText, schemas, sampleRows)
      setGeneratedCode(result)
      queryData(result)
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Failed to execute query")
    } finally {
      setIsLoading(false)
    }
  }

  const executeQuery = mode === "sql" ? executeSQLQuery : executePlainTextQuery
  const isSQL = mode === "sql"

  return (
    <div className="h-full flex flex-col gap-4">
      <Editor
        content={isSQL ? code : plainText}
        setContent={isSQL ? setCode : setPlainText}
        mode={mode}
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Button onClick={executeQuery} className="h-8" disabled={isDbLoading}>
            <PlayIcon className="h-4 w-4 mr-2" />
            Run Query
          </Button>
          {results && (
            <Button
              onClick={clearResults}
              className="h-8"
              variant="outline"
              disabled={isDbLoading}
            >
              Clear
            </Button>
          )}
        </div>
        <ModeSelector mode={mode} setMode={setMode} />
      </div>
      {isLoading && <Loading />}
      {!isSQL && generatedCode && <CodeBlock code={generatedCode.trim()} />}
      {results && <Results results={results} />}
      {error && <ErrorMessage error={error} onDismiss={() => setError(null)} />}
    </div>
  )
}
