import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CodeView from "@/components/sidebar/CodeView"
import SchemaView from "@/components/sidebar/SchemaView"

export default function Sidebar() {
  return (
    <div className="p-4 pl-8 pt-2 w-[520px] h-full">
      <Tabs defaultValue={"visual"} className="flex flex-col w-full h-full">
        <TabsList className="inline-flex h-7 items-center text-muted-foreground justify-start rounded-none border-b bg-transparent mb-2 p-0 w-[452px]">
          <TabsTrigger
            value="visual"
            className="inline-flex items-center justify-center whitespace-nowrap py-1 text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-7 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Visual
          </TabsTrigger>
          <TabsTrigger
            value="sql"
            className="inline-flex items-center justify-center whitespace-nowrap py-1 text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-7 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            SQL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="visual" className="overflow-scroll pr-6">
          <SchemaView />
        </TabsContent>
        <TabsContent value="sql" className="overflow-scroll pr-6">
          <CodeView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
