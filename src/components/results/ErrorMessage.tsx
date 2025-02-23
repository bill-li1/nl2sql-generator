import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { X, CircleAlert } from "lucide-react"

interface Props {
  error: string
  onDismiss: () => void
}

export default function ErrorMessage({ error, onDismiss: onDismiss }: Props) {
  if (!error) return null
  return (
    <Alert
      variant="destructive"
      className="border border-red-200 bg-red-50 text-red-900 rounded-[0.375rem] p-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <CircleAlert className="h-8 w-8 text-red-600" strokeWidth={2.5} />
          <div className="flex flex-col gap-[2px]">
            <AlertTitle className="text-base font-semibold leading-none">
              Uncaught Error
            </AlertTitle>
            <AlertDescription className="text-base leading-none">
              {error}
            </AlertDescription>
          </div>
        </div>
        <div
          className="rounded-md hover:bg-red-100 h-8 w-8 flex items-center justify-center"
          onClick={onDismiss}
          role="button"
        >
          <X />
        </div>
      </div>
    </Alert>
  )
}
