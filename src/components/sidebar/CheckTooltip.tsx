import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RowType } from "@/lib/schema"

interface Props {
  row: RowType
}

export default function ForeignKeyTooltip({ row }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="text-green-600 flex pl-2 gap-1 items-center">
          <pre className="font-semibold">CHECK</pre>
        </div>
      </TooltipTrigger>
      <TooltipContent
        className="bg-white text-black border border-gray-200 flex p-2"
        sideOffset={5}
      >
        <div className="flex items-center">
          <pre>CHECK (</pre>
          <pre>{row.check}</pre>
          <pre>)</pre>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
