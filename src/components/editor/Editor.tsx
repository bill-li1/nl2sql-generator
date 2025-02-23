import Prism from "prismjs"
import "prismjs/components/prism-sql"
import styles from "@/components/editor/Editor.module.css"
import { Mode } from "@/lib/schema"

import ReactEditor from "react-simple-code-editor"

interface Props {
  content: string
  mode: Mode
  setContent: (sql: string) => void
}

function Editor({ content, mode, setContent }: Props) {
  const isSQL = mode === "sql"
  return (
    <div className={styles["editor-wrapper"]}>
      <div className={styles["editor-area"]}>
        <ReactEditor
          value={content}
          onValueChange={setContent}
          highlight={(code) =>
            isSQL ? Prism.highlight(code, Prism.languages.sql, "sql") : code
          }
          padding={14}
          placeholder={
            isSQL
              ? "Write your SQL query here..."
              : "Write your plain text query here..."
          }
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
