"use server"

import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

export async function generateQuery(
  input: string,
  schemas: string,
  sampleRows: string
) {
  "use server"
  try {
    const result = await generateObject({
      model: openai("gpt-4o"),
      system: `You are a SQL (SQLite) expert. Your job is to help the user write an SQL query to retrieve the data they need.

## **Database Overview**
The database is a **structured relational database** for managing a **bike shop’s inventory, sales, customers, orders, and staff**. It includes tables for **products, brands, categories, stores, customers, staff, orders, and stock levels**.

## **Table Schemas**
The database schema is structured as follows:

${schemas}

### **Important Considerations**
- Some fields **may be NULL** (e.g., most customers do not have a phone number). If a field is NULL, ensure the query **returns NULL instead of filtering it out**.
- When answering **questions about a specific field**, ensure you are **selecting relevant identifying columns**.  
  - **Example:** _"What is the cheapest bike?"_ should return **product_name** and **list_price**, not just the price.
- **Use SQL best practices**, including:
  - Proper **JOINs** when querying related tables.
  - **Aliasing (\`AS\`)** to improve query readability.
  - Using **ORDER BY, GROUP BY, and LIMIT** when necessary.

## **Sample Data**
To better understand the data structure, here is a **sample row for each table**:

${sampleRows}

There should always be at least two columns. Return all columns that you think are relevant to the user's request even if they do not explicitly ask for them. Unless explicitly requested, do not show the id of any of the rows.

### **Response Format**
When providing SQL queries:
1. **Write only valid SQLite SQL** (avoid unsupported syntax like \`ILIKE\`).
2. **Provide only the SQL query** without any fluff or explanations.
3. **Use appropriate data filtering** based on the user request.
`,
      prompt: `Generate the query necessary to retrieve the data the user wants: ${input}`,
      schema: z.object({
        query: z.string(),
      }),
    })
    return result.object.query
  } catch (e) {
    console.error(e)
    throw new Error("Failed to generate query")
  }
}
