import { RowType, TableType } from "@/lib/schema"
import PrimaryKeyTooltip from "@/components/sidebar/PrimaryKeyTooltip"
import ForeignKeyTooltip from "@/components/sidebar/ForeignKeytooltip"

interface Props {
  row: RowType
  table: TableType
}

export default function SchemaRow({ row, table }: Props) {
  return (
    <div key={row.name} className="flex gap-2 text-md items-center">
      <div className="w-4 h-4 flex items-center justify-center">
        {row.isPrimaryKey && <PrimaryKeyTooltip table={table} row={row} />}
      </div>
      <div className="flex text-sm">
        <pre>{row.name}</pre>
        <pre className="ml-1">[</pre>
        <pre className="text-[#A626A4]">{row.type}</pre>
        <pre>]</pre>
        {row.foreignKey && <ForeignKeyTooltip table={table} row={row} />}
      </div>
    </div>
  )
}
