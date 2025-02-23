import ResultTable from "./ResultTable"
import { ResultType } from "@/lib/schema"

interface Props {
  results: ResultType
}

export default function Results({ results }: Props) {
  if (!results) {
    return null
  }
  return (
    <div className="flex flex-col h-full w-full gap-r">
      {results.data.map((data, i) => {
        return <ResultTable key={i} data={data} queryTime={results.queryTime} />
      })}
    </div>
  )
}
