import { Database } from "sql.js"

export function getTableSchema(db: Database): string {
  const tables = db.exec(
    "SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
  )

  if (!tables || tables.length === 0 || !tables[0].values.length) {
    return "No tables found in the database."
  }

  const output = tables[0].values
    .map(([name, sql]) => `Schema for table: ${name}\n${sql}`)
    .join("\n\n")

  return output
}

export function getSampleRows(db: Database) {
  const tables = db.exec(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
  )

  if (!tables || tables.length === 0 || !tables[0]?.values?.length) {
    return "No tables found in the database."
  }

  const sampleRows: { [key: string]: string | object } = {}

  tables[0].values.forEach(([name]) => {
    if (!name || typeof name !== "string") return
    const result = db.exec(`SELECT * FROM ${name} LIMIT 1;`)

    if (result.length > 0) {
      const columnNames = result[0].columns
      const rowValues = result[0].values[0] || []
      const rowObject = Object.fromEntries(
        columnNames.map((col, i) => [col, rowValues[i]])
      )
      sampleRows[name] = rowObject
    } else {
      sampleRows[name] = "No data"
    }
  })

  return Object.entries(sampleRows)
    .map(
      ([tableName, row]) =>
        `Sample row for table: ${tableName}\n${JSON.stringify(row, null, 2)}`
    )
    .join("\n\n")
}
