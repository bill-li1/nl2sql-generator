import { Card, CardContent } from "@/components/ui/card"

interface Props {
  numRows: number
  queryTime: number
}

export default function ResultTableHeader({ numRows, queryTime }: Props) {
  return (
    <Card className="bg-[#FAFAFA] border-gray-200 rounded-[0.375rem] shadow-sm mb-2 font-mono">
      <CardContent className="flex items-center justify-between p-2 px-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <p className="text-sm text-muted-foreground">Total Rows: </p>
            <p className="text-sm">{numRows}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <p className="text-sm text-muted-foreground">Query Time: </p>
          <p className="text-sm">{queryTime.toFixed(2)}ms</p>
        </div>
      </CardContent>
    </Card>
  )
}
