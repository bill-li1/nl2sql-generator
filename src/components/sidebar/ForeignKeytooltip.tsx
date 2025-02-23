import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RowType, TableType } from "@/lib/schema"
import { Database, LinkIcon, ArrowRight } from "lucide-react"

interface Props {
  table: TableType
  row: RowType
}

export default function ForeignKeyTooltip({ table, row }: Props) {
  const foreignKeys = table.rows
    .filter((c) => c.foreignKey === row.foreignKey)
    .map((c) => c.name)
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="text-blue-400 flex pl-2 gap-1 items-center">
          <LinkIcon className="h-[12px] w-[12px]" strokeWidth={3} />
          <ArrowRight className="h-[12px] w-[12px]" strokeWidth={3} />
          <pre className="font-semibold">{row?.foreignKey}</pre>
        </div>
      </TooltipTrigger>
      <TooltipContent
        className="bg-white text-black border border-gray-200 flex p-2"
        sideOffset={5}
      >
        <div className="flex items-center">
          <pre>FOREIGN KEY </pre>
          <div className="flex gap-[2px] items-center">
            <Database className="h-[12px] w-[12px]" strokeWidth={2.25} />
            <pre className="font-semibold">{row?.foreignKey}</pre>
            <pre>(</pre>
          </div>
        </div>
        {foreignKeys.map((key, index) => (
          <>
            <pre
              key={key}
              className={`flex ${
                key === row.name ? "text-blue-400 font-bold" : ""
              }`}
            >
              {key}
            </pre>
            {index !== foreignKeys.length - 1 && <pre>, </pre>}
          </>
        ))}
        <pre>)</pre>
      </TooltipContent>
    </Tooltip>
  )
}
