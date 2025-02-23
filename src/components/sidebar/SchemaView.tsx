import { Database } from "lucide-react"
import { schemaData } from "@/lib/schema"
import { TooltipProvider } from "@/components/ui/tooltip"
import SchemaRow from "@/components/sidebar/SchemaRow"

export default function SchemaView() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="space-y-4">
        {schemaData.map((table) => (
          <div key={table.name} className="space-y-2">
            <div className="flex items-center gap-2 font-medium">
              <Database className="h-4 w-4" />
              <h3 className="text-lg">{table.name}</h3>
            </div>
            <div className="space-y-2 bg-[#FAFAFA] rounded-[0.375rem] px-4 py-3 border border-gray-200">
              {table.rows.map((row) => (
                <SchemaRow key={row.name} row={row} table={table} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
