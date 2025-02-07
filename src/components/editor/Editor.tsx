import Prism from "prismjs"
import "prismjs/components/prism-sql"
import styles from "@/components/editor/Editor.module.css"

import ReactEditor from "react-simple-code-editor"

interface Props {
  code: string
  setCode: (sql: string) => void
}

function Editor({ code, setCode }: Props) {
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
