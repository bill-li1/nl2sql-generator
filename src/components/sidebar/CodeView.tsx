import { codeSchemas as schemas } from "@/lib/consts"
import { Database } from "lucide-react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import sql from "react-syntax-highlighter/dist/esm/languages/hljs/sql"
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs"

SyntaxHighlighter.registerLanguage("sql", sql)

export default function CodeView() {
  return (
    <div>
      {schemas.map((schema) => (
        <div key={schema.name} className="pb-4">
          <div className="flex items-center gap-2 font-medium mb-2">
            <Database className="h-4 w-4" />
            <h3 className="text-lg">{schema.name}</h3>
          </div>
          <SyntaxHighlighter
            language="sql"
            style={xcode}
            wrapLongLines
            className="rounded-lg text-sm"
            customStyle={{
              backgroundColor: "#FAFAFA",
              paddingLeft: "1.25rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            }}
          >
            {schema.sql}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  )
}
