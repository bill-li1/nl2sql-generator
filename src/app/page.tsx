"use client"

import Input from "@/components/Input"
import Sidebar from "@/components/sidebar/Sidebar"
import { Separator } from "@/components/ui/separator"
import { useDatabase } from "./hooks/useDatabase"
import { useEffect } from "react"

export default function Home() {
  const { db, error } = useDatabase()

  useEffect(() => {
    if (error) {
      console.error("Database error:", error)
    }
    if (db) {
      console.log("Database initialized successfully")

      // Test query
      try {
        const result = db.exec(`
          SELECT 
            u.name as author,
            p.title,
            p.content
          FROM users u 
          JOIN posts p ON u.id = p.user_id
          ORDER BY u.name, p.title
        `)
        console.log("Query result:", result)
      } catch (err) {
        console.error("Query error:", err)
      }
    }
  }, [db, error])

  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--font-geist-sans)] p-4 h-[100vh]">
      <main className="flex flex-row gap-4 items-start">
        <Input />
        <Separator orientation="vertical" />
        <Sidebar />
      </main>
    </div>
  )
}
