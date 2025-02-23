import { CODE_SCHEMAS as schemas } from "@/lib/schema"
import { Database } from "lucide-react"
import CodeBlock from "@/components/CodeBlock"

export default function CodeView() {
  return (
    <div className="space-y-4">
      {schemas.map((schema) => (
        <div key={schema.name}>
          <div className="flex items-center gap-2 font-medium mb-2">
            <Database className="h-4 w-4" />
            <h3 className="text-lg">{schema.name}</h3>
          </div>
          <CodeBlock code={schema.sql} />
        </div>
      ))}
    </div>
  )
}
