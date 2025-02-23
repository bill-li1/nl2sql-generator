import {
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ResultTableHeader from "@/components/results/ResultTableHeader"
import { TableVirtuoso } from "react-virtuoso"
import { QueryExecResult } from "@/lib/schema"
import { forwardRef, memo } from "react"
import { cn } from "@/lib/utils"

interface Props {
  data: QueryExecResult
  queryTime: number
}

const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn("w-full caption-bottom text-sm font-mono", className)}
    {...props}
  />
))
Table.displayName = "Table"

export default memo(function ResultTable({ data, queryTime }: Props) {
  const { columns, values } = data

  return (
    <div className="flex flex-col w-full h-full">
      <ResultTableHeader numRows={values.length} queryTime={queryTime} />
      <TableVirtuoso
        style={{ height: "100%" }}
        data={values}
        overscan={30}
        components={{
          Table: (props) => <Table {...props} />,
          TableBody: (props) => <TableBody {...props} />,
          TableHead: (props) => (
            <TableHeader {...props} className="bg-background" />
          ),
          TableRow: (props) => <TableRow {...props} />,
        }}
        fixedHeaderContent={() => (
          <TableRow>
            {columns.map((column, i) => (
              <TableHead key={`${column}-${i}`}>{column}</TableHead>
            ))}
          </TableRow>
        )}
        itemContent={(_, value) => (
          <>
            {value.map((v, j) => (
              <TableCell className="whitespace-nowrap" key={j}>
                {v}
              </TableCell>
            ))}
          </>
        )}
      />
    </div>
  )
})

//<Table className="font-mono text-sm w-full">
//  <TableHeader>
//    <TableRow>
//      {columns.map((column, i) => (
//        <TableHead key={`${column}-${i}`}>{column}</TableHead>
//      ))}
//    </TableRow>
//  </TableHeader>
//  <TableBody className="border-2 border-red-500">
//    <Virtuoso
//      style={{ height: "400px", width: "1000px" }}
//      data={values}
//      totalCount={values.length}
//      itemContent={(index, item) => (
//        <TableRow>
//          {item.map((v, j) => (
//            <TableCell key={j}>{v}</TableCell>
//          ))}
//        </TableRow>
//      )}
//    />
//  </TableBody>
//</Table>
//{values.map((value, i) => (
//  <TableRow className="w-full" key={i}>
//    {value.map((v, j) => (
//      <TableCell key={j} className="whitespace-nowrap">
//        {v}
//      </TableCell>
//    ))}
//  </TableRow>
//))}
