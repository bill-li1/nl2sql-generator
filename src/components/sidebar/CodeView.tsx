import { codeSchemas as schemas } from "@/lib/consts"
import { Database } from "lucide-react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("sql", sql)

export default function CodeView() {
  console.log("One Light styles:", oneLight)

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
            style={oneLight}
            className="rounded-lg text-sm"
            customStyle={{
              backgroundColor: "#FAFAFA",
              border: "1px solid #DEDEDE",
              padding: "0.75rem",
            }}
          >
            {schema.sql}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  )
}
