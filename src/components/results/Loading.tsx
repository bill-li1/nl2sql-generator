import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[25%]">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="text-center text-md text-muted-foreground">
        Processing your query...
      </p>
    </div>
  )
}
