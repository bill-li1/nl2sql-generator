import Main from "@/components/Main"

import { Separator } from "@/components/ui/separator"
import Sidebar from "@/components/sidebar/Sidebar"

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--font-geist-sans)] p-4 h-[100vh]">
      <main className="flex items-start justify-center w-full h-full">
        <div className="p-4 pr-8 space-y-4 flex flex-col max-w-4xl h-full pb-0">
          <h2 className="text-4xl font-semibold tracking-tight">
            AI-Powered SQL Playground
          </h2>
          <p className="text-muted-foreground">
            Run SQL queries or describe your request in plain text to explore a
            sample bike store database. All queries are processed directly in
            your browser, ensuring privacy and fast performance.
          </p>
          <Main />
        </div>
        <Separator orientation="vertical" />
        <Sidebar />
      </main>
    </div>
  )
}
