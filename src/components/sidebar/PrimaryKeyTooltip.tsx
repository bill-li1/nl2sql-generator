import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RowType, TableType } from "@/lib/schema"
import { Database, KeyRound as Key } from "lucide-react"

interface Props {
  table: TableType
  row: RowType
}

export default function PrimaryKeyTooltip({ table, row }: Props) {
  const primaryKeys = table.rows
    .filter((c) => c.isPrimaryKey)
    .map((c) => c.name)
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="text-yellow-500">
          <Key className="h-[14px] w-[14px]" strokeWidth={3} />
        </div>
      </TooltipTrigger>
      <TooltipContent
        className="bg-white text-black border border-gray-200 flex"
        sideOffset={5}
      >
        <div className="flex items-center">
          <pre>PRIMARY KEY </pre>
          <div className="flex gap-[2px] items-center">
            <Database className="h-[12px] w-[12px]" strokeWidth={2.25} />
            <pre className="font-semibold">{table.name}</pre>
            <pre>(</pre>
          </div>
        </div>
        {primaryKeys.map((key, index) => (
          <>
            <pre
              key={key}
              className={`flex ${
                key === row.name ? "text-yellow-600 font-bold" : ""
              }`}
            >
              {key}
            </pre>
            {index !== primaryKeys.length - 1 && <pre>, </pre>}
          </>
        ))}
        <pre>)</pre>
      </TooltipContent>
    </Tooltip>
  )
}
