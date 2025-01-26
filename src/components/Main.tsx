"use client"

import { useState } from "react"
import Editor from "@/components/editor/Editor"
import Results from "@/components/Results"

export default function Main() {
  const [results, setResults] = useState<any>()
  const [error, setError] = useState<string>("")
  return (
    <div className="p-4 space-y-4 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight">
        Online SQL Interpreter
      </h2>
      <p className="text-muted-foreground leading-5">
        Run SQL queries on a sample dataset. All queries are processed directly
        in your browser—no server required.
      </p>
      <Editor />
      <Results error={error} results={results} />
    </div>
  )
}
