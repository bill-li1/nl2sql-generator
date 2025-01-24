import { Database, CircleDot } from "lucide-react"
import { schemaData } from "@/lib/consts"

export default function SchemaView() {
  return (
    <div className="space-y-4">
      {schemaData.map((table) => (
        <div key={table.name} className="space-y-2">
          <div className="flex items-center gap-2 font-medium">
            <Database className="h-4 w-4" />
            <h3 className="text-lg">{table.name}</h3>
          </div>
          <div className="space-y-2 bg-[#FAFAFA] rounded-lg px-4 py-3">
            {table.columns.map((column) => (
              <div key={column.name} className="flex items-start gap-2 text-md">
                <div className="w-4 h-4 mt-1 flex items-center justify-center">
                  {column.isPrimaryKey && (
                    <span className="text-yellow-500" title="Primary Key">
                      <CircleDot className="h-4 w-4" />
                    </span>
                  )}
                </div>
                <div className="flex text-sm">
                  <pre>{column.name}</pre>
                  <pre className="ml-1">[</pre>
                  <pre className="text-[#A626A4]">{column.type}</pre>
                  <pre>]</pre>
                  <pre>(</pre>
                  {column.numeric.map((number, i) => {
                    return (
                      <div key={`${number}-${i}`} className="flex">
                        <pre key={i} className="text-[#B76B01]">
                          {number}
                        </pre>
                        {i !== column.numeric.length - 1 && <pre>,</pre>}
                      </div>
                    )
                  })}
                  <pre>)</pre>
                  {column.isForeignKey && (
                    <pre className="ml-1 text-[#4078F2]">(FK)</pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
