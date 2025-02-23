import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

export default function ModeSelectorTooltip() {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 [&_svg]:size-[18px]"
          >
            <Info className="text-gray-500" />
            <span className="sr-only">Mode selector help</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-white text-gray-700 border border-gray-200 flex flex-col text-sm"
          sideOffset={5}
        >
          <ul className="list-disc list-inside">
            <li className="m-1">
              <span className="font-semibold">SQL</span>: Write queries using
              SQL syntax
            </li>
            <li className="m-1">
              <span className="font-semibold">Plain Text</span>: Describe your
              query in plain text
              <br />
              <span className="ml-4">and AI will generate the SQL for you</span>
            </li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
