"use client"

import Prism from "prismjs"
import "prismjs/components/prism-sql"
import styles from "@/components/editor/Editor.module.css"

import { useState } from "react"
import ReactEditor from "react-simple-code-editor"

interface Props {
  onExecute?(sql: string): void
}

function Editor({ onExecute }: Props) {
  const [code, setCode] = useState(`-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
  
SELECT first_name, age
FROM Customers;`)

  return (
    <div className={styles["editor-wrapper"]}>
      <div className={styles["editor-area"]}>
        <ReactEditor
          value={code}
          onValueChange={setCode}
          highlight={(code) =>
            Prism.highlight(code, Prism.languages.sql, "sql")
          }
          padding={14}
          placeholder="Write your SQL query here..."
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
      </div>
    </div>
  )
}

export default Editor
