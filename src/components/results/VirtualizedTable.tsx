import { TableCell, TableRow } from "@/components/ui/table"
import { FixedSizeList } from "react-window"
import { SQLValue } from "@/lib/schema"
import { memo } from "react"

interface RowProps {
  index: number
  data: {
    values: Array<Array<SQLValue>>
    columns: Array<string>
  }
}

const Row = memo(({ index, data }: RowProps) => {
  const value = data.values[index]
  return (
    <TableRow className="w-full">
      {value.map((v, j) => (
        <TableCell key={j} className="whitespace-nowrap">
          {v}
        </TableCell>
      ))}
    </TableRow>
  )
})
Row.displayName = "Row"

interface VirtualizedTableProps {
  values: Array<Array<SQLValue>>
  columns: Array<string>
}

export default memo(function VirtualizedTable({
  values,
  columns,
}: VirtualizedTableProps) {
  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={values.length}
      itemSize={35}
      itemData={{ values, columns }}
    >
      {Row}
    </FixedSizeList>
  )
})
