import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import ModeSelectorTooltip from "@/components/editor/ModeSelectorTooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, ChevronDown, Database, FileText } from "lucide-react"
import { Mode } from "@/lib/schema"
import { useState } from "react"

interface Props {
  mode: Mode
  setMode: (mode: Mode) => void
}

export default function ModeSelector({ mode, setMode }: Props) {
  const [isHovering, setIsHovering] = useState(false)

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode)
  }

  return (
    <div className="flex items-center gap-1">
      <ModeSelectorTooltip />
      <DropdownMenu onOpenChange={() => setIsHovering(false)}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-[156px] font-normal h-8 focus-visible:ring-0 focus-visible:ring-offset-0 pl-[12px] pr-[8px]"
          >
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-1">
                <p className="font-mono text-gray-600">Mode:</p>
                <p className="font-[500] w-[65px] flex-shrink-0">
                  {mode === "sql" ? "SQL" : "Plain Text"}
                </p>
              </div>
              <ChevronDown className="h-4 w-4 opacity-60" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[156px]"
          onMouseMove={() => setIsHovering(true)}
        >
          <DropdownMenuItem
            onClick={() => handleModeChange("sql")}
            className={cn(
              "flex items-center justify-between focus-visible:bg-accent h-7",
              mode === "sql" && !isHovering && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <Database size={14} />
              <span>SQL</span>
            </div>
            {mode === "sql" && <Check size={16} />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleModeChange("plain text")}
            className={cn(
              "flex items-center justify-between focus-visible:bg-accent h-7",
              mode === "plain text" && !isHovering && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <FileText size={14} />
              <span>Plain Text</span>
            </div>
            {mode === "plain text" && <Check size={16} />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
